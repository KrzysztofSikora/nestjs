import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TeamType {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;
}
