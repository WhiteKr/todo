import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AddTodoDto } from './dto/addTodo.dto';
import { GetTodoDto } from './dto/getTodo.dto';
import { Todo } from './todo.interface';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('todo/:id')
  getTodo(@Param() body: GetTodoDto): Todo {
    return this.appService.getTodo(body);
  }

  @Post('addTodo')
  addTodo(@Body() body: AddTodoDto): Todo {
    return this.appService.setTodo(body);
  }
}
