import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class UpdateStudentDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsInt()
  @Min(1, { message: "Yosh 1 dan kichik bo'lishi mumkin emas" })
  @IsOptional()
  age?: number;

  @IsInt()
  @IsOptional()
  courseId?: number;
}