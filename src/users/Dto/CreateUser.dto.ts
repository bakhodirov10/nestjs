import {
  IsNotEmpty,
  IsPositive,
  IsString,
  Length,
  IsNumber,
  Matches,
  IsEmail,
  Min,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(5, 30)
  @Matches(/^(?!\d+$).+/)
  title!: string;

  @IsString()
  @Length(5, 50)
  @IsNotEmpty()
  @IsEmail()
  @Matches(/^(?!\d+$).+/)
  email!: string;

  @IsNumber()
  @Min(1)
  @IsPositive()
  age!: number;
}