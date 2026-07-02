import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ProductsService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async getProducts() {
    return this.product.findMany();
  }

  async getProduct(id: number) {
    return this.product.findUnique({ where: { id } });
  }

  async createProduct(data: { title: string; price: number }) {
    const product = await this.product.create({ data });
    return {
      message: 'Product created',
      product,
    };
  }

  async updateProduct(id: number, data: { title?: string; price?: number }) {
    try {
      const product = await this.product.update({
        where: { id },
        data,
      });
      return {
        message: 'Product updated',
        product,
      };
    } catch (error) {
      return { message: 'product not found' };
    }
  }

  async deleteProduct(id: number) {
    try {
      await this.product.delete({ where: { id } });
      return { message: 'Product deleted successfully!' };
    } catch (error) {
      return { message: 'Product not found' };
    }
  }
}