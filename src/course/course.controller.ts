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
import { CreateCourseDto } from './Dto/createCourseDto';
import { UpdateCourseDto } from './Dto/updateCourseCto';

@Controller('student')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  getCourses() {
    return this.courseService.getCourses();
  }

  @Get(':id')
  getCourse(@Param('id') id: string) {
    return this.courseService.getCourse(Number(id));
  }

  @Post()
  createCourse(@Body() body: CreateCourseDto) {
    return this.courseService.createCourse(body);
  }

  @Put(':id')
  updateCourse(@Param('id') id: string, @Body() body: UpdateCourseDto) {
    return this.courseService.updateCourse(Number(id), body);
  }

  @Delete(':id')
  deleteCourse(@Param('id') id: string) {
    return this.courseService.deleteCourse(Number(id));
  }
}