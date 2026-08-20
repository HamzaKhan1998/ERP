import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../generated/prisma/client.js';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async healthCheck(): Promise<{ status: string; database: string; connected: boolean }> {
    try {
      const result = await this.$queryRaw<{ current_database: string }[]>`
        SELECT current_database() as "current_database"
      `;

      return {
        status: 'ok',
        database: result[0]?.current_database ?? 'unknown',
        connected: true,
      };
    } catch (error) {
      return {
        status: 'error',
        database: 'unknown',
        connected: false,
      };
    }
  }
}
