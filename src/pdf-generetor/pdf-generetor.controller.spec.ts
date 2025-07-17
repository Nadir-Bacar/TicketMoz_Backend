import { Test, TestingModule } from '@nestjs/testing';
import { PdfGeneretorController } from './pdf-generetor.controller';

describe('PdfGeneretorController', () => {
  let controller: PdfGeneretorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PdfGeneretorController],
    }).compile();

    controller = module.get<PdfGeneretorController>(PdfGeneretorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
