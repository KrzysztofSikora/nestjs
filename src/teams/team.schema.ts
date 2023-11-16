import {Field, ID, ObjectType} from '@nestjs/graphql';

// import { TeamType } from './team.schema';

@ObjectType()
export class TeamType {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  // @Field(() => TeamType)
  // team: TeamType;
}
