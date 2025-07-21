import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { UserDto } from 'src/user/dto/get-users';
import { LoginDto } from './dto/loginDto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from 'src/email/email.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly emailService: EmailService,
  ) {}

  async login(loginData: LoginDto): Promise<object> {
    try {
      const { email, password } = loginData;

      const user = await this.prisma.user.findFirst({
        where: { email },
        include: {
          company: true,
        },
      });

      if (!user) {
        throw new HttpException(
          'Email não encontrado',
          HttpStatus.UNAUTHORIZED,
        );
      }

      const isPasswordValid = password === user.password ? true : false;

      if (!isPasswordValid) {
        throw new HttpException('Senha inválida', HttpStatus.UNAUTHORIZED);
      }

      const isUser = plainToInstance(UserDto, user);
      const payload = { user: isUser };
      const token = this.jwtService.sign(payload);

      return {
        success: true,
        token,
      };
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async verifyUser(email: string): Promise<any> {
    try {
      const user = await this.prisma.user.findFirst({
        where: { email },
        include: {
          company: true,
        },
      });

      if (!user) {
        return {
          success: false,
          message: 'Email não existe',
        };
      }

      switch (user.user_type) {
        case 'promotor':
          if (user.company != null && user.company.isVerify == false) {
            return {
              success: false,
              message:
                'A conta está bloqueada à espera da aprovação da linha de suporte, fique atento ao seu email',
            };
          } else if (user.isVerify == false) {
            return {
              success: false,
              message: 'Sua conta está bloqueada, contate a linha de suporte',
            };
          } else {
            return {
              success: true,
              data: user,
            };
          }
        case 'scanner':
          if (user.isVerify == false) {
            return {
              success: false,
              message: 'Utilizador bloqueado, contate a linha de suporte',
            };
          } else {
            return {
              success: true,
              data: user,
            };
          }

        case 'cliente':
          if (user.isVerify == false) {
            return {
              success: false,
              message: 'Utilizador bloqueado, contate a linha de suporte',
            };
          } else {
            return {
              success: true,
              data: user,
            };
          }
          break;
      }
    } catch (error) {
      throw new HttpException(
        'Erro ao verificar utilizador',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async mailRecover(
    email: string,
  ): Promise<{ success: boolean; message?: string }> {
    try {
      const user = await this.prisma.user.findFirst({
        where: { email },
        include: { company: true },
      });

      if (!user) {
        return { success: false, message: 'Utilizador não encontrado' };
      }

      const payload = { email: email, name: user.name };
      const token = this.jwtService.sign(payload);
      const resetlink = 'http://localhost:3000/auth/reset-password/' + token;
      await this.emailService.resetPassword(user.name, email, resetlink);

      return { success: true, message: 'Email de recuperação enviado' };
    } catch (error) {
      throw new HttpException(
        'Erro ao enviar email de recuperação',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async resetPassword(email: string, password: string): Promise<any> {
    try {
      const user = await this.prisma.user.findFirst({
        where: { email: email },
      });

      const resp = await this.prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          password: password,
        },
      });

      return {
        success: true,
        message: 'Senha atualizada com sucesso',
      };
    } catch (error) {
      throw new HttpException(
        'Erro ao redefinir a senha -> ' + error,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
