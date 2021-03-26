import { Test, TestingModule } from '@nestjs/testing';
import { DataHistorialService } from './data-historial.service';

describe('HistorialService', () => {
  let service: DataHistorialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataHistorialService],
    }).compile();

    service = module.get<DataHistorialService>(DataHistorialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
