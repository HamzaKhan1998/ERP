import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { TenantAdminModule } from './tenant-admin/tenant-admin.module.js';
import { DocumentsModule } from './documents/documents.module.js';
import { AuthModule } from './auth/auth.module.js';
import { FilesModule } from './files/files.module.js';
import { FormsModule } from './forms/forms.module.js';

@Module({
  imports: [PrismaModule, TenantAdminModule, DocumentsModule, AuthModule, FilesModule, FormsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
