import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { Accion } from './accion.schema';

@Schema()
export class Senal {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Accion' })
  accion_id: Accion;

  @Prop()
  data: string;

  @Prop({ type: Date, default: Date.now() })
  fecha: Date;

  @Prop({ default: true })
  _active: boolean;

  @Prop({ type: Date, default: Date.now() })
  created: Date;
}

export type SenalDocument = Senal & Document;
export const SenalSchema = SchemaFactory.createForClass(Senal);
