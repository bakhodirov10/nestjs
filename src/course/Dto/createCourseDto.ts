import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCourseDto {
  @ApiProperty({
    description: 'Sinf yoki kurs nomi',
    example: '10-A sinf',
  })
  @IsString()
  @IsNotEmpty({ message: "Class (sinf/kurs nomi) bo'sh bo'lishi mumkin emas" })
  class: string;

  @ApiPropertyOptional({
    description: 'Biriktiriladigan talabaning ID raqami',
    example: 1,
  })
  @IsInt()
  @IsOptional()
  studentId?: number;
}