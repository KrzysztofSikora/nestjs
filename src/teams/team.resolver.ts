import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Team } from './team.model';
import { TeamService } from './team.service';
import { TeamType } from './team.schema';

@Resolver((of) => TeamType)
export class TeamResolver {
  constructor(private readonly teamService: TeamService) {}

  @Query(() => TeamType)
  async teams(): Promise<Team[]> {
    return this.teamService.findAll();
  }

  @Query(() => TeamType)
  async team(@Args('id', { type: () => Int }) id: number): Promise<Team> {
    return this.teamService.findOne(id);
  }
}
