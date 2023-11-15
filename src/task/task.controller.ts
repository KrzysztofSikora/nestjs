import {
  Body,
  Controller,
  Delete,
  Get,
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
  getBigResult(@Res() res: Response) {}

  @Get('no-blocking')
  getNoBlocking() {
    return 'no blocking ';
  }

  @Get('advertisement')
  getAdvertisement() {
    return [
      {
        id: '1',
        title: 'Front-end Developer',
        salary: 70000,
        description: 'Poszukujemy doświadczonego front-end developera...',
        category: 'IT',
        url: 'https://example.com/job/1',
      },
      {
        id: '2',
        title: 'Back-end Developer',
        salary: 75000,
        description:
          'Zapraszamy do aplikowania na stanowisko back-end developera...',
        category: 'IT',
        url: 'https://example.com/job/2',
      },
      {
        id: '3',
        title: 'Graphic Designer',
        salary: 60000,
        description:
          'Nasza firma potrzebuje grafika o wysokich umiejętnościach...',
        category: 'Design',
        url: 'https://example.com/job/3',
      },
      {
        id: '4',
        title: 'Marketing Manager',
        salary: 80000,
        description: 'Poszukujemy menadżera marketingu do naszego zespołu...',
        category: 'Marketing',
        url: 'https://example.com/job/4',
      },
      {
        id: '5',
        title: 'Data Analyst',
        salary: 65000,
        description: 'Dołącz do naszego zespołu jako analityk danych...',
        category: 'Data',
        url: 'https://example.com/job/5',
      },
      {
        id: '6',
        title: 'Sales Representative',
        salary: 70000,
        description: 'Szukamy reprezentanta handlowego do działu sprzedaży...',
        category: 'Sales',
        url: 'https://example.com/job/6',
      },
      {
        id: '7',
        title: 'UX/UI Designer',
        salary: 75000,
        description: 'Poszukujemy projektanta UX/UI do projektów mobilnych...',
        category: 'Design',
        url: 'https://example.com/job/7',
      },
      {
        id: '8',
        title: 'Content Writer',
        salary: 60000,
        description: 'Dołącz do naszego zespołu jako autor treści...',
        category: 'Writing',
        url: 'https://example.com/job/8',
      },
      {
        id: '9',
        title: 'HR Manager',
        salary: 80000,
        description: 'Szukamy menadżera zasobów ludzkich do naszej firmy...',
        category: 'HR',
        url: 'https://example.com/job/9',
      },
      {
        id: '10',
        title: 'Software Engineer',
        salary: 75000,
        description:
          'Dołącz do naszego zespołu jako inżynier oprogramowania...',
        category: 'IT',
        url: 'https://example.com/job/10',
      },
    ];
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
