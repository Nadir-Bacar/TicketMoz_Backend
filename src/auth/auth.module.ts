import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { EmailModule } from 'src/email/email.module';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Use um segredo forte em produção
      signOptions: { expiresIn: '1h' }, // Token expira em 1 hora
    }),
    PrismaModule,
    EmailModule,
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
