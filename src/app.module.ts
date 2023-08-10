import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { ItemModule } from './item/item.module';

@Module({
  imports: [TaskModule, ItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
