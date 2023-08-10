import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { DatabaseModule } from '../providers/database.module';
import { itemProviders } from './item.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ItemController],
  providers: [ItemService, ...itemProviders],
})
export class ItemModule {}
