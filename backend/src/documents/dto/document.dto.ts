export type DocumentLevelValue = 'LEVEL_1' | 'LEVEL_2' | 'LEVEL_3' | 'LEVEL_4';

export class CreateProcedureDto {
  tenantSlug?: string;
  title: string;
  controlNumber: string;
  versionLabel: string;
  revisionNumber: number;
  preparedByEmail: string;
  reviewedByEmail: string;
  approvedByEmail: string;
  purpose?: string;
  scope?: string;
  responsibilities?: string;
  procedureContent?: string;
  recordsDescription?: string;
  relatedDocuments?: string;
  complianceNote?: string;
}

export class DocumentDecisionDto {
  decision: 'APPROVED' | 'RETURNED_FOR_CORRECTION';
  comment?: string;
}

export class CreateChangeRequestDto {
  documentId: string;
  existingRequirement: string;
  proposedChange: string;
  reason: string;
}

export class ReviewChangeRequestDto {
  decision: 'ACCEPTED_FOR_CHANGE' | 'REJECTED';
  comment?: string;
}

export class IncorporateChangeRequestDto {
  versionLabel?: string;
}

export class PeriodicReviewDto {
  versionId: string;
  outcome: 'REMAINS_VALID' | 'REVISION_REQUIRED' | 'RETIRED' | 'RETURNED_FOR_CLARIFICATION';
  comments?: string;
  referencesChecked?: string;
  nextReviewDate?: string;
}
