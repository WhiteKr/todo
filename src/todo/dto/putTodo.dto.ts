import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PutTodoParamsDto {
  @ApiProperty()
  @IsNumber()
  id: number;
}

export class PutTodoBodyDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  author: string;
}
