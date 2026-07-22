import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCourseDto } from './Dto/createCourseDto';
import { UpdateCourseDto } from './Dto/updateCourseCto';

@Injectable()
export class CourseService {
  constructor(private readonly prisma: PrismaService) {}

  async getCourses() {
    return this.prisma.course.findMany();
  }

  async getCourse(id: number) {
    return this.prisma.course.findUnique({
      where: { id },
    });
  }

  async createCourse(body: CreateCourseDto) {
    return this.prisma.course.create({
      data: body,
    });
  }

  async updateCourse(id: number, body: UpdateCourseDto) {
    return this.prisma.course.update({
      where: { id },
      data: body,
    });
  }

  async deleteCourse(id: number) {
    await this.prisma.course.delete({
      where: { id },
    });
    return {
      message: 'Course Successfuly Deleted!!!',
    };
  }
}
