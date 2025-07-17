import { Module } from '@nestjs/common';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EmailModule } from 'src/email/email.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [PrismaModule, EmailModule, HttpModule],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}
