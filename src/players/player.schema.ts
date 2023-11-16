import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PlayerType {
  @Field(() => ID)
  id: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field(() => Int)
  number: number;
}
