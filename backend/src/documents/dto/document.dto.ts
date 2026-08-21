export type DocumentLevelValue = 'LEVEL_1' | 'LEVEL_2' | 'LEVEL_3' | 'LEVEL_4';

export class CreateProcedureDto {
  tenantSlug: string;
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
  approverEmail: string;
  decision: 'APPROVED' | 'RETURNED_FOR_CORRECTION';
  comment?: string;
}
