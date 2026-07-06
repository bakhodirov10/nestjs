import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // <-- Buni import qiling
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // <-- Eng birinchi import shu tursin!
    UsersModule,
    ProductsModule,
    BooksModule,
  ],
})
export class AppModule {}