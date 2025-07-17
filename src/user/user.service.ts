import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto/get-users';
import { CreateUserDto, FindUserDto } from './dto/create-user';
import { response } from 'express';
import { EmailService } from 'src/email/email.service';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly emailService: EmailService,
  ) {}

  // Busca todos os utilizadores
  async getAllUsers(): Promise<any> {
    try {
      const response = await this.prisma.user.findMany({
        include: {
          company: true,
          SalesTickets: true,
        },
      });

      if (response.length === 0) {
        return {
          success: false,
          status: 200,
          message: 'Nenhum utilizador encontrado',
          data: [],
        };
      }

      return {
        success: true,
        data: plainToInstance(FindUserDto, response),
      };
    } catch (error) {}
  }

  // Cria utilizadores
  async createUser(user: CreateUserDto): Promise<any> {
    try {
      if (user.user_type == 'promotor') {
        const response = await this.prisma.user.create({
          data: {
            name: user.name,
            email: user.email,
            user_type: user.user_type,
            password: user.password,
            company: {
              create: {
                name: user.company.name,
                email: user.company.email,
                phone_number: user.company.phone_number,
                nuit_url: 'http://',
              },
            },
          },
        });

        return {
          success: true,
          data: response,
        };
      } else {
        const response = await this.prisma.user.create({
          data: {
            name: user.name,
            email: user.email,
            user_type: user.user_type,
            password: user.password,
            isVerify: true,
          },
        });

        return {
          success: true,
          data: response,
        };
      }
    } catch (error) {
      throw new HttpException(
        'Erro ao processar requiscao -> ' + error,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  // Buscar mediante a role
  async getuserByType(
    type: 'comprador' | 'scanner' | 'promotor',
  ): Promise<any> {
    try {
      const response = await this.prisma.user.findMany({
        where: { user_type: type },
      });

      return {
        success: true,
        data: plainToInstance(FindUserDto, response),
      };
    } catch (error) {
      throw new HttpException(
        'Erro ao processa requisicao -> ' + error,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  // deletar todos utilizadores
  async deleteAll(): Promise<any> {
    try {
      await this.prisma.company.deleteMany();

      const response = await this.prisma.user.deleteMany();

      return response;
    } catch (error) {
      throw new HttpException(
        'erro ao processar requisicao -> ' + error,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  // buscar todas as empresas
  async getAllCompany(): Promise<any> {
    try {
      const response = await this.prisma.company.findMany();

      if (response.length == 0)
        return {
          success: true,
          message: 'Nenhuma empresa encontrada',
        };

      return {
        success: true,
        data: response,
      };
    } catch (error) {}
  }

  // Bloquear utilizador
  async blockUser(userId: string): Promise<any> {
    try {
      const user = await this.prisma.user.update({
        where: { id: userId },
        data: { isVerify: false },
      });

      await this.emailService.notifyBlocked(user.email, user.name);
      return { success: true, message: 'Utilizador bloqueado', data: user };
    } catch (error) {
      throw new HttpException(
        'Erro ao bloquear utilizador -> ' + error,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  // Desbloquear utilizador
  async unblockUser(userId: string): Promise<any> {
    try {
      const user = await this.prisma.user.update({
        where: { id: userId },
        data: { isVerify: true },
      });

      await this.emailService.notifyUnblocked(user.email, user.name);
      return { success: true, message: 'Utilizador desbloqueado', data: user };
    } catch (error) {
      throw new HttpException(
        'Erro ao desbloquear utilizador -> ' + error,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  // Aprovar promotor (verificar empresa)
  async approvePromoter(userId: string): Promise<any> {
    try {
      // Busca o usuário e a empresa associada
      const user = await this.prisma.user.findUnique({
        where: { id: userId },
        include: { company: true },
      });

      if (!user || !user.company) {
        throw new HttpException(
          'Promotor ou empresa não encontrada',
          HttpStatus.NOT_FOUND,
        );
      }

      // Atualiza o campo isVerify da empresa para true
      const company = await this.prisma.company.update({
        where: { id: user.company.id },
        data: { isVerify: true },
      });

      await this.emailService.notifyPromoterApproved(
        user.email,
        user.name,
        company.name,
      );
      return { success: true, message: 'Promotor aprovado', data: company };
    } catch (error) {
      throw new HttpException(
        'Erro ao aprovar promotor -> ' + error,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
