import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty({ message: "Talaba ismi bo'sh bo'lishi mumkin emas" })
  name: string;

  @IsInt()
  @Min(1, { message: "Yosh 1 dan kichik bo'lishi mumkin emas" })
  age: number;

  @IsInt()
  @IsOptional()
  courseId?: number;
}