import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Accion, AccionSchema } from './schema/accion.schema';
import { Correlacion, CorrelacionSchema } from './schema/correlacion.schema';
import { Historial, HistorialSchema } from './schema/historial.schema';
import { Senal, SenalSchema } from './schema/senal.schema';
import { DataAccionService } from './providers/accion/data-accion.service';
import { DataCorrelacionService } from './providers/correlacion/data-correlacion.service';
import { DataHistorialService } from './providers/historial/data-historial.service';
import { DataSenalService } from './providers/senal/data-senal.service';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Accion.name, schema: AccionSchema },
      { name: Historial.name, schema: HistorialSchema },
      { name: Senal.name, schema: SenalSchema },
      { name: Correlacion.name, schema: CorrelacionSchema },
    ]),
  ],
  providers: [
    DataAccionService,
    DataHistorialService,
    DataSenalService,
    DataCorrelacionService,
  ],
  exports: [
    DataAccionService,
    DataHistorialService,
    DataSenalService,
    DataCorrelacionService,
  ],
})
export class DataLayerModule {}
