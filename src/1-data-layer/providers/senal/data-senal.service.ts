import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Accion } from '../../schema/accion.schema';
import { Senal, SenalDocument } from '../../schema/senal.schema';

@Injectable()
export class DataSenalService {
  constructor(@InjectModel(Senal.name) private model: Model<SenalDocument>) {}

  async save(senal: Senal): Promise<SenalDocument> {
    const aux = new this.model(senal);
    return aux.save();
  }

  async saveMany(senales: Senal[]) {
    const aux = new this.model();
    return await aux.collection.insertMany(senales);
  }

  async findAll(
    query: FilterQuery<SenalDocument> = {},
  ): Promise<SenalDocument[]> {
    return this.model.find(query).exec();
  }

  async findById(id: string): Promise<SenalDocument> {
    return this.model.findById(id).exec();
  }

  async findByAccion(accion: Accion): Promise<SenalDocument> {
    return this.model.findOne({ accion_id: accion }).exec();
  }
}
