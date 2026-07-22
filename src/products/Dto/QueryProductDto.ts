import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumberString, IsOptional, IsString } from 'class-validator';

export class GetProductDto {
  @ApiPropertyOptional({
    example: 'macbook',
    description: "Mahsulot nomi bo'yicha qidiruv",
  })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional({
    example: '500',
    description: 'Eng arzon narx chegarasi',
  })
  @IsOptional()
  @IsNumberString()
  minPrice?: string;

  @ApiPropertyOptional({
    example: '2000',
    description: 'Eng qimmat narx chegarasi',
  })
  @IsOptional()
  @IsNumberString()
  maxPrice?: string;

  @ApiPropertyOptional({
    example: 'asc',
    enum: ['asc', 'desc'],
    description: "Narx bo'yicha saralash tartibi",
  })
  @IsOptional()
  @IsString()
  sort?: string;

  @ApiPropertyOptional({
    example: '1',
    description: 'Sahifa raqami',
  })
  @IsOptional()
  @IsNumberString()
  page?: string;

  @ApiPropertyOptional({
    example: '10',
    description: 'Bitta sahifadagi mahsulotlar soni',
  })
  @IsOptional()
  @IsNumberString()
  limit?: string;
}
