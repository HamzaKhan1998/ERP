export class CreateProcedureDto {
    tenantSlug;
    title;
    controlNumber;
    versionLabel;
    revisionNumber;
    preparedByEmail;
    reviewedByEmail;
    approvedByEmail;
    purpose;
    scope;
    responsibilities;
    procedureContent;
    recordsDescription;
    relatedDocuments;
    complianceNote;
}
export class DocumentDecisionDto {
    decision;
    comment;
}
export class CreateChangeRequestDto {
    documentId;
    existingRequirement;
    proposedChange;
    reason;
}
export class ReviewChangeRequestDto {
    decision;
    comment;
}
export class IncorporateChangeRequestDto {
    versionLabel;
}
export class PeriodicReviewDto {
    versionId;
    outcome;
    comments;
    referencesChecked;
    nextReviewDate;
}
//# sourceMappingURL=document.dto.js.map