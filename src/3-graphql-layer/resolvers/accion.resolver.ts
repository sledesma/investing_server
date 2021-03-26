import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DataAccionService } from 'src/1-data-layer/providers/accion/data-accion.service';
import { Accion, AccionDocument } from 'src/1-data-layer/schema/accion.schema';
import { AccionObject } from '../objects/accion.object';

@Resolver((of) => AccionObject)
export class AccionResolver {
  constructor(private accionService: DataAccionService) {}

  @Query((returns) => [AccionObject])
  async allActions() {
    return this.accionService.findAll();
  }

  @Mutation((returns) => AccionObject)
  async createAction(
    @Args('simbolo') simbolo: string,
    @Args('mercado') mercado: string,
  ): Promise<AccionDocument> {
    const aux = new Accion();
    aux._active = true;
    aux.created = new Date(Date.now());
    aux.mercado = mercado;
    aux.simbolo = simbolo;

    return this.accionService.save(aux);
  }
}
