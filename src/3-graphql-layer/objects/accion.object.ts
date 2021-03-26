import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AccionObject {
  @Field()
  simbolo: string;

  @Field()
  mercado: string;

  @Field()
  _active: boolean;

  @Field((type) => Date)
  created: Date;
}
