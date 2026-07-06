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
import { UpdateBookDto } from './Dto/UpdateBooks.dto';
import { CreateBookDto } from './Dto/CreateBooks.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getProducts() {
    return this.booksService.getBooks();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.booksService.getBook(Number(id));
  }

  @Post()
  createProduct(@Body() body: CreateBookDto) {
    return this.booksService.createBook(body);
  }

  @Put(':id')
  updateBook(@Param('id') id: string, @Body() body: UpdateBookDto) {
    return this.booksService.updateBook(Number(id), body);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string) {
    return this.booksService.deleteBook(Number(id));
  }
}