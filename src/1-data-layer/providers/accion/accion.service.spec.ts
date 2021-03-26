import { Test, TestingModule } from '@nestjs/testing';
import { DataAccionService } from './data-accion.service';

describe('DataAccionService', () => {
  let service: DataAccionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataAccionService],
    }).compile();

    service = module.get<DataAccionService>(DataAccionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
