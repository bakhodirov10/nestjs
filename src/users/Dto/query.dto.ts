import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumberString, IsOptional, IsString } from 'class-validator';

export class QueryDto {
  @ApiPropertyOptional({
    example: 'Ali',
    description: "Qidiruv so'zi",
  })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional({
    example: '18',
    description: 'Eng kichik yosh chegarasi',
  })
  @IsOptional()
  @IsNumberString()
  minAge?: string;

  @ApiPropertyOptional({
    example: '60',
    description: 'Eng katta yosh chegarasi',
  })
  @IsOptional()
  @IsNumberString()
  maxAge?: string;

  @ApiPropertyOptional({
    example: 'asc',
    enum: ['asc', 'desc'],
    description: 'Saralash tartibi',
  })
  @IsOptional()
  @IsString()
  sort?: string;

  @ApiPropertyOptional({
    example: '1',
  })
  @IsOptional()
  @IsNumberString()
  page?: string;

  @ApiPropertyOptional({
    example: '10',
  })
  @IsOptional()
  @IsNumberString()
  limit?: string;
}