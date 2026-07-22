import {
  IsOptional,
  IsString,
  Length,
  IsNumber,
  Min,
  Max,
} from 'class-validator';

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  @Length(3, 30)
  title?: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(10000)
  pages?: number;
}
