import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { TenantAdminModule } from './tenant-admin/tenant-admin.module.js';
import { DocumentsModule } from './documents/documents.module.js';
import { AuthModule } from './auth/auth.module.js';
import { FilesModule } from './files/files.module.js';
import { FormsModule } from './forms/forms.module.js';
import { NotificationsModule } from './notifications/notifications.module.js';
import { TrainingModule } from './training/training.module.js';
import { PlatformAdminModule } from './platform-admin/platform-admin.module.js';
import { AuditLogModule } from './audit-log/audit-log.module.js';

@Module({
  imports: [PrismaModule, TenantAdminModule, DocumentsModule, AuthModule, FilesModule, FormsModule, NotificationsModule, TrainingModule, PlatformAdminModule, AuditLogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
