import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookDto } from './Dto/CreateBooks.dto';
import { UpdateBookDto } from './Dto/UpdateBooks.dto';

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}

  async getBooks() {
    return this.prisma.book.findMany();
  }

  async getBook(id: number) {
    return this.prisma.book.findUnique({
      where: { id },
    });
  }

  async createBook(body: CreateBookDto) {
    return this.prisma.book.create({
      data: body,
    });
  }

  async updateBook(id: number, body: UpdateBookDto) {
    return this.prisma.book.update({
      where: { id },
      data: body,
    });
  }

  async deleteBook(id: number) {
    await this.prisma.book.delete({
      where: { id },
    });
    return {
      message: 'Book Successfuly Deleted!!!',
    };
  }
}
