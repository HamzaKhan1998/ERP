export class CreateProcedureDto {
    tenantSlug;
    title;
    controlNumber;
    versionLabel;
    revisionNumber;
    effectiveDate;
    reviewIntervalYears;
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
    complianceStandard;
    complianceEdition;
    complianceClause;
    revisionPageNumber;
    revisionDescription;
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