import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EmailModule } from 'src/email/email.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Use um segredo forte em produção
      signOptions: { expiresIn: '1h' }, // Token expira em 1 hora
    }),
    PrismaModule,
    EmailModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
