import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HistorialObject {
  @Field()
  id: string;

  @Field({ nullable: true })
  accion_id: string;

  @Field({ nullable: true })
  fecha: Date;

  @Field((type) => Float, { nullable: true })
  apertura: number;

  @Field((type) => Float, { nullable: true })
  maximo: number;

  @Field((type) => Float, { nullable: true })
  minimo: number;

  @Field((type) => Float, { nullable: true })
  cierre: number;

  @Field((type) => Float, { nullable: true })
  volumen: number;

  @Field({ nullable: true })
  _active: boolean;

  @Field({ nullable: true })
  created: Date;
}
