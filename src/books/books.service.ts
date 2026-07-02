import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class BooksService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async getBooks() {
    return this.book.findMany();
  }

  async getBook(id: number) {
    return this.book.findUnique({ where: { id } });
  }

  async createBook(data: { title: string; pages: number }) {
    const book = await this.book.create({ data });
    return {
      message: 'Book created',
      book,
    };
  }

  async updateBook(id: number, data: { title?: string; pages?: number }) {
    try {
      const book = await this.book.update({
        where: { id },
        data,
      });
      return {
        message: 'Book updated',
        book,
      };
    } catch (error) {
      return { message: 'Book is not found' };
    }
  }

  async deleteBook(id: number) {
    try {
      await this.book.delete({ where: { id } });
      return { message: 'Book deleted successfully!' };
    } catch (error) {
      return { message: 'Book not found' };
    }
  }
}