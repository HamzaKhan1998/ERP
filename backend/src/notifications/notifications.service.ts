import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import type { AuthenticatedUser } from '../auth/guards/jwt-auth.guard.js';
import { AuditLogService } from '../audit-log/audit-log.service.js';

@Injectable()
export class NotificationsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly auditLog: AuditLogService,
  ) {}

  listForUser(actor: AuthenticatedUser) {
    return this.prisma.notification.findMany({
      where: { userId: actor.sub, tenantId: actor.tenantId ?? '' },
      orderBy: { queuedAt: 'desc' },
    });
  }

  async markRead(id: string, actor: AuthenticatedUser) {
    const notification = await this.prisma.notification.findFirst({
      where: { id, userId: actor.sub, tenantId: actor.tenantId ?? '' },
    });
    if (!notification) throw new NotFoundException('Notification not found');
    const updated = await this.prisma.notification.update({
      where: { id },
      data: { status: 'READ', readAt: new Date() },
    });
    await this.auditLog.record({ actor, action: 'NOTIFICATION_READ', entityType: 'Notification', entityId: id });
    return updated;
  }
}
