import { Sequelize } from 'sequelize-typescript';
import { Task } from '../task/entities/task.entity';
import { Item } from '../item/entities/item.entity';
import { ItemTask } from '../common/entities/itemTask.entity';
import { Currency } from '../common/entities/currency.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: '0.0.0.0',
        port: 3306,
        username: 'root',
        password: 'my-secret-pw',
        database: 'nest',
      });
      sequelize.addModels([Task, Item, ItemTask, Currency]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
