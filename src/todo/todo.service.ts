import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Todo } from 'src/todo.interface';
import { AddTodoDto } from './dto/addTodo.dto';
import { DeleteTodoDto } from './dto/deleteTodo.dto';
import { GetTodoDto } from './dto/getTodo.dto';
import { UpdateTodoBodyDto, UpdateTodoParamsDto } from './dto/updateTodo.dto';

@Injectable()
export class TodoService {
  todoStorage: Todo[];

  constructor() {
    this.todoStorage = [];
  }

  addTodo(addTodoDto: AddTodoDto): Todo {
    const id: number = this.todoStorage.length;
    const newTodo: Todo = { ...addTodoDto, id };

    this.todoStorage.push(newTodo);

    return newTodo;
  }

  getTodo(getTodoDto: GetTodoDto): Todo {
    const todo: Todo = this.todoStorage.find(
      (todo: Todo) => todo.id === getTodoDto.id,
    );

    if (!todo) {
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
    }

    return todo;
  }

  updateTodo(
    updateTodoParamsDto: UpdateTodoParamsDto,
    updateTodoBodyDto: UpdateTodoBodyDto,
  ): Todo {
    const index: number = this.todoStorage.findIndex(
      (todo: Todo) => todo.id === updateTodoParamsDto.id,
    );
    if (index === -1) {
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
    }

    const newTodo: Todo = {
      ...updateTodoParamsDto,
      ...updateTodoBodyDto,
    };
    this.todoStorage[index] = newTodo;

    return newTodo;
  }

  deleteTodo(deleteTodoDto: DeleteTodoDto): Todo {
    const index: number = this.todoStorage.findIndex(
      (todo: Todo) => todo.id === deleteTodoDto.id,
    );
    if (index === -1) {
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
    }

    return this.todoStorage.splice(index, 1)[0];
  }
}
