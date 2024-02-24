import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Todo } from '../todo.interface';
import { AddTodoDto } from './dto/addTodo.dto';
import { DeleteTodoDto } from './dto/deleteTodo.dto';
import { GetTodoDto } from './dto/getTodo.dto';
import { UpdateTodoBodyDto, UpdateTodoParamsDto } from './dto/updateTodo.dto';
import { TodoService } from './todo.service';

@ApiTags('todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly appService: TodoService) {}

  @ApiOperation({ summary: 'Add a new TODO' })
  @ApiCreatedResponse({ type: Todo })
  @Post()
  addTodo(@Body() addTodoDto: AddTodoDto): Todo {
    return this.appService.addTodo(addTodoDto);
  }

  @ApiOperation({ summary: 'Get a TODO' })
  @ApiCreatedResponse({ type: Todo })
  @Get(':id')
  getTodo(@Param() getTodoDto: GetTodoDto): Todo {
    return this.appService.getTodo(getTodoDto);
  }

  @ApiOperation({ summary: 'Update a TODO' })
  @ApiCreatedResponse({ type: Todo })
  @Put(':id')
  updateTodo(
    @Param() updateTodoParamsDto: UpdateTodoParamsDto,
    @Body() updateTodoBodyDto: UpdateTodoBodyDto,
  ): Todo {
    return this.appService.putTodo(updateTodoParamsDto, updateTodoBodyDto);
  }

  @ApiOperation({ summary: 'Delete a TODO' })
  @ApiCreatedResponse({ type: Todo })
  @Delete(':id')
  deleteTodo(@Param() deleteTodoDto: DeleteTodoDto): Todo {
    return this.appService.deleteTodo(deleteTodoDto);
  }
}
