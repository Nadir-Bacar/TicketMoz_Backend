import { Module } from '@nestjs/common';
import { PdfGeneretorController } from './pdf-generetor.controller';
import { PdfGeneretorService } from './pdf-generetor.service';

@Module({
  controllers: [PdfGeneretorController],
  providers: [PdfGeneretorService]
})
export class PdfGeneretorModule {}
