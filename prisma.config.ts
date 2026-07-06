import 'dotenv/config'; // <-- PRISMA TALAB QILGAN ASOSIY QATOR!
import { defineConfig } from '@prisma/config';

export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL,
  },
});