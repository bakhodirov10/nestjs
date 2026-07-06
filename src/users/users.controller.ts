import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './Dto/UpdateUser.dto';
import { CreateUserDto } from './Dto/CreateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  MoviesService: any;
  @Get()
  getMovies() {
    return this.usersService.getusers();
  }

  @Get(':id')
  getMovie(@Param('id') id: string) {
    return this.usersService.getUser(Number(id));
  }

  @Post()
  createMovie(@Body() body: CreateUserDto) {
    return this.usersService.createuser(body);
  }

  @Patch(':id')
  updateMovie(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.updateUser(Number(id), body);
  }

  @Delete(':id')
  deleteMovie(@Param('id') id: string) {
    return this.usersService.deleteUser(Number(id));
  }
}
