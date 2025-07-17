import { Test, TestingModule } from '@nestjs/testing';
import { InviteScannerController } from './invite-scanner.controller';

describe('InviteScannerController', () => {
  let controller: InviteScannerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InviteScannerController],
    }).compile();

    controller = module.get<InviteScannerController>(InviteScannerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
