import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service.js';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async getHello(): Promise<string> {
    const health = await this.prisma.healthCheck();

    if (health.connected) {
      return `ERP API is running and connected to PostgreSQL database: ${health.database}`;
    }

    return 'ERP API is running, but the PostgreSQL connection is unavailable.';
  }
}
