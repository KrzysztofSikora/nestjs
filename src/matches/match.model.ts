import {
  BelongsToMany,
  Column,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Team } from '../teams/team.model';
import { MatchTeam } from '../match-team/match-team.model';

@Table
export class Match extends Model<Match> {
  @Column({
    primaryKey: true,
  })
  id: number;

  @Column
  place: string;

  @Column
  date: Date;

  @BelongsToMany(() => Team, () => MatchTeam, 'teamId', 'matchId')
  teams: Team[];
  @HasMany(() => MatchTeam)
  matchTeam: MatchTeam[];
}
