import { Inject, Injectable } from '@nestjs/common';
import { ItemTask } from './entities/itemTask.entity';

@Injectable()
export class CommonService {
  constructor(
    @Inject('ITEM_TASK_REPOSITORY')
    private itemTaskRepository: typeof ItemTask,
  ) {}

  addItemToTask(itemId, taskId) {
    console.log(itemId, taskId);

    return this.itemTaskRepository.create({
      itemId,
      taskId,
    });
  }
}
