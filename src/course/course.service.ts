import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

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

  async createCourse(body: any) {
    return this.prisma.course.create({
      data: body,
    });
  }

  async updateCourse(id: number, body: any) {
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
