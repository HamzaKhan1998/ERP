import type { AuthenticatedRequest } from '../auth/guards/jwt-auth.guard.js';
import { CreateChangeRequestDto, CreateProcedureDto, DocumentDecisionDto, IncorporateChangeRequestDto, PeriodicReviewDto, ReviewChangeRequestDto } from './dto/document.dto.js';
import { DocumentsService } from './documents.service.js';
export declare class DocumentsController {
    private readonly documentsService;
    constructor(documentsService: DocumentsService);
    createProcedure(request: AuthenticatedRequest, dto: CreateProcedureDto): Promise<{
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
                type: import("../../generated/prisma/enums.js").WorkflowAssignmentType;
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
        status: import("../../generated/prisma/enums.js").DocumentStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        title: string;
        controlNumber: string;
        level: import("../../generated/prisma/enums.js").DocumentLevel;
    }>;
    createChangeRequest(request: AuthenticatedRequest, dto: CreateChangeRequestDto): Promise<{
        document: {
            id: string;
            status: import("../../generated/prisma/enums.js").DocumentStatus;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string;
            title: string;
            controlNumber: string;
            level: import("../../generated/prisma/enums.js").DocumentLevel;
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
    listChangeRequests(request: AuthenticatedRequest): Promise<({
        document: {
            id: string;
            status: import("../../generated/prisma/enums.js").DocumentStatus;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string;
            title: string;
            controlNumber: string;
            level: import("../../generated/prisma/enums.js").DocumentLevel;
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
    getChangeRequest(request: AuthenticatedRequest, changeRequestId: string): Promise<{
        document: {
            id: string;
            status: import("../../generated/prisma/enums.js").DocumentStatus;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string;
            title: string;
            controlNumber: string;
            level: import("../../generated/prisma/enums.js").DocumentLevel;
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
    reviewChangeRequest(request: AuthenticatedRequest, changeRequestId: string, dto: ReviewChangeRequestDto): Promise<{
        document: {
            id: string;
            status: import("../../generated/prisma/enums.js").DocumentStatus;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string;
            title: string;
            controlNumber: string;
            level: import("../../generated/prisma/enums.js").DocumentLevel;
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
    incorporateChangeRequest(request: AuthenticatedRequest, changeRequestId: string, dto: IncorporateChangeRequestDto): Promise<{
        document: {
            id: string;
            status: import("../../generated/prisma/enums.js").DocumentStatus;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string;
            title: string;
            controlNumber: string;
            level: import("../../generated/prisma/enums.js").DocumentLevel;
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
    getApprovalQueue(request: AuthenticatedRequest): Promise<({
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
                type: import("../../generated/prisma/enums.js").WorkflowAssignmentType;
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
        type: import("../../generated/prisma/enums.js").WorkflowAssignmentType;
        assignedAt: Date;
        completedAt: Date | null;
    })[]>;
    listDueReviews(request: AuthenticatedRequest): Promise<({
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
            status: import("../../generated/prisma/enums.js").DocumentStatus;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string;
            title: string;
            controlNumber: string;
            level: import("../../generated/prisma/enums.js").DocumentLevel;
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
    recordPeriodicReview(request: AuthenticatedRequest, dto: PeriodicReviewDto): Promise<{
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
    getDocument(request: AuthenticatedRequest, documentId: string): Promise<{
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
                decision: import("../../generated/prisma/enums.js").ApprovalDecisionType;
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
        status: import("../../generated/prisma/enums.js").DocumentStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        title: string;
        controlNumber: string;
        level: import("../../generated/prisma/enums.js").DocumentLevel;
    }>;
    submitForReview(request: AuthenticatedRequest, documentId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums.js").DocumentStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        title: string;
        controlNumber: string;
        level: import("../../generated/prisma/enums.js").DocumentLevel;
    }>;
    recordDecision(request: AuthenticatedRequest, versionId: string, dto: DocumentDecisionDto): Promise<{
        id: string;
        versionId: string;
        userId: string;
        decision: import("../../generated/prisma/enums.js").ApprovalDecisionType;
        comment: string | null;
        decidedAt: Date;
    }>;
    publishVersion(request: AuthenticatedRequest, versionId: string): Promise<{
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
        status: import("../../generated/prisma/enums.js").DocumentStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        title: string;
        controlNumber: string;
        level: import("../../generated/prisma/enums.js").DocumentLevel;
    }>;
}
