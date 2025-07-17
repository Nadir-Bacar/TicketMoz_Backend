import { Event } from './../../generated/prisma/index.d';
import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';
import * as dayjs from 'dayjs';

@Injectable()
export class InviteScannerService {
  constructor(private readonly prisma: PrismaService) {}

  async createInvite(eventId: string, total_scanner: number): Promise<any> {
    // Gera token único
    const token = uuidv4();
    const expiresAt = dayjs().add(1, 'day').toDate();

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

    // Envie o email (exemplo, use seu serviço real de email)
    const link = `http://localhost:3000/scanner-invite/${token}`;
    // await this.emailService.send(email, 'Convite para ser scanner', `Clique aqui: ${link}`);

    return {
      success: true,
      message: 'Convite enviado!',
      link, // para debug, remova em produção
      expiresAt,
    };
  }

  async acceptInvite(token: string, userId: string): Promise<any> {
    try {
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

      // Relacione o user ao evento (UserEvent)
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
        message: 'Convite aceito! Agora você é scanner deste evento.',
      };
    } catch (error) {}
  }
}
