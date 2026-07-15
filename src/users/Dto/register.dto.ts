import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, Min, MinLength } from 'class-validator';

export class RegisterUserDto {
  @IsString()
  @IsNotEmpty({ message: "Title bo'sh bo'lishi mumkin emas" })
  name: string;

  @IsEmail({}, { message: "Noto'g'ri email formati" })
  @IsNotEmpty({ message: "Email kiritish majburiy" })
  email: string;

  @IsInt({ message: "Yosh (age) butun son bo'lishi kerak" })
  @Min(1, { message: "Yosh 1 dan kichik bo'lishi mumkin emas" })
  @IsNotEmpty({ message: "Yosh kiritish majburiy" })
  age: number;

  @IsString()
  @IsNotEmpty({ message: "Parol bo'sh bo'lishi mumkin emas" })
  @MinLength(6, { message: "Parol kamida 6 ta belgidan iborat bo'lishi kerak" })
  password: string;


  @IsString()
  @IsOptional()
  image?: string
}