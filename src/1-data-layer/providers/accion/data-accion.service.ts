import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Accion, AccionDocument } from '../../schema/accion.schema';

@Injectable()
export class DataAccionService {
  constructor(@InjectModel(Accion.name) private model: Model<AccionDocument>) {}

  async save(accion: Accion): Promise<AccionDocument> {
    const aux = new this.model(accion);
    return aux.save();
  }

  async saveMany(acciones: Accion[]) {
    const aux = new this.model();
    return await aux.collection.insertMany(acciones);
  }

  async findAll(
    query: FilterQuery<AccionDocument> = {},
  ): Promise<AccionDocument[]> {
    return this.model.find(query).exec();
  }

  async findById(id: string): Promise<AccionDocument> {
    return this.model.findById(id).exec();
  }

  async findBySimbolo(simbolo: string): Promise<AccionDocument> {
    return this.model.findOne({ simbolo: simbolo }).exec();
  }
}
