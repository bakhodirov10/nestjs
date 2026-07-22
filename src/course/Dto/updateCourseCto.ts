import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateCourseDto {
  @IsString()
  @IsOptional()
  class?: string;

  @IsInt()
  @IsOptional()
  studentId?: number;
}