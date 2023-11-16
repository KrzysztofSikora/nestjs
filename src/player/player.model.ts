import {Column, Model, Table,} from 'sequelize-typescript';

// import { Team } from './team.model';

@Table
export class Player extends Model<Player> {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  number: number;

  // @ForeignKey(() => Team)
  // @Column
  // teamId: number;
  //
  // @BelongsTo(() => Team)
  // team: Team;
}
