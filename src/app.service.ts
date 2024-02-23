import { Injectable } from '@nestjs/common';
import { AddTodoDto } from './dto/addTodo.dto';
import { GetTodoDto } from './dto/getTodo.dto';
import { Todo } from './todo.interface';

@Injectable()
export class AppService {
  todoStorage: Todo[];

  constructor() {
    this.todoStorage = [];
  }

  getTodo(getTodoDto: GetTodoDto): Todo {
    return this.todoStorage.find((todo: Todo) => todo.id === getTodoDto.id);
  }

  setTodo(addTodoDto: AddTodoDto): Todo {
    const id: number = this.todoStorage.length;
    const newTodo: Todo = { ...addTodoDto, id };

    this.todoStorage.push(newTodo);
    return newTodo;
  }
}
