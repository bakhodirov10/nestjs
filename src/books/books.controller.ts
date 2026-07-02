import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  BooksService: any;

  @Get()
  getProducts() {
    return this.booksService.getBooks();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.booksService.getBook(Number(id));
  }

  @Post()
  createProduct(@Body() body: any) {
    return this.booksService.createBook(body);
  }

  @Put(':id')
  updateBook(@Param('id') id: string, @Body() body: any) {
    return this.booksService.updateBook(Number(id), body);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string) {
    return {
      message: 'Book Successfuly Deleted!!!',
    };
  }
}
