import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty({ message: "Class (sinf/kurs nomi) bo'sh bo'lishi mumkin emas" })
  class: string;

  @IsInt()
  @IsOptional()
  studentId?: number;
}