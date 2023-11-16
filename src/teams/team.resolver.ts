import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Team } from './team.model';
import { TeamService } from './team.service';
import { TeamType } from './team.schema';
import { Player } from '../player/player.model';

@Resolver((of) => TeamType)
export class TeamResolver {
  constructor(private readonly teamService: TeamService) {}

  /* 3 lista drużyn */
  @Query(() => TeamType)
  async teams(): Promise<Team[]> {
    return this.teamService.findAll();
  }

  @Query(() => TeamType)
  async team(@Args('id', { type: () => Int }) id: number): Promise<Team> {
    return this.teamService.findOne(id);
  }

  /* 4 lista graczy dla konkretnej drużyny */
  @Query(() => TeamType)
  async playersOfTeam(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Player[]> {
    return this.teamService.findPlayersOfTeam(id);
  }
}
