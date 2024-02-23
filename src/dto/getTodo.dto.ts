import { IsNumber } from 'class-validator';

export class GetTodoDto {
  @IsNumber()
  id: number;
}
