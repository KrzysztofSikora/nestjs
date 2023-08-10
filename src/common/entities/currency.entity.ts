import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';

@Table({ tableName: 'currency' })
export class Currency extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  currency: string;

  @Unique
  @Column
  code: string;

  @Column
  bid: number;

  @Column
  ask: number;
}
