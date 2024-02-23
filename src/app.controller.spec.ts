import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from './todo/todo.controller';
import { TodoService } from './todo/todo.service';

describe('AppController', () => {
  let appController: TodoController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [TodoService],
    }).compile();

    appController = app.get<TodoController>(TodoController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.addTodo()).toBe('Hello World!');
    });
  });
});
