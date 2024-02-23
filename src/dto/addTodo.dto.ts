import { IsNotEmpty, IsString } from 'class-validator';

export class AddTodoDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  author: string;
}
