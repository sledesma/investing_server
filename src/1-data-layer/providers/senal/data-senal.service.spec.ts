import { Test, TestingModule } from '@nestjs/testing';
import { DataSenalService } from './data-senal.service';

describe('DataSenalService', () => {
  let service: DataSenalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataSenalService],
    }).compile();

    service = module.get<DataSenalService>(DataSenalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
