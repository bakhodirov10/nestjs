import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('student')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  getProducts() {
    return this.courseService.getCourses();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.courseService.getCourse(Number(id));
  }

  @Post()
  createProduct(@Body() body: any) {
    return this.courseService.createCourse(body);
  }

  @Put(':id')
  updateBook(@Param('id') id: string, @Body() body: any) {
    return this.courseService.updateCourse(Number(id), body);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string) {
    return this.courseService.deleteCourse(Number(id));
  }
}