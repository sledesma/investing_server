import { Global, Module } from '@nestjs/common';
import { AccionResolver } from './resolvers/accion.resolver';
import { HistorialResolver } from './resolvers/historial.resolver';
import { ReporteGeneralResolver } from './resolvers/reporte-general.resolver';

@Global()
@Module({
  providers: [AccionResolver, HistorialResolver, ReporteGeneralResolver],
})
export class GraphqlLayerModule {}
