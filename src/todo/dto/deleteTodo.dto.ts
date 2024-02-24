import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class DeleteTodoDto {
  @ApiProperty()
  @IsNumber()
  id: number;
}
