import { ItemTask } from './entities/itemTask.entity';
import { CurrencyService } from './currency.service';
import { Currency } from './entities/currency.entity';

export const commonProviders = [
  {
    provide: 'ITEM_TASK_REPOSITORY',
    useValue: ItemTask,
  },
  {
    provide: 'CURRENCY_SERVICE',
    useValue: CurrencyService,
  },
  {
    provide: 'CURRENCY_REPOSITORY',
    useValue: Currency,
  },
];
