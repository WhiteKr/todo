import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { Todo } from '../todo.interface';
import { AddTodoDto } from './dto/addTodo.dto';
import { DeleteTodoDto } from './dto/deleteTodo.dto';
import { GetTodoDto } from './dto/getTodo.dto';
import { PutTodoBodyDto, PutTodoParamsDto } from './dto/putTodo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly appService: TodoService) {}

  @ApiOperation({
    tags: ['todo'],
    summary: 'Add a new TODO',
  })
  @Post()
  addTodo(@Body() addTodoDto: AddTodoDto): Todo {
    return this.appService.addTodo(addTodoDto);
  }

  @ApiOperation({
    tags: ['todo'],
    summary: 'Get a TODO',
  })
  @Get(':id')
  getTodo(@Param() getTodoDto: GetTodoDto): Todo {
    return this.appService.getTodo(getTodoDto);
  }

  @ApiOperation({
    tags: ['todo'],
    summary: 'Put a TODO',
  })
  @Put(':id')
  putTodo(
    @Param() putTodoParamsDto: PutTodoParamsDto,
    @Body() putTodoBodyDto: PutTodoBodyDto,
  ): Todo {
    return this.appService.putTodo(putTodoParamsDto, putTodoBodyDto);
  }

  @ApiOperation({
    tags: ['todo'],
    summary: 'Delete a TODO',
  })
  @Delete(':id')
  deleteTodo(@Param() deleteTodoDto: DeleteTodoDto): Todo {
    return this.appService.deleteTodo(deleteTodoDto);
  }
}
