import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateCourseDto {
  @ApiPropertyOptional({
    description: 'Sinf yoki kurs nomi',
    example: '11-B sinf',
  })
  @IsString()
  @IsOptional()
  class?: string;

  @ApiPropertyOptional({
    description: 'Biriktiriladigan talabaning ID raqami',
    example: 2,
  })
  @IsInt()
  @IsOptional()
  studentId?: number;
}
