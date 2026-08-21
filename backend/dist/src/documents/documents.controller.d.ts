import { CreateProcedureDto, DocumentDecisionDto } from './dto/document.dto.js';
import { DocumentsService } from './documents.service.js';
export declare class DocumentsController {
    private readonly documentsService;
    constructor(documentsService: DocumentsService);
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
                type: import("../../generated/prisma/enums.js").WorkflowAssignmentType;
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
        status: import("../../generated/prisma/enums.js").DocumentStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        title: string;
        controlNumber: string;
        level: import("../../generated/prisma/enums.js").DocumentLevel;
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
                status: import("../../generated/prisma/enums.js").DocumentStatus;
                createdAt: Date;
                updatedAt: Date;
                tenantId: string;
                title: string;
                controlNumber: string;
                level: import("../../generated/prisma/enums.js").DocumentLevel;
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
                type: import("../../generated/prisma/enums.js").WorkflowAssignmentType;
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
        type: import("../../generated/prisma/enums.js").WorkflowAssignmentType;
        assignedAt: Date;
        completedAt: Date | null;
    })[]>;
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
                type: import("../../generated/prisma/enums.js").WorkflowAssignmentType;
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
                decision: import("../../generated/prisma/enums.js").ApprovalDecisionType;
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
        status: import("../../generated/prisma/enums.js").DocumentStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        title: string;
        controlNumber: string;
        level: import("../../generated/prisma/enums.js").DocumentLevel;
    }>;
    submitForReview(documentId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums.js").DocumentStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        title: string;
        controlNumber: string;
        level: import("../../generated/prisma/enums.js").DocumentLevel;
    }>;
    recordDecision(versionId: string, dto: DocumentDecisionDto): Promise<{
        id: string;
        versionId: string;
        userId: string;
        decision: import("../../generated/prisma/enums.js").ApprovalDecisionType;
        comment: string | null;
        decidedAt: Date;
    }>;
}
