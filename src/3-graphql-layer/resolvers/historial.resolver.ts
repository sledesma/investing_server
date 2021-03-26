import { Query, Resolver } from '@nestjs/graphql';
import { DataHistorialService } from 'src/1-data-layer/providers/historial/data-historial.service';
import { HistorialObject } from '../objects/historial.object';

@Resolver((of) => HistorialObject)
export class HistorialResolver {
  constructor(private historialService: DataHistorialService) {}

  @Query((returns) => [HistorialObject])
  async getAll() {
    return await this.historialService.findAll();
  }
}
