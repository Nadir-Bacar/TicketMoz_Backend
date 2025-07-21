import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto/get-users';
import { CreateUserDto, FindUserDto } from './dto/create-user';
import { response } from 'express';
import { EmailService } from 'src/email/email.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly emailService: EmailService,
    private readonly jwtService: JwtService,
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
        data: plainToInstance(
          FindUserDto,
          response.filter((t) => t.user_type != 'master-admin'),
        ),
      };
    } catch (error) {
      throw new HttpException(
        'Erro ao buscar utilizadores',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // Cria utilizadores
  async createUser(user: CreateUserDto): Promise<any> {
    try {
      const verify = await this.prisma.user.findFirst({
        where: {
          email: user.email,
        },
      });

      if (verify) {
        return {
          success: false,
          message: 'Email já existe',
        };
      }

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
        'Erro ao processar requisição -> ' + error,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async sendEmailToConfirm(user: CreateUserDto) {
    try {
      const payload = { user: user };
      const token = await this.jwtService.signAsync(payload);

      const url = `http://localhost:3000/user-registe/${token}`;

      await this.emailService.sendAccountActivation(user.email, user.name, url);

      return {
        success: true,
        message: 'Email enviado com sucesso',
      };
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  // Buscar mediante a role
  async getUserByType(
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
        'Erro ao processar requisição -> ' + error,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  // Deletar todos utilizadores
  async deleteAll(): Promise<any> {
    try {
      await this.prisma.company.deleteMany();
      const response = await this.prisma.user.deleteMany();
      return response;
    } catch (error) {
      throw new HttpException(
        'Erro ao processar requisição -> ' + error,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  // Buscar todas as empresas
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
    } catch (error) {
      throw new HttpException(
        'Erro ao buscar empresas',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
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
      // Busca o utilizador e a empresa associada
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

  async updateName(data: any): Promise<any> {
    try {
      const response = await this.prisma.user.update({
        where: { id: data.userID },
        data: {
          name: data.name,
        },
        include: {
          company: true,
        },
      });

      if (!response) {
        return {
          success: false,
          message: 'Erro ao atualizar utilizador',
        };
      }

      return {
        success: true,
        data: response,
      };
    } catch (error) {
      throw new HttpException(
        'Erro ao atualizar nome -> ' + error,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
