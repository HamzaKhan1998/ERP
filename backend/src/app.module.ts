import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaService } from './prisma/prisma.service.js';
import { AdminModule } from './admin/admin.module.js';

@Module({
  imports: [AdminModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
