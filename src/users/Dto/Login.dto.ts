import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    example: 'abdulloh@gmail.com',
    description: 'email',
  })
  email!: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 100)
  @ApiProperty({
    example: '12345678',
    description: 'Password',
  })
  password!: string;
}
