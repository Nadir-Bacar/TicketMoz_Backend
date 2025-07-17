import { Controller, Post, Body, Query, Param } from '@nestjs/common';
import { InviteScannerService } from './invite-scanner.service';

@Controller('invite-scanner')
export class InviteScannerController {
  constructor(private readonly service: InviteScannerService) {}

  @Post('create')
  async createInvite(
    @Body('eventID') eventID: string,
    @Body('total_scanner') total_scanner: number,
  ) {
    return this.service.createInvite(eventID, total_scanner);
  }

  @Post('accept/:token')
  async acceptInvite(
    @Param('token') token: string,
    @Body('userID') userID: string,
  ) {
    return this.service.acceptInvite(token, userID);
  }
}
