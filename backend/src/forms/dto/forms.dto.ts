export type FormFieldTypeValue = 'TEXT' | 'TEXTAREA' | 'NUMBER' | 'DATE' | 'SELECT' | 'CHECKBOX' | 'FILE';

export class CreateFormTemplateDto {
  title: string;
  controlNumber: string;
  description?: string;
  documentId?: string;
  fields: Array<{
    fieldKey: string;
    label: string;
    type: FormFieldTypeValue;
    required?: boolean;
    options?: string[];
  }>;
}

export class CreateQualityRecordDto {
  templateId: string;
  documentId?: string;
  versionId?: string;
  values: Record<string, unknown>;
}
