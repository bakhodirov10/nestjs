import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super();
  }

  async onModuleInit() {
    // Ilova to'liq yurgandan keyin dinamik ravishda URL ni yuklaymiz
    (this as any)._customDatasources = {
      db: {
        url: process.env.DATABASE_URL,
      },
    };
    await this.$connect();
  }
}