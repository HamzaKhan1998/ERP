import * as runtime from "@prisma/client/runtime/client";
export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export const PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export const PrismaClientValidationError = runtime.PrismaClientValidationError;
export const sql = runtime.sqltag;
export const empty = runtime.empty;
export const join = runtime.join;
export const raw = runtime.raw;
export const Sql = runtime.Sql;
export const Decimal = runtime.Decimal;
export const getExtensionContext = runtime.Extensions.getExtensionContext;
export const prismaVersion = {
    client: "7.9.1",
    engine: "e922089b7d7502aff4249d5da3420f6fa55fc6ad"
};
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    Tenant: 'Tenant',
    User: 'User',
    Document: 'Document',
    DocumentVersion: 'DocumentVersion',
    WorkflowAssignment: 'WorkflowAssignment',
    ApprovalDecision: 'ApprovalDecision',
    ComplianceReference: 'ComplianceReference',
    RevisionHistory: 'RevisionHistory',
    DocumentRelation: 'DocumentRelation'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const TenantScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    subdomain: 'subdomain',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const UserScalarFieldEnum = {
    id: 'id',
    tenantId: 'tenantId',
    email: 'email',
    name: 'name',
    designation: 'designation',
    isTenantAdmin: 'isTenantAdmin',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const DocumentScalarFieldEnum = {
    id: 'id',
    tenantId: 'tenantId',
    title: 'title',
    controlNumber: 'controlNumber',
    level: 'level',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const DocumentVersionScalarFieldEnum = {
    id: 'id',
    documentId: 'documentId',
    versionLabel: 'versionLabel',
    revisionNumber: 'revisionNumber',
    effectiveDate: 'effectiveDate',
    nextReviewDate: 'nextReviewDate',
    purpose: 'purpose',
    scope: 'scope',
    responsibilities: 'responsibilities',
    procedureContent: 'procedureContent',
    recordsDescription: 'recordsDescription',
    relatedDocuments: 'relatedDocuments',
    complianceNote: 'complianceNote',
    createdAt: 'createdAt'
};
export const WorkflowAssignmentScalarFieldEnum = {
    id: 'id',
    versionId: 'versionId',
    userId: 'userId',
    type: 'type',
    assignedAt: 'assignedAt',
    completedAt: 'completedAt'
};
export const ApprovalDecisionScalarFieldEnum = {
    id: 'id',
    versionId: 'versionId',
    userId: 'userId',
    decision: 'decision',
    comment: 'comment',
    decidedAt: 'decidedAt'
};
export const ComplianceReferenceScalarFieldEnum = {
    id: 'id',
    versionId: 'versionId',
    standard: 'standard',
    edition: 'edition',
    clause: 'clause',
    description: 'description'
};
export const RevisionHistoryScalarFieldEnum = {
    id: 'id',
    versionId: 'versionId',
    pageNumber: 'pageNumber',
    revisionNumber: 'revisionNumber',
    changeDescription: 'changeDescription',
    createdAt: 'createdAt'
};
export const DocumentRelationScalarFieldEnum = {
    id: 'id',
    fromDocumentId: 'fromDocumentId',
    toDocumentId: 'toDocumentId',
    relationLabel: 'relationLabel'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map