import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  collection: 'accion',
})
export class Accion {
  @Prop()
  simbolo: string;

  @Prop()
  mercado: string;

  @Prop({ default: true })
  _active: boolean;

  @Prop({ type: Date, default: Date.now() })
  created: Date;
}

export type AccionDocument = Accion & Document;
export const AccionSchema = SchemaFactory.createForClass(Accion);
