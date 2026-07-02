import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Patch,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  ProductsService: any;
  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productsService.getProduct(Number(id));
  }

  @Post()
  createProduct(@Body() body: any) {
    return this.productsService.createProduct(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.productsService.updateProduct(Number(id), body);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productsService.deleteProduct(Number(id));
  }
}
