import { Test, TestingModule } from '@nestjs/testing';
import { PdfGeneretorService } from './pdf-generetor.service';

describe('PdfGeneretorService', () => {
  let service: PdfGeneretorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PdfGeneretorService],
    }).compile();

    service = module.get<PdfGeneretorService>(PdfGeneretorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
