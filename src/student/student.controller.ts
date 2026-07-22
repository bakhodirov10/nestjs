import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getProducts() {
    return this.studentService.getStudents();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.studentService.getStudent(Number(id));
  }

  @Post()
  createProduct(@Body() body: any) {
    return this.studentService.createStudent(body);
  }

  @Put(':id')
  updateBook(@Param('id') id: string, @Body() body: any) {
    return this.studentService.updateStudent(Number(id), body);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string) {
    return this.studentService.deleteStudent(Number(id));
  }
}