import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsPositive,
  IsString,
  Length,
  Min,
  IsNumber,
  Matches,
  IsOptional,
} from 'class-validator';

export class CreateProductDto {
  @IsString({ message: "Mahsulot nomi matn ko'rinishida bo'lsin!" })
  @IsNotEmpty({ message: "Mahsulit nomi bo'sh bo'lmasin!" })
  @Length(5, 30, { message: "5 tadan 30 tagacha belgi bo'lsin!" })
  @Matches(/^(?!\d+$).+/, {
    message: 'Title cannot consist of numbers only',
  })
  @ApiProperty({
    example: 'MacBook Pro',
    description: 'Product title',
  })
  title!: string;

  @IsNumber({}, { message: 'Faqat son qabul qilinadi!' })
  @Type(() => Number)
  @Min(1, { message: 'Minimum narx 1 dollar!' })
  @IsPositive({ message: "Narx manfiy son bo'la olmaydi!" })
  @ApiProperty({
    example: '500',
    description: 'Product price',
  })
  price!: number;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'image',
    description: 'Product image or file',
  })
  image?: string;
}
