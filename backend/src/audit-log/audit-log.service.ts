import { Injectable } from '@nestjs/common';
import { Prisma } from '../../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import type { AuthenticatedUser } from '../auth/guards/jwt-auth.guard.js';

@Injectable()
export class AuditLogService {
  constructor(private readonly prisma: PrismaService) {}

  record(data: {
    actor: AuthenticatedUser;
    action: string;
    entityType: string;
    entityId?: string;
    details?: Record<string, unknown>;
  }) {
    return this.prisma.auditLog.create({
      data: {
        tenantId: data.actor.tenantId,
        actorId: data.actor.sub,
        action: data.action,
        entityType: data.entityType,
        entityId: data.entityId,
        details: data.details as Prisma.InputJsonObject | undefined,
      },
    });
  }

  listForActor(actor: AuthenticatedUser) {
    return this.prisma.auditLog.findMany({
      where: actor.scope === 'PLATFORM_ADMIN' ? {} : { tenantId: actor.tenantId ?? '' },
      orderBy: { createdAt: 'desc' },
      take: 200,
    });
  }
}
