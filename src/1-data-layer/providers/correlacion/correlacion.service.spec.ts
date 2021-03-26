import { Test, TestingModule } from '@nestjs/testing';
import { DataCorrelacionService } from './data-correlacion.service';

describe('DataCorrelacionService', () => {
  let service: DataCorrelacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataCorrelacionService],
    }).compile();

    service = module.get<DataCorrelacionService>(DataCorrelacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
