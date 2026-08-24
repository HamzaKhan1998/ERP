import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller.js';
import { AuthService } from './auth.service.js';
import { JwtAuthGuard } from './guards/jwt-auth.guard.js';
import { TenantAdminGuard } from './guards/tenant-admin.guard.js';
import { PlatformAdminGuard } from './guards/platform-admin.guard.js';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'development-only-change-this-secret',
      signOptions: { expiresIn: '8h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtAuthGuard, TenantAdminGuard, PlatformAdminGuard],
  exports: [JwtModule, JwtAuthGuard, TenantAdminGuard, PlatformAdminGuard],
})
export class AuthModule {}
