import { Inject, Injectable } from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { Item } from '../item/entities/item.entity';
import { CurrencyService } from '../common/currency.service';

@Injectable()
export class TaskService {
  constructor(
    @Inject('TASK_REPOSITORY')
    private tasksRepository: typeof Task,
    private currencyService: CurrencyService,
  ) {}

  create(createTaskDto: CreateTaskDto) {
    return Task.create({
      ...createTaskDto,
    })
      .then((res: Task) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }

  findAll() {
    return this.currencyService.getDailyCurrencies();

    // return this.tasksRepository.findAll<Task>();
  }

  findOne(id: number) {
    return this.tasksRepository.findByPk<Task>(id, {
      include: [{ model: Item, through: { attributes: [] } }],
    });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.tasksRepository.update(
      {
        ...updateTaskDto,
      },
      {
        where: { id: id },
      },
    );
  }

  remove(id: number) {
    return this.tasksRepository.destroy({
      where: { id: id },
    });
  }
}
