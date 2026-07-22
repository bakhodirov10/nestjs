import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StudentService {
  constructor(private readonly prisma: PrismaService) {}

  async getStudents() {
    return this.prisma.student.findMany();
  }

  async getStudent(id: number) {
    return this.prisma.student.findUnique({
      where: { id },
    });
  }

  async createStudent(body: any) {
    return this.prisma.student.create({
      data: body,
    });
  }

  async updateStudent(id: number, body: any) {
    return this.prisma.student.update({
      where: { id },
      data: body,
    });
  }

  async deleteStudent(id: number) {
    await this.prisma.student.delete({
      where: { id },
    });
    return {
      message: 'Student Successfuly Deleted!!!',
    };
  }
}
