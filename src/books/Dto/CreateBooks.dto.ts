import {
  IsNotEmpty,
  IsPositive,
  IsString,
  Length,
  Min,
  IsNumber,
  Matches,
  Max,
  isNotEmpty,
} from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 30)
  @Matches(/^(?!\d+$).+/)
  title!: string;

  @IsNumber({})
  @Min(1)
  @Max(10000)
  @IsPositive()
  pages!: number;
}