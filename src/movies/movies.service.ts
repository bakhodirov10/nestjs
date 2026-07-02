import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class MoviesService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async getMovies() {
    return this.user.findMany();
  }

  async getMovie(id: number) {
    return this.user.findUnique({ where: { id } });
  }

  async createMovie(data: { title: string; duration: string }) {
    const movie = await this.user.create({ data });
    return {
      message: 'Movie Successfully Created!',
      movie,
    };
  }

  async updateMovie(id: number, data: { title?: string; duration?: string }) {
    try {
      const movie = await this.user.update({
        where: { id },
        data,
      });
      return {
        message: 'Movie Updated!',
        movie,
      };
    } catch (error) {
      return { message: 'Movie not found' };
    }
  }

  async deleteMovie(id: number) {
    try {
      await this.user.delete({ where: { id } });
      return { message: 'Movie Deleted!' };
    } catch (error) {
      return { message: 'This Movie not Found' };
    }
  }
}