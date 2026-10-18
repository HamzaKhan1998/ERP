import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { PlatformAdminGuard } from '../auth/guards/platform-admin.guard.js';
import { AssignTenantAdminDto, CreateTenantDto, UpdateTenantDto, UpdateTenantStatusDto } from './dto/platform-admin.dto.js';
import { PlatformAdminService } from './platform-admin.service.js';

@Controller('platform-admin/tenants')
@UseGuards(JwtAuthGuard, PlatformAdminGuard)
export class PlatformAdminController {
  constructor(private readonly platformAdminService: PlatformAdminService) {}

  @Get()
  listTenants() { return this.platformAdminService.listTenants(); }

  @Get(':id')
  getTenant(@Param('id') id: string) { return this.platformAdminService.getTenant(id); }

  @Post()
  createTenant(@Body() dto: CreateTenantDto) { return this.platformAdminService.createTenant(dto); }

  @Patch(':id')
  updateTenant(@Param('id') id: string, @Body() dto: UpdateTenantDto) { return this.platformAdminService.updateTenant(id, dto); }

  @Post(':id/admin')
  assignTenantAdmin(@Param('id') id: string, @Body() dto: AssignTenantAdminDto) { return this.platformAdminService.assignTenantAdmin(id, dto); }

  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body() dto: UpdateTenantStatusDto) { return this.platformAdminService.updateStatus(id, dto); }
}
