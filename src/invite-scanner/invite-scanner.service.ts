import { Event } from './../../generated/prisma/index.d';
import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as dayjs from 'dayjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class InviteScannerService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async createInvite(eventId: string, total_scanner: number): Promise<any> {
    // Gera token único
    // const token = uuidv4();
    const expiresAt = dayjs().add(1, 'day').toDate();

    const evento = await this.prisma.event.findFirst({
      where: {
        id: eventId,
      },
      include: {
        userEvent: true,
        company: true,
      },
    });

    if (!evento)
      return {
        success: false,
        message: 'Nenhum evento encontrado ',
      };

    const payload = { event: evento };
    const token = this.jwtService.sign(payload);

    // Cria o convite
    const invite = await this.prisma.inviteScanner.create({
      data: {
        token: token,
        total_scanner: total_scanner,
        expiresAt: expiresAt,
        event: {
          connect: {
            id: eventId,
          },
        },
      },
    });

    // Envia o email (exemplo, use seu serviço real de email)
    const link = `https://ticket-moz-seven.vercel.app/scanner-invite/${token}`;

    return {
      success: true,
      message: 'Convite enviado com sucesso!',
      link,
      expiresAt,
    };
  }

  async acceptInvite(token: string, userId: string): Promise<any> {
    try {
      const data = this.jwtService.decode(token);
      const evento = data.event;

      const invite = await this.prisma.event.findFirst({
        where: {
          inviteScanner: {
            token: token,
          },
        },
        include: {
          inviteScanner: true,
          company: true,
          ticket: true,
        },
      });

      if (!invite)
        return {
          success: false,
          message: 'Convite inválido!',
        };

      if (invite.inviteScanner && invite.inviteScanner.expiresAt < new Date())
        return {
          success: false,
          message: 'Convite expirado!',
        };
      if (
        invite.inviteScanner.acceptedCount >= invite.inviteScanner.total_scanner
      )
        return {
          success: false,
          message: 'Limite de scanners atingido!',
        };

      const verifyUser = await this.prisma.userEvent.findFirst({
        where: {
          eventId: evento.id,
          AND: {
            userId: userId,
          },
        },
      });

      if (verifyUser) {
        return {
          success: false,
          message: 'Utilizador ja esta associado ao evento',
        };
      }

      // Relaciona o utilizador ao evento (UserEvent)
      await this.prisma.userEvent.create({
        data: {
          event: {
            connect: {
              id: invite.id, // Use o ID do evento relacionado ao convite
            },
          },
          user: {
            connect: {
              id: userId,
            },
          },
        },
      });

      // Atualiza o contador de aceites
      await this.prisma.inviteScanner.update({
        where: { token },
        data: { acceptedCount: { increment: 1 } },
      });

      return {
        success: true,
        message: 'Convite aceite! Agora é um scanner deste evento.',
      };
    } catch (error) {
      throw new BadRequestException('Erro ao processar o convite');
    }
  }
}
