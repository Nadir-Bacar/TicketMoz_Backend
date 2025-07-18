import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TicketService } from './ticket.service';
import { BuyTicketDto } from './dto/saleticket-dto';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post('pay')
  pay(@Body() data: any) {
    return this.ticketService.pay(data);
  }

  @Delete('delete-all')
  deleteAll(): Promise<any> {
    return this.ticketService.deleteAll();
  }

  @Post('buy-ticket')
  async buyTickets(@Body('data') data: BuyTicketDto) {
    return this.ticketService.buyTicket(data);
  }
  @Post('pay-alternative')
  async payAlternative(@Body('data') data: any) {
    return this.ticketService.paymentAlternative(data);
  }

  @Post('confirm-alternative')
  async confirmPayAlternative(@Body('data') data: any) {
    return this.ticketService.confirmPaymentAlternative(data);
  }

  @Get('list-sales')
  listAllSales() {
    return this.ticketService.listAllSales();
  }

  @Delete('delete-all-sales')
  deleteAllSales() {
    return this.ticketService.deleteAllSales();
  }

  @Get('saled-ticket/:id')
  getSales(@Param('id') id: string) {
    return this.ticketService.getSaledTciketById(id);
  }

  @Get('list-sales/:userID')
  listSales(@Param('userID') userID: string) {
    return this.ticketService.listSales(userID);
  }

  @Get(':userID')
  getAll(@Param('userID') userID: string) {
    return this.ticketService.getAll(userID);
  }

  @Get('ticket-type/:userID')
  getAllTicketType(@Param('userID') userID: string) {
    return this.ticketService.getAllTicketType(userID);
  }

  // @Get('user/:userId')
  // async listUserTickets(@Param('userId') userId: string) {
  //   return this.ticketService.listUserTickets(userId);
  // }

  // @Patch('use/:qrCode')
  // async useTicket(@Param('qrCode') qrCode: string) {
  //   return this.ticketService.useTicket(qrCode);
  // }
}
