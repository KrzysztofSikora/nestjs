import { Inject, Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemService {
  constructor(
    @Inject('ITEM_REPOSITORY')
    private itemsRepository: typeof Item,
  ) {}

  create(createItemDto: CreateItemDto) {
    return Item.create({
      ...createItemDto,
    })
      .then((res: Item) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }

  findAll() {
    return this.itemsRepository.findAll<Item>();
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
