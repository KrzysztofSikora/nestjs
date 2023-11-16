import { Field, ID, ObjectType } from '@nestjs/graphql';
import { TeamType } from '../teams/team.schema';

@ObjectType()
export class MatchType {
  @Field(() => ID)
  id: number;

  @Field()
  place: string;

  @Field()
  date: string;

  @Field(() => [TeamType])
  teams: TeamType[];
}
