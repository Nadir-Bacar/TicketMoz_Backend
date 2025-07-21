import { Module } from '@nestjs/common';
import { InviteScannerController } from './invite-scanner.controller';
import { InviteScannerService } from './invite-scanner.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Use um segredo forte em produção
      signOptions: { expiresIn: '1d' }, // Token expira em 1 hora
    }),
    PrismaModule,
  ],
  controllers: [InviteScannerController],
  providers: [InviteScannerService],
})
export class InviteScannerModule {}
