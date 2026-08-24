import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import {
  ApprovalDecisionType,
  DocumentLevel,
  DocumentStatus,
  WorkflowAssignmentType,
} from '../../generated/prisma/enums.js';
import { PrismaService } from '../prisma/prisma.service.js';
import {
  CreateChangeRequestDto,
  CreateProcedureDto,
  DocumentDecisionDto,
  IncorporateChangeRequestDto,
  PeriodicReviewDto,
  ReviewChangeRequestDto,
} from './dto/document.dto.js';
import type { AuthenticatedUser } from '../auth/guards/jwt-auth.guard.js';

@Injectable()
export class DocumentsService {
  constructor(private readonly prisma: PrismaService) {}

  async createProcedure(dto: CreateProcedureDto, actor: AuthenticatedUser) {
    if (actor.scope === 'PLATFORM_ADMIN' && !dto.tenantSlug) {
      throw new BadRequestException('Tenant slug is required for Platform Admin document creation');
    }

    const tenant = await this.prisma.tenant.findFirst({
      where: actor.scope === 'PLATFORM_ADMIN'
        ? { slug: dto.tenantSlug as string }
        : { id: actor.tenantId ?? '' },
    });

    if (!tenant) {
      throw new NotFoundException('Tenant not found');
    }

    if (actor.scope === 'TENANT_USER' && tenant.id !== actor.tenantId) {
      throw new NotFoundException('Tenant not found');
    }

    const [preparedBy, reviewedBy, approvedBy] = await Promise.all([
      this.findUser(dto.preparedByEmail, tenant.id),
      this.findUser(dto.reviewedByEmail, tenant.id),
      this.findUser(dto.approvedByEmail, tenant.id),
    ]);

    return this.prisma.document.create({
      data: {
        tenantId: tenant.id,
        title: dto.title,
        controlNumber: dto.controlNumber,
        level: DocumentLevel.LEVEL_2,
        status: DocumentStatus.DRAFT,
        versions: {
          create: {
            versionLabel: dto.versionLabel,
            revisionNumber: dto.revisionNumber,
            status: 'DRAFT',
            purpose: dto.purpose,
            scope: dto.scope,
            responsibilities: dto.responsibilities,
            procedureContent: dto.procedureContent,
            recordsDescription: dto.recordsDescription,
            relatedDocuments: dto.relatedDocuments,
            complianceNote: dto.complianceNote,
            assignments: {
              create: [
                { userId: preparedBy.id, type: WorkflowAssignmentType.PREPARED_BY },
                { userId: reviewedBy.id, type: WorkflowAssignmentType.REVIEWED_BY },
                { userId: approvedBy.id, type: WorkflowAssignmentType.APPROVED_BY },
              ],
            },
          },
        },
      },
      include: {
        versions: { include: { assignments: { include: { user: true } } } },
      },
    });
  }

  async getDocument(documentId: string, actor: AuthenticatedUser) {
    const document = await this.prisma.document.findUnique({
      where: { id: documentId },
      include: {
        tenant: true,
        versions: {
          orderBy: { revisionNumber: 'desc' },
          include: {
            assignments: { include: { user: true } },
            approvals: { include: { user: true }, orderBy: { decidedAt: 'desc' } },
            complianceRefs: true,
            revisionHistory: true,
          },
        },
      },
    });

    if (!document) {
      throw new NotFoundException('Document not found');
    }

    this.assertTenantAccess(document.tenantId, actor);

    return document;
  }

  async submitForReview(documentId: string, actor: AuthenticatedUser) {
    const document = await this.prisma.document.findUnique({ where: { id: documentId } });
    if (!document) {
      throw new NotFoundException('Document not found');
    }
    this.assertTenantAccess(document.tenantId, actor);

    if (document.status !== DocumentStatus.DRAFT && document.status !== DocumentStatus.RETURNED_FOR_CORRECTION) {
      throw new BadRequestException('Only draft or returned documents can be submitted');
    }

    const latestVersion = await this.prisma.documentVersion.findFirst({
      where: { documentId },
      orderBy: { revisionNumber: 'desc' },
    });

    if (!latestVersion) {
      throw new BadRequestException('Document has no version to submit');
    }

    return this.prisma.$transaction(async (transaction) => {
      await transaction.documentVersion.update({
        where: { id: latestVersion.id },
        data: { status: 'DRAFT' },
      });
      return transaction.document.update({
        where: { id: documentId },
        data: { status: DocumentStatus.PENDING_APPROVAL },
      });
    });
  }

  async getApprovalQueue(actor: AuthenticatedUser) {
    const user = await this.findUser(actor.email, actor.tenantId ?? undefined);

    return this.prisma.workflowAssignment.findMany({
      where: {
        userId: user.id,
        type: WorkflowAssignmentType.APPROVED_BY,
        version: {
          status: 'DRAFT',
          document: {
            status: DocumentStatus.PENDING_APPROVAL,
          },
        },
      },
      include: {
        version: {
          include: {
            document: { include: { tenant: true } },
            assignments: { include: { user: true } },
            complianceRefs: true,
            revisionHistory: true,
          },
        },
      },
      orderBy: { assignedAt: 'asc' },
    });
  }

  async recordDecision(versionId: string, dto: DocumentDecisionDto, actor: AuthenticatedUser) {
    const user = await this.findUser(actor.email, actor.tenantId ?? undefined);
    const assignment = await this.prisma.workflowAssignment.findFirst({
      where: {
        versionId,
        userId: user.id,
        type: WorkflowAssignmentType.APPROVED_BY,
      },
      include: { version: true },
    });

    if (!assignment) {
      throw new BadRequestException('This user is not assigned as the approver for this version');
    }
    if (assignment.version.status !== 'DRAFT') {
      throw new BadRequestException('Only a draft version can receive an approval decision');
    }
    if (!user.tenantId) {
      throw new BadRequestException('A tenant approver is required');
    }
    this.assertTenantAccess(user.tenantId, actor);

    const status = dto.decision === 'APPROVED'
      ? DocumentStatus.APPROVED
      : DocumentStatus.RETURNED_FOR_CORRECTION;

    return this.prisma.$transaction(async (transaction) => {
      const decision = await transaction.approvalDecision.create({
        data: {
          versionId,
          userId: user.id,
          decision: dto.decision === 'APPROVED'
            ? ApprovalDecisionType.APPROVED
            : ApprovalDecisionType.RETURNED_FOR_CORRECTION,
          comment: dto.comment,
        },
      });

      await transaction.document.update({
        where: { id: assignment.version.documentId },
        data: { status },
      });

      await transaction.documentVersion.update({
        where: { id: versionId },
        data: { status: dto.decision === 'APPROVED' ? 'DRAFT' : 'DRAFT' },
      });

      return decision;
    });
  }

  async publishVersion(versionId: string, actor: AuthenticatedUser) {
    const version = await this.prisma.documentVersion.findUnique({
      where: { id: versionId },
      include: {
        document: true,
        approvals: { where: { decision: ApprovalDecisionType.APPROVED } },
      },
    });

    if (!version) {
      throw new NotFoundException('Document version not found');
    }
    this.assertTenantAccess(version.document.tenantId, actor);

    if (version.document.status !== DocumentStatus.APPROVED || version.approvals.length === 0) {
      throw new BadRequestException('Only an approved version can be published');
    }
    if (!actor.isTenantAdmin && actor.scope !== 'PLATFORM_ADMIN') {
      throw new BadRequestException('Only a Tenant Admin or Platform Admin can publish a version');
    }

    return this.prisma.$transaction(async (transaction) => {
      await transaction.documentVersion.updateMany({
        where: { documentId: version.documentId },
        data: { status: 'SUPERSEDED' },
      });
      await transaction.documentVersion.update({
        where: { id: versionId },
        data: { status: 'CURRENT' },
      });
      return transaction.document.update({
        where: { id: version.documentId },
        data: { status: DocumentStatus.PUBLISHED },
        include: { versions: { orderBy: { revisionNumber: 'desc' } } },
      });
    });
  }

  async createChangeRequest(dto: CreateChangeRequestDto, actor: AuthenticatedUser) {
    const document = await this.prisma.document.findUnique({
      where: { id: dto.documentId },
      include: {
        tenant: true,
        versions: { orderBy: { revisionNumber: 'desc' }, take: 1 },
      },
    });

    if (!document || !document.versions[0]) {
      throw new NotFoundException('Approved document not found');
    }
    this.assertTenantAccess(document.tenantId, actor);

    if (document.status !== DocumentStatus.APPROVED && document.status !== DocumentStatus.PUBLISHED) {
      throw new BadRequestException('Only an approved document can receive a change request');
    }

    return this.prisma.changeRequest.create({
      data: {
        tenantId: document.tenantId,
        documentId: document.id,
        sourceVersionId: document.versions[0].id,
        requestedById: actor.sub,
        existingRequirement: dto.existingRequirement,
        proposedChange: dto.proposedChange,
        reason: dto.reason,
      },
      include: { document: true, sourceVersion: true, requestedBy: true },
    });
  }

  async listChangeRequests(actor: AuthenticatedUser) {
    return this.prisma.changeRequest.findMany({
      where: actor.scope === 'PLATFORM_ADMIN' ? {} : { tenantId: actor.tenantId ?? '' },
      include: { document: true, sourceVersion: true, requestedBy: true, reviewedBy: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getChangeRequest(changeRequestId: string, actor: AuthenticatedUser) {
    const request = await this.prisma.changeRequest.findUnique({
      where: { id: changeRequestId },
      include: { document: true, sourceVersion: true, requestedBy: true, reviewedBy: true },
    });
    if (!request) {
      throw new NotFoundException('Change request not found');
    }
    this.assertTenantAccess(request.tenantId, actor);
    return request;
  }

  async reviewChangeRequest(
    changeRequestId: string,
    dto: ReviewChangeRequestDto,
    actor: AuthenticatedUser,
  ) {
    const request = await this.prisma.changeRequest.findUnique({
      where: { id: changeRequestId },
    });
    if (!request) {
      throw new NotFoundException('Change request not found');
    }
    this.assertTenantAccess(request.tenantId, actor);

    const reviewer = await this.findUser(actor.email, request.tenantId);
    const designation = reviewer.designation?.toLowerCase() ?? '';
    if (!designation.includes('general manager') && !designation.includes('management representative')) {
      throw new BadRequestException('Only a General Manager or Management Representative can review a change request');
    }
    if (request.status !== 'SUBMITTED') {
      throw new BadRequestException('This change request has already been reviewed');
    }

    return this.prisma.changeRequest.update({
      where: { id: changeRequestId },
      data: {
        status: dto.decision,
        managementComment: dto.comment,
        reviewedById: reviewer.id,
        reviewedAt: new Date(),
      },
      include: { document: true, requestedBy: true, reviewedBy: true },
    });
  }

  async incorporateChangeRequest(
    changeRequestId: string,
    dto: IncorporateChangeRequestDto,
    actor: AuthenticatedUser,
  ) {
    const request = await this.prisma.changeRequest.findUnique({
      where: { id: changeRequestId },
      include: {
        document: true,
        sourceVersion: {
          include: {
            assignments: true,
            complianceRefs: true,
          },
        },
      },
    });

    if (!request) {
      throw new NotFoundException('Change request not found');
    }
    this.assertTenantAccess(request.tenantId, actor);

    if (request.status !== 'ACCEPTED_FOR_CHANGE') {
      throw new BadRequestException('Only an accepted change request can be incorporated');
    }
    if (!actor.isTenantAdmin && actor.sub !== request.requestedById && actor.scope !== 'PLATFORM_ADMIN') {
      throw new BadRequestException('Only the requester or Tenant Admin can incorporate this change');
    }

    const nextRevision = request.sourceVersion.revisionNumber + 1;
    const versionLabel = dto.versionLabel?.trim() || `Revision ${nextRevision}`;
    const changedProcedure = [
      request.sourceVersion.procedureContent ?? '',
      '',
      `Change Request ${request.id}:`,
      request.proposedChange,
    ].join('\n');

    return this.prisma.$transaction(async (transaction) => {
      const nextVersion = await transaction.documentVersion.create({
        data: {
          documentId: request.documentId,
          versionLabel,
          revisionNumber: nextRevision,
          status: 'DRAFT',
          purpose: request.sourceVersion.purpose,
          scope: request.sourceVersion.scope,
          responsibilities: request.sourceVersion.responsibilities,
          procedureContent: changedProcedure,
          recordsDescription: request.sourceVersion.recordsDescription,
          relatedDocuments: request.sourceVersion.relatedDocuments,
          complianceNote: request.sourceVersion.complianceNote,
          assignments: {
            create: request.sourceVersion.assignments.map((assignment) => ({
              userId: assignment.userId,
              type: assignment.type,
            })),
          },
          complianceRefs: {
            create: request.sourceVersion.complianceRefs.map((reference) => ({
              standard: reference.standard,
              edition: reference.edition,
              clause: reference.clause,
              description: reference.description,
            })),
          },
          revisionHistory: {
            create: {
              revisionNumber: versionLabel,
              changeDescription: request.proposedChange,
            },
          },
        },
      });

      await transaction.documentVersion.update({
        where: { id: request.sourceVersionId },
        data: { status: 'SUPERSEDED' },
      });

      await transaction.document.update({
        where: { id: request.documentId },
        data: { status: DocumentStatus.DRAFT },
      });

      return transaction.changeRequest.update({
        where: { id: changeRequestId },
        data: {
          status: 'INCORPORATED',
          incorporatedVersionId: nextVersion.id,
        },
        include: { document: true, sourceVersion: true, incorporatedVersion: true },
      });
    });
  }

  async listDueReviews(actor: AuthenticatedUser) {
    const now = new Date();
    return this.prisma.documentVersion.findMany({
      where: {
        status: 'CURRENT',
        nextReviewDate: { lte: now },
        document: actor.scope === 'PLATFORM_ADMIN'
          ? {}
          : { tenantId: actor.tenantId ?? '' },
      },
      include: { document: { include: { tenant: true } }, periodicReviews: { orderBy: { reviewedAt: 'desc' }, take: 1 } },
      orderBy: { nextReviewDate: 'asc' },
    });
  }

  async recordPeriodicReview(dto: PeriodicReviewDto, actor: AuthenticatedUser) {
    const version = await this.prisma.documentVersion.findUnique({
      where: { id: dto.versionId },
      include: { document: true },
    });
    if (!version || version.status !== 'CURRENT') {
      throw new NotFoundException('Current document version not found');
    }
    this.assertTenantAccess(version.document.tenantId, actor);

    const reviewer = await this.findUser(actor.email, version.document.tenantId);
    const designation = reviewer.designation?.toLowerCase() ?? '';
    if (!reviewer.isTenantAdmin && !designation.includes('general manager') && !designation.includes('management representative')) {
      throw new BadRequestException('Only a Tenant Admin, General Manager, or Management Representative can complete a periodic review');
    }

    if (dto.outcome === 'REVISION_REQUIRED') {
      const changeRequest = await this.prisma.$transaction(async (transaction) => {
        const review = await transaction.periodicReview.create({
          data: {
            tenantId: version.document.tenantId,
            versionId: version.id,
            reviewedById: reviewer.id,
            outcome: dto.outcome,
            comments: dto.comments,
            referencesChecked: dto.referencesChecked,
          },
        });
        return transaction.changeRequest.create({
          data: {
            tenantId: version.document.tenantId,
            documentId: version.documentId,
            sourceVersionId: version.id,
            requestedById: reviewer.id,
            existingRequirement: 'Periodic review identified a document update requirement.',
            proposedChange: dto.comments ?? 'Update required after periodic review.',
            reason: 'Periodic review outcome: revision required.',
          },
        }).then((request) => ({ review, request }));
      });
      return changeRequest;
    }

    const nextReviewDate = dto.nextReviewDate
      ? new Date(dto.nextReviewDate)
      : this.addYears(new Date(), 3);
    if (Number.isNaN(nextReviewDate.getTime())) {
      throw new BadRequestException('Invalid next review date');
    }

    return this.prisma.$transaction(async (transaction) => {
      const review = await transaction.periodicReview.create({
        data: {
          tenantId: version.document.tenantId,
          versionId: version.id,
          reviewedById: reviewer.id,
          outcome: dto.outcome,
          comments: dto.comments,
          referencesChecked: dto.referencesChecked,
          nextReviewDate,
        },
      });
      if (dto.outcome === 'RETIRED') {
        await transaction.document.update({ where: { id: version.documentId }, data: { status: DocumentStatus.RETIRED } });
      } else {
        await transaction.documentVersion.update({ where: { id: version.id }, data: { nextReviewDate } });
      }
      return review;
    });
  }

  private addYears(date: Date, years: number) {
    const next = new Date(date);
    next.setFullYear(next.getFullYear() + years);
    return next;
  }

  private async findUser(email: string, tenantId?: string) {
    const user = await this.prisma.user.findFirst({
      where: { email, ...(tenantId ? { tenantId } : {}) },
    });
    if (!user) {
      throw new NotFoundException(`User not found for email: ${email}`);
    }
    return user;
  }

  private assertTenantAccess(tenantId: string, actor: AuthenticatedUser) {
    if (actor.scope !== 'PLATFORM_ADMIN' && actor.tenantId !== tenantId) {
      throw new NotFoundException('Document not found');
    }
  }
}
