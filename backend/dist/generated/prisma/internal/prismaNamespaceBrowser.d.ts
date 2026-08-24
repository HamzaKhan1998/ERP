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
    readonly ChangeRequest: "ChangeRequest";
    readonly PeriodicReview: "PeriodicReview";
    readonly FileAsset: "FileAsset";
    readonly FormTemplate: "FormTemplate";
    readonly FormField: "FormField";
    readonly QualityRecord: "QualityRecord";
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
    readonly passwordHash: "passwordHash";
    readonly designation: "designation";
    readonly systemRole: "systemRole";
    readonly isPlatformAdmin: "isPlatformAdmin";
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
    readonly status: "status";
    readonly effectiveDate: "effectiveDate";
    readonly nextReviewDate: "nextReviewDate";
    readonly reviewIntervalYears: "reviewIntervalYears";
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
export declare const ChangeRequestScalarFieldEnum: {
    readonly id: "id";
    readonly tenantId: "tenantId";
    readonly documentId: "documentId";
    readonly sourceVersionId: "sourceVersionId";
    readonly incorporatedVersionId: "incorporatedVersionId";
    readonly requestedById: "requestedById";
    readonly reviewedById: "reviewedById";
    readonly status: "status";
    readonly existingRequirement: "existingRequirement";
    readonly proposedChange: "proposedChange";
    readonly reason: "reason";
    readonly managementComment: "managementComment";
    readonly createdAt: "createdAt";
    readonly reviewedAt: "reviewedAt";
};
export type ChangeRequestScalarFieldEnum = (typeof ChangeRequestScalarFieldEnum)[keyof typeof ChangeRequestScalarFieldEnum];
export declare const PeriodicReviewScalarFieldEnum: {
    readonly id: "id";
    readonly tenantId: "tenantId";
    readonly versionId: "versionId";
    readonly reviewedById: "reviewedById";
    readonly outcome: "outcome";
    readonly comments: "comments";
    readonly referencesChecked: "referencesChecked";
    readonly reviewedAt: "reviewedAt";
    readonly nextReviewDate: "nextReviewDate";
};
export type PeriodicReviewScalarFieldEnum = (typeof PeriodicReviewScalarFieldEnum)[keyof typeof PeriodicReviewScalarFieldEnum];
export declare const FileAssetScalarFieldEnum: {
    readonly id: "id";
    readonly tenantId: "tenantId";
    readonly documentId: "documentId";
    readonly versionId: "versionId";
    readonly qualityRecordId: "qualityRecordId";
    readonly uploadedById: "uploadedById";
    readonly originalName: "originalName";
    readonly storageKey: "storageKey";
    readonly mimeType: "mimeType";
    readonly sizeBytes: "sizeBytes";
    readonly checksum: "checksum";
    readonly createdAt: "createdAt";
};
export type FileAssetScalarFieldEnum = (typeof FileAssetScalarFieldEnum)[keyof typeof FileAssetScalarFieldEnum];
export declare const FormTemplateScalarFieldEnum: {
    readonly id: "id";
    readonly tenantId: "tenantId";
    readonly documentId: "documentId";
    readonly title: "title";
    readonly controlNumber: "controlNumber";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FormTemplateScalarFieldEnum = (typeof FormTemplateScalarFieldEnum)[keyof typeof FormTemplateScalarFieldEnum];
export declare const FormFieldScalarFieldEnum: {
    readonly id: "id";
    readonly templateId: "templateId";
    readonly fieldKey: "fieldKey";
    readonly label: "label";
    readonly type: "type";
    readonly required: "required";
    readonly optionsJson: "optionsJson";
    readonly sortOrder: "sortOrder";
};
export type FormFieldScalarFieldEnum = (typeof FormFieldScalarFieldEnum)[keyof typeof FormFieldScalarFieldEnum];
export declare const QualityRecordScalarFieldEnum: {
    readonly id: "id";
    readonly tenantId: "tenantId";
    readonly templateId: "templateId";
    readonly documentId: "documentId";
    readonly versionId: "versionId";
    readonly completedById: "completedById";
    readonly status: "status";
    readonly values: "values";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type QualityRecordScalarFieldEnum = (typeof QualityRecordScalarFieldEnum)[keyof typeof QualityRecordScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
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
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
