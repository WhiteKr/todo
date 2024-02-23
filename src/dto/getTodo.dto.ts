import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class GetTodoDto {
  @ApiProperty()
  @IsNumber()
  id: number;
}
