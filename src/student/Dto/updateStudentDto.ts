import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class UpdateStudentDto {
  @ApiPropertyOptional({
    description: 'Talabaning ismi va familiyasi',
    example: 'Ali Valiyev',
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({
    description: 'Talabaning yoshi',
    example: 21,
    minimum: 1,
  })
  @IsInt()
  @Min(1, { message: "Yosh 1 dan kichik bo'lishi mumkin emas" })
  @IsOptional()
  age?: number;

  @ApiPropertyOptional({
    description: 'Talaba biriktiriladigan kursning ID raqami',
    example: 2,
  })
  @IsInt()
  @IsOptional()
  courseId?: number;
}
