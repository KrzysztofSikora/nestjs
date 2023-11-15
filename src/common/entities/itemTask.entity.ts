import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Item } from '../../item/entities/item.entity';
import { Task } from '../../task/entities/task.entity';

@Table({ tableName: 'item_tasks' })
export class ItemTask extends Model {
  @ForeignKey(() => Task)
  @Column
  taskId: number;

  @ForeignKey(() => Item)
  @Column
  itemId: number;
}
