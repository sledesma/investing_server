import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { Accion } from './accion.schema';

@Schema({
  collection: 'historial',
})
export class Historial {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Accion' })
  accion_id: Accion;

  @Prop()
  fecha: Date;

  @Prop()
  apertura: number;

  @Prop()
  maximo: number;

  @Prop()
  minimo: number;

  @Prop()
  cierre: number;

  @Prop()
  volumen: number;

  @Prop({ default: true })
  _active: boolean;

  @Prop({ type: Date, default: Date.now() })
  created: Date;
}

export type HistorialDocument = Historial & Document;
export const HistorialSchema = SchemaFactory.createForClass(Historial);
