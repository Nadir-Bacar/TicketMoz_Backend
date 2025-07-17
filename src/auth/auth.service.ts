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

  async verifyUser(email: string): Promise<{ success: boolean }> {
    try {
      const user = await this.prisma.user.findFirst({
        where: { email },
      });

      if (!user) {
        return { success: false };
      }

      return { success: true };
    } catch (error) {
      throw new HttpException(
        'Error verifying user',
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
        return { success: false, message: 'User not found' };
      }

      const payload = { email: email, name: user.name };
      const token = this.jwtService.sign(payload);
      const resetlink = 'http://localhost:3000/auth/reset-password/' + token;
      await this.emailService.resetPassword(user.name, email, resetlink);

      return { success: true, message: 'Recovery email sent' };
    } catch (error) {
      throw new HttpException(
        'Error sending recovery email',
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
        message: 'senha atualizado com sucesso',
      };
    } catch (error) {
      throw new HttpException(
        'Erro redifindo a senha -> ' + error,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
