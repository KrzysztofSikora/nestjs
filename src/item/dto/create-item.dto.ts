import { ApiProperty } from '@nestjs/swagger';

export class CreateItemDto {
  @ApiProperty({
    type: String,
  })
  name: string;
  @ApiProperty({
    type: String,
  })
  currency: number;
  @ApiProperty({
    type: Number,
  })
  value: number;
}
