import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './Dto/Login.dto';
import * as bcrypt from 'bcryptjs';
import { RegisterUserDto } from './Dto/register.dto';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private authService: AuthService,
  ) {}

  async getusers(
    search?: string,
    minAge?: string,
    maxAge?: string,
    sort?: string,
    page?: string,
    limit?: string,
  ) {
    const currentPage = Number(page) || 1;
    const take = Number(limit) || 5;
    const skip = (currentPage - 1) * take;

    const users = await this.prisma.user.findMany({
      where: {
        name: {
          contains: search,
          mode: 'insensitive'
        },
        age: {
          gte: minAge ? Number(minAge) : undefined,
          lte: maxAge ? Number(maxAge) : undefined,
        },
      },
      orderBy: {
        age: sort === 'asc' ? 'asc' : 'desc',
      },
      skip,
      take
    })
    
    return this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        age: true,
      },
    });
  }

  async register(body: RegisterUserDto, filename?: string) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: body.email },
    });

    if (existingUser) {
      throw new ConflictException('Email already registered');
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const user = await this.prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        age: body.age,
        password: hashedPassword,
      },
    });

    const token = this.authService.generateToken({
      id: user.id,
      email: user.email,
    });

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        age: user.age,
      },
      access_token: token,
    };
  }

  async login(body: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: body.email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordMatch = await bcrypt.compare(body.password, user.password);
    if (!isPasswordMatch) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const token = this.authService.generateToken({
      id: user.id,
      email: user.email,
    });
    
    const { password, ...userWithoutPassword } = user;

    return {
      message: 'Login successful',
      access_token: token,
      user: userWithoutPassword,
    };
  }

  async getUser(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }
}
