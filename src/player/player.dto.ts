import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreatePlayerInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field(() => Int)
  number: number;

  // @Field(() => Int)
  // readonly teamId: number;
}

@InputType()
export class UpdatePlayerInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(() => Int, { nullable: true })
  number?: number;
}
