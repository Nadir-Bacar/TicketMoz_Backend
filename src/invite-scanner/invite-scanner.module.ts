import { Module } from '@nestjs/common';
import { InviteScannerController } from './invite-scanner.controller';
import { InviteScannerService } from './invite-scanner.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [InviteScannerController],
  providers: [InviteScannerService],
})
export class InviteScannerModule {}
