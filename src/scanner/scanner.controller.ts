import { Controller, Get, Param } from '@nestjs/common';
import { ScannerService } from './scanner.service';

@Controller('scanner')
export class ScannerController {
  constructor(private readonly scannerService: ScannerService) {}

  @Get('scan/:qrcode')
  scanTicket(@Param('qrcode') qrcode: string) {
    return this.scannerService.scanTicket(qrcode);
  }

  @Get('verify/:qrCode')
  verifyTicket(@Param('qrCode') qrCode: string) {
    return this.scannerService.verifyTicket(qrCode);
  }

  @Get('validated-tickets/:eventID')
  getValidadtedTickets(@Param('eventID') eventID: string) {
    return this.scannerService.getValidatedTIcket(eventID);
  }
}
