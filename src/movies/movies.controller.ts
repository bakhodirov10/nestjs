import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  MoviesService: any;
  @Get()
  getMovies() {
    return this.moviesService.getMovies();
  }

  @Get(':id')
  getMovie(@Param('id') id: string) {
    return this.moviesService.getMovie(Number(id));
  }

  @Post()
  createMovie(@Body() body: any) {
    return this.moviesService.createMovie(body);
  }

  @Patch(':id')
  updateMovie(@Param('id') id: string, @Body() body: any) {
    return this.moviesService.updateMovie(Number(id), body);
  }

  @Delete(':id')
  deleteMovie(@Param('id') id: string) {
    return this.moviesService.deleteMovie(Number(id));
  }
}
