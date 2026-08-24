import { ApprovalDecisionType, DocumentLevel, DocumentStatus, WorkflowAssignmentType } from '../../generated/prisma/enums.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateChangeRequestDto, CreateProcedureDto, DocumentDecisionDto, IncorporateChangeRequestDto, PeriodicReviewDto, ReviewChangeRequestDto } from './dto/document.dto.js';
import type { AuthenticatedUser } from '../auth/guards/jwt-auth.guard.js';
export declare class DocumentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createProcedure(dto: CreateProcedureDto, actor: AuthenticatedUser): Promise<{
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
                    passwordHash: string | null;
                    designation: string | null;
                    systemRole: string;
                    isPlatformAdmin: boolean;
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
            status: import("../../generated/prisma/enums.js").DocumentVersionStatus;
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
    getDocument(documentId: string, actor: AuthenticatedUser): Promise<{
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
            assignments: ({
                user: {
                    id: string;
                    name: string;
                    status: import("../../generated/prisma/enums.js").UserStatus;
                    createdAt: Date;
                    updatedAt: Date;
                    tenantId: string | null;
                    email: string;
                    passwordHash: string | null;
                    designation: string | null;
                    systemRole: string;
                    isPlatformAdmin: boolean;
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
                    passwordHash: string | null;
                    designation: string | null;
                    systemRole: string;
                    isPlatformAdmin: boolean;
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
            revisionHistory: {
                id: string;
                createdAt: Date;
                revisionNumber: string;
                versionId: string;
                pageNumber: string | null;
                changeDescription: string;
            }[];
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
            status: import("../../generated/prisma/enums.js").DocumentVersionStatus;
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
    submitForReview(documentId: string, actor: AuthenticatedUser): Promise<{
        id: string;
        status: DocumentStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        title: string;
        controlNumber: string;
        level: DocumentLevel;
    }>;
    getApprovalQueue(actor: AuthenticatedUser): Promise<({
        version: {
            assignments: ({
                user: {
                    id: string;
                    name: string;
                    status: import("../../generated/prisma/enums.js").UserStatus;
                    createdAt: Date;
                    updatedAt: Date;
                    tenantId: string | null;
                    email: string;
                    passwordHash: string | null;
                    designation: string | null;
                    systemRole: string;
                    isPlatformAdmin: boolean;
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
            status: import("../../generated/prisma/enums.js").DocumentVersionStatus;
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
    recordDecision(versionId: string, dto: DocumentDecisionDto, actor: AuthenticatedUser): Promise<{
        id: string;
        versionId: string;
        userId: string;
        decision: ApprovalDecisionType;
        comment: string | null;
        decidedAt: Date;
    }>;
    publishVersion(versionId: string, actor: AuthenticatedUser): Promise<{
        versions: {
            id: string;
            status: import("../../generated/prisma/enums.js").DocumentVersionStatus;
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
        }[];
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
    createChangeRequest(dto: CreateChangeRequestDto, actor: AuthenticatedUser): Promise<{
        document: {
            id: string;
            status: DocumentStatus;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string;
            title: string;
            controlNumber: string;
            level: DocumentLevel;
        };
        sourceVersion: {
            id: string;
            status: import("../../generated/prisma/enums.js").DocumentVersionStatus;
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
        requestedBy: {
            id: string;
            name: string;
            status: import("../../generated/prisma/enums.js").UserStatus;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string | null;
            email: string;
            passwordHash: string | null;
            designation: string | null;
            systemRole: string;
            isPlatformAdmin: boolean;
            isTenantAdmin: boolean;
        };
    } & {
        id: string;
        status: import("../../generated/prisma/enums.js").ChangeRequestStatus;
        createdAt: Date;
        tenantId: string;
        documentId: string;
        sourceVersionId: string;
        incorporatedVersionId: string | null;
        requestedById: string;
        reviewedById: string | null;
        existingRequirement: string;
        proposedChange: string;
        reason: string;
        managementComment: string | null;
        reviewedAt: Date | null;
    }>;
    listChangeRequests(actor: AuthenticatedUser): Promise<({
        document: {
            id: string;
            status: DocumentStatus;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string;
            title: string;
            controlNumber: string;
            level: DocumentLevel;
        };
        reviewedBy: {
            id: string;
            name: string;
            status: import("../../generated/prisma/enums.js").UserStatus;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string | null;
            email: string;
            passwordHash: string | null;
            designation: string | null;
            systemRole: string;
            isPlatformAdmin: boolean;
            isTenantAdmin: boolean;
        } | null;
        sourceVersion: {
            id: string;
            status: import("../../generated/prisma/enums.js").DocumentVersionStatus;
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
        requestedBy: {
            id: string;
            name: string;
            status: import("../../generated/prisma/enums.js").UserStatus;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string | null;
            email: string;
            passwordHash: string | null;
            designation: string | null;
            systemRole: string;
            isPlatformAdmin: boolean;
            isTenantAdmin: boolean;
        };
    } & {
        id: string;
        status: import("../../generated/prisma/enums.js").ChangeRequestStatus;
        createdAt: Date;
        tenantId: string;
        documentId: string;
        sourceVersionId: string;
        incorporatedVersionId: string | null;
        requestedById: string;
        reviewedById: string | null;
        existingRequirement: string;
        proposedChange: string;
        reason: string;
        managementComment: string | null;
        reviewedAt: Date | null;
    })[]>;
    getChangeRequest(changeRequestId: string, actor: AuthenticatedUser): Promise<{
        document: {
            id: string;
            status: DocumentStatus;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string;
            title: string;
            controlNumber: string;
            level: DocumentLevel;
        };
        reviewedBy: {
            id: string;
            name: string;
            status: import("../../generated/prisma/enums.js").UserStatus;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string | null;
            email: string;
            passwordHash: string | null;
            designation: string | null;
            systemRole: string;
            isPlatformAdmin: boolean;
            isTenantAdmin: boolean;
        } | null;
        sourceVersion: {
            id: string;
            status: import("../../generated/prisma/enums.js").DocumentVersionStatus;
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
        requestedBy: {
            id: string;
            name: string;
            status: import("../../generated/prisma/enums.js").UserStatus;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string | null;
            email: string;
            passwordHash: string | null;
            designation: string | null;
            systemRole: string;
            isPlatformAdmin: boolean;
            isTenantAdmin: boolean;
        };
    } & {
        id: string;
        status: import("../../generated/prisma/enums.js").ChangeRequestStatus;
        createdAt: Date;
        tenantId: string;
        documentId: string;
        sourceVersionId: string;
        incorporatedVersionId: string | null;
        requestedById: string;
        reviewedById: string | null;
        existingRequirement: string;
        proposedChange: string;
        reason: string;
        managementComment: string | null;
        reviewedAt: Date | null;
    }>;
    reviewChangeRequest(changeRequestId: string, dto: ReviewChangeRequestDto, actor: AuthenticatedUser): Promise<{
        document: {
            id: string;
            status: DocumentStatus;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string;
            title: string;
            controlNumber: string;
            level: DocumentLevel;
        };
        reviewedBy: {
            id: string;
            name: string;
            status: import("../../generated/prisma/enums.js").UserStatus;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string | null;
            email: string;
            passwordHash: string | null;
            designation: string | null;
            systemRole: string;
            isPlatformAdmin: boolean;
            isTenantAdmin: boolean;
        } | null;
        requestedBy: {
            id: string;
            name: string;
            status: import("../../generated/prisma/enums.js").UserStatus;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string | null;
            email: string;
            passwordHash: string | null;
            designation: string | null;
            systemRole: string;
            isPlatformAdmin: boolean;
            isTenantAdmin: boolean;
        };
    } & {
        id: string;
        status: import("../../generated/prisma/enums.js").ChangeRequestStatus;
        createdAt: Date;
        tenantId: string;
        documentId: string;
        sourceVersionId: string;
        incorporatedVersionId: string | null;
        requestedById: string;
        reviewedById: string | null;
        existingRequirement: string;
        proposedChange: string;
        reason: string;
        managementComment: string | null;
        reviewedAt: Date | null;
    }>;
    incorporateChangeRequest(changeRequestId: string, dto: IncorporateChangeRequestDto, actor: AuthenticatedUser): Promise<{
        document: {
            id: string;
            status: DocumentStatus;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string;
            title: string;
            controlNumber: string;
            level: DocumentLevel;
        };
        sourceVersion: {
            id: string;
            status: import("../../generated/prisma/enums.js").DocumentVersionStatus;
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
        incorporatedVersion: {
            id: string;
            status: import("../../generated/prisma/enums.js").DocumentVersionStatus;
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
        } | null;
    } & {
        id: string;
        status: import("../../generated/prisma/enums.js").ChangeRequestStatus;
        createdAt: Date;
        tenantId: string;
        documentId: string;
        sourceVersionId: string;
        incorporatedVersionId: string | null;
        requestedById: string;
        reviewedById: string | null;
        existingRequirement: string;
        proposedChange: string;
        reason: string;
        managementComment: string | null;
        reviewedAt: Date | null;
    }>;
    listDueReviews(actor: AuthenticatedUser): Promise<({
        periodicReviews: {
            id: string;
            tenantId: string;
            nextReviewDate: Date | null;
            versionId: string;
            reviewedById: string;
            reviewedAt: Date;
            outcome: import("../../generated/prisma/enums.js").PeriodicReviewOutcome;
            comments: string | null;
            referencesChecked: string | null;
        }[];
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
    } & {
        id: string;
        status: import("../../generated/prisma/enums.js").DocumentVersionStatus;
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
    })[]>;
    recordPeriodicReview(dto: PeriodicReviewDto, actor: AuthenticatedUser): Promise<{
        id: string;
        tenantId: string;
        nextReviewDate: Date | null;
        versionId: string;
        reviewedById: string;
        reviewedAt: Date;
        outcome: import("../../generated/prisma/enums.js").PeriodicReviewOutcome;
        comments: string | null;
        referencesChecked: string | null;
    } | {
        review: {
            id: string;
            tenantId: string;
            nextReviewDate: Date | null;
            versionId: string;
            reviewedById: string;
            reviewedAt: Date;
            outcome: import("../../generated/prisma/enums.js").PeriodicReviewOutcome;
            comments: string | null;
            referencesChecked: string | null;
        };
        request: {
            id: string;
            status: import("../../generated/prisma/enums.js").ChangeRequestStatus;
            createdAt: Date;
            tenantId: string;
            documentId: string;
            sourceVersionId: string;
            incorporatedVersionId: string | null;
            requestedById: string;
            reviewedById: string | null;
            existingRequirement: string;
            proposedChange: string;
            reason: string;
            managementComment: string | null;
            reviewedAt: Date | null;
        };
    }>;
    private addYears;
    private findUser;
    private assertTenantAccess;
}
