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
import { CreateStudentDto } from './Dto/createStudentDto';
import { UpdateStudentDto } from './Dto/updateStudentDto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents() {
    return this.studentService.getStudents();
  }

  @Get(':id')
  getStudent(@Param('id') id: string) {
    return this.studentService.getStudent(Number(id));
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto) {
    return this.studentService.createStudent(body);
  }

  @Put(':id')
  updateStudent(@Param('id') id: string, @Body() body: UpdateStudentDto) {
    return this.studentService.updateStudent(Number(id), body);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: string) {
    return this.studentService.deleteStudent(Number(id));
  }
}
