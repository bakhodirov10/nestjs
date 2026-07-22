import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class CreateStudentDto {
  @ApiProperty({
    description: 'Talabaning ismi va familiyasi',
    example: 'Ali Valiyev',
  })
  @IsString()
  @IsNotEmpty({ message: "Talaba ismi bo'sh bo'lishi mumkin emas" })
  name: string;

  @ApiProperty({
    description: 'Talabaning yoshi',
    example: 20,
    minimum: 1,
  })
  @IsInt()
  @Min(1, { message: "Yosh 1 dan kichik bo'lishi mumkin emas" })
  age: number;

  @ApiPropertyOptional({
    description: 'Talaba biriktiriladigan kursning ID raqami',
    example: 1,
  })
  @IsInt()
  @IsOptional()
  courseId?: number;
}