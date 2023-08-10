import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { Response, response } from 'express';
import { CommonService } from '../common/common.service';
import { Worker } from 'worker_threads';

@Controller('task')
export class TaskController {
  constructor(
    private readonly taskService: TaskService,
    private readonly commonService: CommonService,
  ) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Post('/add-item/:itemId/:taskId')
  addItem(
    @Param('itemId') itemId: string,
    @Param('taskId') taskId: string,
    @Body() createTaskDto: CreateTaskDto,
  ) {
    return this.commonService.addItemToTask(itemId, taskId);
  }

  log() {
    console.log('callback');
  }

  timer() {
    setTimeout(this.log);
  }

  asyncFunction() {
    const promise1 = Promise.resolve('Promise');

    promise1.then((value) => {
      console.log(value);
      // Expected output: 123
    });
  }

  first() {
    console.log('first');
  }

  second() {
    console.log('second');
  }

  @Get()
  async findAll() {
    this.first(); // 1
    this.timer(); // 4
    this.asyncFunction(); // 3
    this.second(); // 2

    return this.taskService.findAll();
  }

  @Get('get-big-result')
  getBigResult(@Res() res: Response) {
    const worker = new Worker('./src/task/worker.ts');
    worker.on('message', (data) => {
      res.status(HttpStatus.OK).send(`worker result: ${data}`);
    });
    worker.on('exit', (exit) => {
      console.log('exit', exit);
    });
  }

  @Get('no-blocking')
  getNoBlocking() {
    return 'no blocking ';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('test');
    return this.taskService.findOne(+id).then((task: Task) => {
      if (task) return task;
      if (task == null) return response.status(404);
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }
}
