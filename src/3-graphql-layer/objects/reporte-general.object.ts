import { Field, ObjectType } from '@nestjs/graphql';
import { ReporteGeneral } from 'src/common/interfaces/reporte-general.interface';

@ObjectType()
export class ReporteGeneralObject implements ReporteGeneral {
  @Field()
  auxiliarCompra: number;

  @Field()
  congruenciaCompra: boolean;

  @Field()
  auxiliarVenta: number;

  @Field()
  congruenciaVenta: boolean;

  @Field()
  mediaMovil: number;

  @Field()
  senialCompraVenta: string;

  @Field()
  indicioCambio: string;
}
