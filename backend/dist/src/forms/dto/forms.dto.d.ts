export type FormFieldTypeValue = 'TEXT' | 'TEXTAREA' | 'NUMBER' | 'DATE' | 'SELECT' | 'CHECKBOX' | 'FILE';
export declare class CreateFormTemplateDto {
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
export declare class CreateQualityRecordDto {
    templateId: string;
    documentId?: string;
    versionId?: string;
    values: Record<string, unknown>;
}
