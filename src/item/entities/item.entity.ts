import {
  AutoIncrement,
  BelongsToMany,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Task } from '../../task/entities/task.entity';
import { ItemTask } from '../../common/entities/itemTask.entity';

@Table({ tableName: 'items' })
export class Item extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;
  @Column
  currency: string;
  @Column
  value: number;

  @BelongsToMany(() => Task, () => ItemTask)
  tasks: Array<Task & { ItemTask: ItemTask }>;
}
