import {
  AutoIncrement,
  BelongsToMany,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Item } from '../../item/entities/item.entity';
import { ItemTask } from '../../common/entities/itemTask.entity';

@Table({ tableName: 'tasks' })
export class Task extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @BelongsToMany(() => Item, () => ItemTask)
  items: Array<Item & { ItemTask: ItemTask }>;
}
