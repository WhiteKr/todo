import { Injectable } from '@nestjs/common';
import { Todo } from 'src/todo.interface';
import { AddTodoDto } from './dto/addTodo.dto';
import { GetTodoDto } from './dto/getTodo.dto';

@Injectable()
export class TodoService {
  todoStorage: Todo[];

  constructor() {
    this.todoStorage = [];
  }

  getTodo(getTodoDto: GetTodoDto): Todo {
    return this.todoStorage.find((todo: Todo) => todo.id === getTodoDto.id);
  }

  addTodo(addTodoDto: AddTodoDto): Todo {
    const id: number = this.todoStorage.length;
    const newTodo: Todo = { ...addTodoDto, id };

    this.todoStorage.push(newTodo);
    return newTodo;
  }
}
