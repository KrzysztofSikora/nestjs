import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { MatchService } from './match.service';
import { Match } from './match.model';
import { MatchType } from './match.schema';
import { MatchTeam } from '../match-team/match-team.model';

@Resolver('Match')
export class MatchResolver {
  constructor(private readonly matchService: MatchService) {}

  /* 1 lista meczów */
  @Query(() => [MatchType])
  async matches(): Promise<MatchTeam[]> {
    return this.matchService.findAll();
  }

  /* 6 druzyny dla konkretnego meczu wraz z graczami */
  @Query(() => [MatchType])
  async teamsWithPlayers(
    @Args('matchId', { type: () => Int }) matchId: number,
  ) {
    return this.matchService.getTeamsWithPlayers(matchId);
  }

  /* 7 lista meczów wraz z drużyną w której gra */
  @Query(() => [MatchType])
  async matchListWithTeams(@Args('id', { type: () => Int }) id: number) {
    return this.matchService.getMatchesForPlayer(id);
  }
}
