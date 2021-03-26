import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { Historial, HistorialDocument } from './historial.schema';

@Schema({
  collection: 'correlaciones',
})
export class Correlacion {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Historial' })
  historial_id: HistorialDocument;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Historial' })
  previo_historial_id: HistorialDocument;
}

export type CorrelacionDocument = Correlacion & Document;
export const CorrelacionSchema = SchemaFactory.createForClass(Correlacion);
