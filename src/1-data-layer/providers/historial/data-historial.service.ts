import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Accion } from '../../schema/accion.schema';
import { Correlacion } from '../../schema/correlacion.schema';
import { Historial, HistorialDocument } from '../../schema/historial.schema';
import { DataCorrelacionService } from '../correlacion/data-correlacion.service';

@Injectable()
export class DataHistorialService {
  constructor(
    @InjectModel(Historial.name) private model: Model<HistorialDocument>,
    private correlacionService: DataCorrelacionService,
  ) {}

  async save(historial: Historial): Promise<HistorialDocument> {
    const aux = new this.model(historial);
    return aux.save();
  }

  async saveMany(historiales: Historial[]) {
    const aux = new this.model();
    return await aux.collection.insertMany(historiales);
  }

  async findAll(
    query: FilterQuery<HistorialDocument> = {},
  ): Promise<HistorialDocument[]> {
    return this.model.find(query).exec();
  }

  async findById(id: string): Promise<HistorialDocument> {
    return this.model.findById(id).exec();
  }

  async findByAccion(accion: Accion): Promise<HistorialDocument[]> {
    return this.model.find({ accion_id: accion }).exec();
  }

  async getPrevious(historial: Historial): Promise<Historial> {
    const correlacion: Correlacion = await this.correlacionService.getCorrelacion(
      historial,
    );
    return this.model.findOne({ _id: correlacion.previo_historial_id }).exec();
  }
}
