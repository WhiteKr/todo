import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Todo } from '../todo.interface';
import { AddTodoDto } from './dto/addTodo.dto';
import { GetTodoDto } from './dto/getTodo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly appService: TodoService) {}

  @Get(':id')
  getTodo(@Param() getTodoDto: GetTodoDto): Todo {
    return this.appService.getTodo(getTodoDto);
  }

  @Post()
  addTodo(@Body() addTodoDto: AddTodoDto): Todo {
    return this.appService.addTodo(addTodoDto);
  }
}
