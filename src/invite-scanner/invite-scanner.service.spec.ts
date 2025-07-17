import { Test, TestingModule } from '@nestjs/testing';
import { InviteScannerService } from './invite-scanner.service';

describe('InviteScannerService', () => {
  let service: InviteScannerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InviteScannerService],
    }).compile();

    service = module.get<InviteScannerService>(InviteScannerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
