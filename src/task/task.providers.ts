import { Task } from './entities/task.entity';
import { commonProviders } from '../common/common.providers';

export const taskProviders = [
  {
    provide: 'TASK_REPOSITORY',
    useValue: Task,
  },
  ...commonProviders,
];
