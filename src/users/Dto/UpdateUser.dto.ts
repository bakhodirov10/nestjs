import { IsOptional, IsString, Length, IsNumber, Min } from "class-validator";

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    @Length(3, 30)
    title?: string;

    @IsOptional()
    @IsString()
    @Length(3, 40)
    email?: string;

    @IsOptional()
    @IsNumber({})
    @Min(1)
    age?: number
}