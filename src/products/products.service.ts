import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './Dto/CreateProduct.dto';
import { UpdateProductDto } from './Dto/UpdateProduct.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async getProducts() {
    const products = await this.prisma.product.findMany();
    return products.map((product) => ({
      ...product,
      image: product.image ?
        `http://localhost:3000/uploads/${product.image}`
        : null,
    }));
  }

  async getProduct(id: number) {
  const product = await this.prisma.product.findUnique({ where: { id } });
  if (!product) {
    throw new NotFoundException(`Product with id ${id} not found`);
  }
  return {
    ...product,
    image: product.image ? `http://localhost:3000/uploads/${product.image}` : null,
  };
}

  async createProduct(body: CreateProductDto, image: string) {
    return this.prisma.product.create({
      data: {
        title: body.title,
        price: Number(body.price),
        image,
      },
    });
  }

  async updateProduct(id: number, body: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data: body,
    });
  }

  async deleteProduct(id: number) {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}
