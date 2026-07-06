import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto } from './Dto/UpdateUser.dto';
import { CreateUserDto } from './Dto/CreateUser.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async getusers() {
    return this.prisma.user.findMany();
  }

  async createuser(body: CreateUserDto) {
    return this.prisma.user.create({
      data: body,
    });
  }

  async getUser(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async updateUser(id: number, body: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: body,
    });
  }

  async deleteUser(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}