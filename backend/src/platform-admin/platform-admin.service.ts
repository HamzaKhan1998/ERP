import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { TenantStatus } from '../../generated/prisma/enums.js';
import { AssignTenantAdminDto, CreateTenantDto, UpdateTenantDto, UpdateTenantStatusDto } from './dto/platform-admin.dto.js';

@Injectable()
export class PlatformAdminService {
  constructor(private readonly prisma: PrismaService) {}

  listTenants() {
    return this.prisma.tenant.findMany({
      include: {
        _count: { select: { users: true } },
        users: {
          where: { isTenantAdmin: true },
          select: { name: true, email: true, status: true },
          take: 1,
        },
      },
      orderBy: { createdAt: 'asc' },
    });
  }

  async getTenant(id: string) {
    const tenant = await this.prisma.tenant.findUnique({
      where: { id },
      include: { users: true, _count: { select: { documents: true, users: true } } },
    });
    if (!tenant) throw new NotFoundException('Tenant not found');
    return tenant;
  }

  async createTenant(dto: CreateTenantDto) {
    try {
      return await this.prisma.tenant.create({ data: dto });
    } catch (error) {
      throw new ConflictException('Tenant name, slug, or subdomain already exists');
    }
  }

  async updateTenant(id: string, dto: UpdateTenantDto) {
    await this.ensureTenant(id);
    try {
      return await this.prisma.tenant.update({ where: { id }, data: dto });
    } catch (error) {
      throw new ConflictException('Tenant name, slug, or subdomain already exists');
    }
  }

  async assignTenantAdmin(id: string, dto: AssignTenantAdminDto) {
    const tenant = await this.ensureTenant(id);
    const existing = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (existing && existing.tenantId && existing.tenantId !== tenant.id) {
      throw new ConflictException('This email belongs to another tenant');
    }

    const name = dto.name?.trim() || this.nameFromEmail(dto.email);
    return this.prisma.user.upsert({
      where: { email: dto.email },
      update: { tenantId: tenant.id, name, isTenantAdmin: true, systemRole: 'TENANT_ADMIN', status: 'INVITED' },
      create: { email: dto.email, name, tenantId: tenant.id, isTenantAdmin: true, systemRole: 'TENANT_ADMIN', status: 'INVITED' },
    });
  }

  async updateStatus(id: string, dto: UpdateTenantStatusDto) {
    await this.ensureTenant(id);
    return this.prisma.tenant.update({ where: { id }, data: { status: TenantStatus[dto.status] } });
  }

  private async ensureTenant(id: string) {
    const tenant = await this.prisma.tenant.findUnique({ where: { id } });
    if (!tenant) throw new NotFoundException('Tenant not found');
    return tenant;
  }

  private nameFromEmail(email: string) {
    const name = email.split('@')[0].replace(/[._-]+/g, ' ');
    return name.replace(/\b\w/g, (letter) => letter.toUpperCase());
  }
}
