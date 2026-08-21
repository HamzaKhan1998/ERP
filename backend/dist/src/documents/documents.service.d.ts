import { ApprovalDecisionType, DocumentLevel, DocumentStatus, WorkflowAssignmentType } from '../../generated/prisma/enums.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateProcedureDto, DocumentDecisionDto } from './dto/document.dto.js';
export declare class DocumentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createProcedure(dto: CreateProcedureDto): Promise<{
        versions: ({
            assignments: ({
                user: {
                    id: string;
                    name: string;
                    status: import("../../generated/prisma/enums.js").UserStatus;
                    createdAt: Date;
                    updatedAt: Date;
                    tenantId: string | null;
                    email: string;
                    designation: string | null;
                    isTenantAdmin: boolean;
                };
            } & {
                id: string;
                versionId: string;
                userId: string;
                type: WorkflowAssignmentType;
                assignedAt: Date;
                completedAt: Date | null;
            })[];
        } & {
            id: string;
            createdAt: Date;
            documentId: string;
            versionLabel: string;
            revisionNumber: number;
            effectiveDate: Date | null;
            nextReviewDate: Date | null;
            purpose: string | null;
            scope: string | null;
            responsibilities: string | null;
            procedureContent: string | null;
            recordsDescription: string | null;
            relatedDocuments: string | null;
            complianceNote: string | null;
        })[];
    } & {
        id: string;
        status: DocumentStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        title: string;
        controlNumber: string;
        level: DocumentLevel;
    }>;
    getDocument(documentId: string): Promise<{
        tenant: {
            id: string;
            name: string;
            slug: string;
            subdomain: string;
            status: import("../../generated/prisma/enums.js").TenantStatus;
            createdAt: Date;
            updatedAt: Date;
        };
        versions: ({
            revisionHistory: {
                id: string;
                createdAt: Date;
                revisionNumber: string;
                versionId: string;
                pageNumber: string | null;
                changeDescription: string;
            }[];
            assignments: ({
                user: {
                    id: string;
                    name: string;
                    status: import("../../generated/prisma/enums.js").UserStatus;
                    createdAt: Date;
                    updatedAt: Date;
                    tenantId: string | null;
                    email: string;
                    designation: string | null;
                    isTenantAdmin: boolean;
                };
            } & {
                id: string;
                versionId: string;
                userId: string;
                type: WorkflowAssignmentType;
                assignedAt: Date;
                completedAt: Date | null;
            })[];
            approvals: ({
                user: {
                    id: string;
                    name: string;
                    status: import("../../generated/prisma/enums.js").UserStatus;
                    createdAt: Date;
                    updatedAt: Date;
                    tenantId: string | null;
                    email: string;
                    designation: string | null;
                    isTenantAdmin: boolean;
                };
            } & {
                id: string;
                versionId: string;
                userId: string;
                decision: ApprovalDecisionType;
                comment: string | null;
                decidedAt: Date;
            })[];
            complianceRefs: {
                id: string;
                versionId: string;
                standard: string;
                edition: string | null;
                clause: string;
                description: string | null;
            }[];
        } & {
            id: string;
            createdAt: Date;
            documentId: string;
            versionLabel: string;
            revisionNumber: number;
            effectiveDate: Date | null;
            nextReviewDate: Date | null;
            purpose: string | null;
            scope: string | null;
            responsibilities: string | null;
            procedureContent: string | null;
            recordsDescription: string | null;
            relatedDocuments: string | null;
            complianceNote: string | null;
        })[];
    } & {
        id: string;
        status: DocumentStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        title: string;
        controlNumber: string;
        level: DocumentLevel;
    }>;
    submitForReview(documentId: string): Promise<{
        id: string;
        status: DocumentStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        title: string;
        controlNumber: string;
        level: DocumentLevel;
    }>;
    getApprovalQueue(approverEmail: string): Promise<({
        version: {
            document: {
                tenant: {
                    id: string;
                    name: string;
                    slug: string;
                    subdomain: string;
                    status: import("../../generated/prisma/enums.js").TenantStatus;
                    createdAt: Date;
                    updatedAt: Date;
                };
            } & {
                id: string;
                status: DocumentStatus;
                createdAt: Date;
                updatedAt: Date;
                tenantId: string;
                title: string;
                controlNumber: string;
                level: DocumentLevel;
            };
            revisionHistory: {
                id: string;
                createdAt: Date;
                revisionNumber: string;
                versionId: string;
                pageNumber: string | null;
                changeDescription: string;
            }[];
            assignments: ({
                user: {
                    id: string;
                    name: string;
                    status: import("../../generated/prisma/enums.js").UserStatus;
                    createdAt: Date;
                    updatedAt: Date;
                    tenantId: string | null;
                    email: string;
                    designation: string | null;
                    isTenantAdmin: boolean;
                };
            } & {
                id: string;
                versionId: string;
                userId: string;
                type: WorkflowAssignmentType;
                assignedAt: Date;
                completedAt: Date | null;
            })[];
            complianceRefs: {
                id: string;
                versionId: string;
                standard: string;
                edition: string | null;
                clause: string;
                description: string | null;
            }[];
        } & {
            id: string;
            createdAt: Date;
            documentId: string;
            versionLabel: string;
            revisionNumber: number;
            effectiveDate: Date | null;
            nextReviewDate: Date | null;
            purpose: string | null;
            scope: string | null;
            responsibilities: string | null;
            procedureContent: string | null;
            recordsDescription: string | null;
            relatedDocuments: string | null;
            complianceNote: string | null;
        };
    } & {
        id: string;
        versionId: string;
        userId: string;
        type: WorkflowAssignmentType;
        assignedAt: Date;
        completedAt: Date | null;
    })[]>;
    recordDecision(versionId: string, dto: DocumentDecisionDto): Promise<{
        id: string;
        versionId: string;
        userId: string;
        decision: ApprovalDecisionType;
        comment: string | null;
        decidedAt: Date;
    }>;
    private findUser;
}
