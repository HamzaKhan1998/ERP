import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { TenantAdminModule } from './tenant-admin/tenant-admin.module.js';
import { DocumentsModule } from './documents/documents.module.js';

@Module({
  imports: [PrismaModule, TenantAdminModule, DocumentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
