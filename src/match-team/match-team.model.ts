import { BelongsTo, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Match } from '../matches/match.model';
import { Team } from '../teams/team.model';

@Table
export class MatchTeam extends Model<MatchTeam> {
  @ForeignKey(() => Match)
  matchId: number;

  @ForeignKey(() => Team)
  teamId: number;

  @BelongsTo(() => Match)
  match: Match;

  @BelongsTo(() => Team)
  team: Team;
}
