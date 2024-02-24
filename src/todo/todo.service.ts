import { Injectable } from '@nestjs/common';
import { Todo } from 'src/todo.interface';
import { AddTodoDto } from './dto/addTodo.dto';
import { GetTodoDto } from './dto/getTodo.dto';
import { DeleteTodoDto } from './dto/deleteTodo.dto';
import { PutTodoBodyDto, PutTodoParamsDto } from './dto/putTodo.dto';

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
    return this.todoStorage.find((todo: Todo) => todo.id === getTodoDto.id);
  }

  putTodo(
    putTodoParamsDto: PutTodoParamsDto,
    putTodoBodyDto: PutTodoBodyDto,
  ): Todo {
    const index: number = this.todoStorage.findIndex(
      (todo: Todo) => todo.id === putTodoParamsDto.id,
    );
    const newTodo: Todo = {
      ...putTodoParamsDto,
      ...putTodoBodyDto,
    };

    this.todoStorage[index] = newTodo;

    return newTodo;
  }

  deleteTodo(deleteTodoDto: DeleteTodoDto): Todo {
    const index: number = this.todoStorage.findIndex(
      (todo: Todo) => todo.id === deleteTodoDto.id,
    );
    return this.todoStorage.splice(index, 1)[0];
  }
}
