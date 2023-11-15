import { Item } from './entities/item.entity';

export const itemProviders = [
  {
    provide: 'ITEM_REPOSITORY',
    useValue: Item,
  },
];
