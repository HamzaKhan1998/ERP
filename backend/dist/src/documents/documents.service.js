var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { ApprovalDecisionType, DocumentLevel, DocumentStatus, WorkflowAssignmentType, } from '../../generated/prisma/enums.js';
import { PrismaService } from '../prisma/prisma.service.js';
let DocumentsService = class DocumentsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createProcedure(dto) {
        const tenant = await this.prisma.tenant.findUnique({
            where: { slug: dto.tenantSlug },
        });
        if (!tenant) {
            throw new NotFoundException('Tenant not found');
        }
        const [preparedBy, reviewedBy, approvedBy] = await Promise.all([
            this.findUser(dto.preparedByEmail),
            this.findUser(dto.reviewedByEmail),
            this.findUser(dto.approvedByEmail),
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
    async getDocument(documentId) {
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
        return document;
    }
    async submitForReview(documentId) {
        const document = await this.prisma.document.findUnique({ where: { id: documentId } });
        if (!document) {
            throw new NotFoundException('Document not found');
        }
        if (document.status !== DocumentStatus.DRAFT && document.status !== DocumentStatus.RETURNED_FOR_CORRECTION) {
            throw new BadRequestException('Only draft or returned documents can be submitted');
        }
        return this.prisma.document.update({
            where: { id: documentId },
            data: { status: DocumentStatus.PENDING_APPROVAL },
        });
    }
    async getApprovalQueue(approverEmail) {
        const user = await this.findUser(approverEmail);
        return this.prisma.workflowAssignment.findMany({
            where: {
                userId: user.id,
                type: WorkflowAssignmentType.APPROVED_BY,
                version: {
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
    async recordDecision(versionId, dto) {
        const user = await this.findUser(dto.approverEmail);
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
            return decision;
        });
    }
    async findUser(email) {
        const user = await this.prisma.user.findUnique({ where: { email } });
        if (!user) {
            throw new NotFoundException(`User not found for email: ${email}`);
        }
        return user;
    }
};
DocumentsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], DocumentsService);
export { DocumentsService };
//# sourceMappingURL=documents.service.js.map