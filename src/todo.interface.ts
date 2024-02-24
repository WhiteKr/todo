import { ApiProperty } from '@nestjs/swagger';

export class Todo {
  @ApiProperty()
  id: number;

  @ApiProperty()
  content: string;

  @ApiProperty()
  author: string;
}
