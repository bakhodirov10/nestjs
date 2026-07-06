import {
  IsNotEmpty,
  IsPositive,
  IsString,
  Length,
  Min,
  IsNumber,
  Matches,
} from 'class-validator';

export class CreateProductDto {
  @IsString({ message: "Mahsulot nomi matn ko'rinishida bo'lsin!" })
  @IsNotEmpty({ message: "Mahsulit nomi bo'sh bo'lmasin!" })
  @Length(5, 30, { message: "5 tadan 30 tagacha belgi bo'lsin!" })
  @Matches(/^(?!\d+$).+/, {
    message: 'Title cannot consist of numbers only',
  })
  title!: string;

  @IsNumber({}, { message: 'Faqat son qabul qilinadi!' })
  @Min(1, { message: 'Minimum narx 1 dollar!' })
  @IsPositive({ message: "Narx manfiy son bo'la olmaydi!" })
  price!: number;
}