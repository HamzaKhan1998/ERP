import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Tenant: "Tenant";
    readonly User: "User";
    readonly Document: "Document";
    readonly DocumentVersion: "DocumentVersion";
    readonly WorkflowAssignment: "WorkflowAssignment";
    readonly ApprovalDecision: "ApprovalDecision";
    readonly ComplianceReference: "ComplianceReference";
    readonly RevisionHistory: "RevisionHistory";
    readonly DocumentRelation: "DocumentRelation";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const TenantScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly subdomain: "subdomain";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly tenantId: "tenantId";
    readonly email: "email";
    readonly name: "name";
    readonly designation: "designation";
    readonly isTenantAdmin: "isTenantAdmin";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const DocumentScalarFieldEnum: {
    readonly id: "id";
    readonly tenantId: "tenantId";
    readonly title: "title";
    readonly controlNumber: "controlNumber";
    readonly level: "level";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum];
export declare const DocumentVersionScalarFieldEnum: {
    readonly id: "id";
    readonly documentId: "documentId";
    readonly versionLabel: "versionLabel";
    readonly revisionNumber: "revisionNumber";
    readonly effectiveDate: "effectiveDate";
    readonly nextReviewDate: "nextReviewDate";
    readonly purpose: "purpose";
    readonly scope: "scope";
    readonly responsibilities: "responsibilities";
    readonly procedureContent: "procedureContent";
    readonly recordsDescription: "recordsDescription";
    readonly relatedDocuments: "relatedDocuments";
    readonly complianceNote: "complianceNote";
    readonly createdAt: "createdAt";
};
export type DocumentVersionScalarFieldEnum = (typeof DocumentVersionScalarFieldEnum)[keyof typeof DocumentVersionScalarFieldEnum];
export declare const WorkflowAssignmentScalarFieldEnum: {
    readonly id: "id";
    readonly versionId: "versionId";
    readonly userId: "userId";
    readonly type: "type";
    readonly assignedAt: "assignedAt";
    readonly completedAt: "completedAt";
};
export type WorkflowAssignmentScalarFieldEnum = (typeof WorkflowAssignmentScalarFieldEnum)[keyof typeof WorkflowAssignmentScalarFieldEnum];
export declare const ApprovalDecisionScalarFieldEnum: {
    readonly id: "id";
    readonly versionId: "versionId";
    readonly userId: "userId";
    readonly decision: "decision";
    readonly comment: "comment";
    readonly decidedAt: "decidedAt";
};
export type ApprovalDecisionScalarFieldEnum = (typeof ApprovalDecisionScalarFieldEnum)[keyof typeof ApprovalDecisionScalarFieldEnum];
export declare const ComplianceReferenceScalarFieldEnum: {
    readonly id: "id";
    readonly versionId: "versionId";
    readonly standard: "standard";
    readonly edition: "edition";
    readonly clause: "clause";
    readonly description: "description";
};
export type ComplianceReferenceScalarFieldEnum = (typeof ComplianceReferenceScalarFieldEnum)[keyof typeof ComplianceReferenceScalarFieldEnum];
export declare const RevisionHistoryScalarFieldEnum: {
    readonly id: "id";
    readonly versionId: "versionId";
    readonly pageNumber: "pageNumber";
    readonly revisionNumber: "revisionNumber";
    readonly changeDescription: "changeDescription";
    readonly createdAt: "createdAt";
};
export type RevisionHistoryScalarFieldEnum = (typeof RevisionHistoryScalarFieldEnum)[keyof typeof RevisionHistoryScalarFieldEnum];
export declare const DocumentRelationScalarFieldEnum: {
    readonly id: "id";
    readonly fromDocumentId: "fromDocumentId";
    readonly toDocumentId: "toDocumentId";
    readonly relationLabel: "relationLabel";
};
export type DocumentRelationScalarFieldEnum = (typeof DocumentRelationScalarFieldEnum)[keyof typeof DocumentRelationScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
