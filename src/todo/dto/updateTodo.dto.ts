import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateTodoParamsDto {
  @ApiProperty()
  @IsNumber()
  id: number;
}

export class UpdateTodoBodyDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  author: string;
}
