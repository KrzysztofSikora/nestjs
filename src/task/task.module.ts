import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { DatabaseModule } from '../providers/database.module';
import { taskProviders } from './task.providers';
import { CommonModule } from '../common/common.module';
import { CommonService } from '../common/common.service';
import { CurrencyService } from '../common/currency.service';

@Module({
  imports: [DatabaseModule, CommonModule],
  controllers: [TaskController],
  providers: [TaskService, CommonService, CurrencyService, ...taskProviders],
})
export class TaskModule {}
