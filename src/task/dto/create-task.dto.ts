import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  name: string;
  // @ApiProperty({
  //   type: Number,
  // })
  // @ApiProperty({ type: [], description: 'items belong to task' })
  // @IsOptional()
  // items?: number[];
}
