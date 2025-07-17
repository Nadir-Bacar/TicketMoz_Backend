import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { PdfGeneretorService } from './pdf-generetor.service';

@Controller('pdf-generetor')
export class PdfGeneretorController {
  constructor(private readonly pdfService: PdfGeneretorService) {}

  @Get('hello-world')
  async generateHelloWorldPdf(@Res() res: Response) {
    await this.pdfService.generateHelloWorldPdf(res);
  }
}
