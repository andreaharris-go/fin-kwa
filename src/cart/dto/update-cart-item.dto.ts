import { IsString, IsNumber, Min } from 'class-validator';

export class UpdateCartItemDto {
  @IsString()
  productId: string;

  @IsNumber()
  @Min(0)
  quantity: number;
}
