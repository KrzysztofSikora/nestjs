import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Team extends Model<Team> {
  @Column({
    primaryKey: true,
  })
  id: number;
  @Column
  name: string;
}
