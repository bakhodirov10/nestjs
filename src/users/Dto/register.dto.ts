import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, Min, MinLength } from 'class-validator';

export class RegisterUserDto {
  @IsString()
  @IsNotEmpty({ message: "Title bo'sh bo'lishi mumkin emas" })
  @ApiProperty({
    example: 'Abdulloh',
    description: 'name',
  })
  name: string;

  @IsEmail({}, { message: "Noto'g'ri email formati" })
  @IsNotEmpty({ message: "Email kiritish majburiy" })
  @ApiProperty({
    example: 'abdulloh@gmail.com',
    description: 'email',
  })
  email: string;

  @IsInt({ message: "Yosh (age) butun son bo'lishi kerak" })
  @Min(1, { message: "Yosh 1 dan kichik bo'lishi mumkin emas" })
  @IsNotEmpty({ message: "Yosh kiritish majburiy" })
  @ApiProperty({
    example: '18',
    description: 'age',
  })
  age: number;

  @IsString()
  @IsNotEmpty({ message: "Parol bo'sh bo'lishi mumkin emas" })
  @MinLength(6, { message: "Parol kamida 6 ta belgidan iborat bo'lishi kerak" })
  @ApiProperty({
    example: '12345678',
    description: 'password',
  })
  password: string;


  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'image',
    description: 'Product image or file',
  })
  image?: string
}