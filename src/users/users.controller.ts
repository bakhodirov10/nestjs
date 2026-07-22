import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseInterceptors,
  UploadedFile,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { LoginDto } from './Dto/Login.dto';
import { RegisterUserDto } from './Dto/register.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { QueryDto } from './Dto/query.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(@Query() query: QueryDto) {
    return this.usersService.getusers(query);
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.usersService.getUser(Number(id));
  }

  @Post('register')
  @ApiOperation({
    summary: 'Register new User',
  })
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueName = Date.now() + extname(file.originalname);
          cb(null, uniqueName);
        },
      }),
    }),
  )
  register(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: RegisterUserDto,
  ) {
    return this.usersService.register(body);
  }

  @Post('login')
  login(@Body() body: LoginDto) {
    return this.usersService.login(body);
  }
}
