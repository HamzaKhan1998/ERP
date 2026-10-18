import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import type { AuthenticatedUser } from '../auth/guards/jwt-auth.guard.js';
import { AuditLogService } from '../audit-log/audit-log.service.js';

@Injectable()
export class TrainingService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly auditLog: AuditLogService,
  ) {}

  listForUser(actor: AuthenticatedUser) {
    return this.prisma.trainingTask.findMany({
      where: { assignedToId: actor.sub, tenantId: actor.tenantId ?? '' },
      include: { document: true, version: true },
      orderBy: { dueDate: 'asc' },
    });
  }

  async complete(id: string, actor: AuthenticatedUser) {
    const task = await this.prisma.trainingTask.findFirst({
      where: { id, assignedToId: actor.sub, tenantId: actor.tenantId ?? '' },
    });
    if (!task) throw new NotFoundException('Training task not found');
    if (task.status === 'COMPLETED') throw new BadRequestException('Training task is already complete');
    const updated = await this.prisma.trainingTask.update({
      where: { id },
      data: { status: 'COMPLETED', completedAt: new Date() },
      include: { document: true, version: true },
    });
    await this.auditLog.record({ actor, action: 'TRAINING_TASK_COMPLETED', entityType: 'TrainingTask', entityId: id, details: { documentId: task.documentId } });
    return updated;
  }
}
