import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Correlacion,
  CorrelacionDocument,
} from '../../schema/correlacion.schema';
import { Historial } from '../../schema/historial.schema';

@Injectable()
export class DataCorrelacionService {
  constructor(
    @InjectModel(Correlacion.name) private model: Model<CorrelacionDocument>,
  ) {}

  async save(correlacion: Correlacion): Promise<Correlacion> {
    const aux = new this.model(correlacion);
    return aux.save();
  }

  async getCorrelacion(historial: Historial): Promise<Correlacion> {
    return this.model.findOne({ historial_id: historial }).exec();
  }
}
