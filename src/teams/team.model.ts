import {
  BelongsToMany,
  Column,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Match } from '../matches/match.model';
import { MatchTeam } from '../match-team/match-team.model';

@Table
export class Team extends Model<Team> {
  @Column({
    primaryKey: true,
  })
  id: number;
  @Column
  name: string;
  @BelongsToMany(() => Match, () => MatchTeam, 'matchId', 'teamId')
  matches: Match[];
  @HasMany(() => MatchTeam)
  matchTeam: MatchTeam[];
}
