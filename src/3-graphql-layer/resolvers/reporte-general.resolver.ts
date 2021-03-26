import { Args, Query, Resolver } from '@nestjs/graphql';
import { ConfigService } from '@nestjs/config';
import { ReporteGeneralObject } from '../objects/reporte-general.object';
import { DataHistorialService } from 'src/1-data-layer/providers/historial/data-historial.service';
import { Historial } from 'src/1-data-layer/schema/historial.schema';
import { calcSenialCompraVenta } from 'src/2-process-layer/functions/senial-cv.function';
import { ReporteGeneral } from 'src/common/interfaces/reporte-general.interface';

@Resolver((of) => ReporteGeneralObject)
export class ReporteGeneralResolver {
  constructor(
    private configService: ConfigService,
    private historialService: DataHistorialService,
  ) {}

  @Query((returns) => ReporteGeneralObject)
  async buildReport(
    @Args('historial_id') idHistorial: string,
    @Args('senial_cv_previa') senialCvPrevia: string,
    @Args('senial_cv_previa_previa') senialCvPreviaPrevia: string,
  ): Promise<ReporteGeneral> {
    const historial: Historial = await this.historialService.findById(
      idHistorial,
    );

    if (!historial._active) return null;

    const options = {
      porcSenialVenta: this.configService.get<number>('PORC_CONGRUENCIA_VENTA'),
      porcSenialCompra: this.configService.get<number>(
        'PORC_CONGRUENCIA_COMPRA',
      ),
    };

    const auxiliarVenta =
      historial.apertura + historial.apertura * options.porcSenialVenta;

    const congruenciaVenta = historial.maximo > auxiliarVenta ? true : false;

    const auxiliarCompra =
      historial.apertura - historial.apertura * options.porcSenialCompra;

    const congruenciaCompra = auxiliarCompra > historial.minimo ? true : false;

    const histPrev_1: Historial = await this.historialService.getPrevious(
      historial,
    );
    const histPrev_2: Historial =
      histPrev_1 != null
        ? await this.historialService.getPrevious(histPrev_1)
        : null;
    const histPrev_3: Historial =
      histPrev_2 != null
        ? await this.historialService.getPrevious(histPrev_2)
        : null;

    const mediaMovil =
      histPrev_1 && histPrev_2 && histPrev_3
        ? (histPrev_1.cierre + histPrev_2.cierre + histPrev_3.cierre) / 3
        : 0;

    const senialCompraVenta: string = calcSenialCompraVenta(
      senialCvPrevia,
      senialCvPreviaPrevia,
      historial.cierre,
      mediaMovil,
      congruenciaCompra,
    );

    const indicioCambio: string =
      senialCompraVenta == senialCvPrevia ? 'S/C' : 'CAMBIO';

    return {
      auxiliarCompra,
      congruenciaCompra,
      auxiliarVenta,
      congruenciaVenta,
      mediaMovil,
      senialCompraVenta,
      indicioCambio,
    };
  }
}
