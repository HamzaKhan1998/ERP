const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export interface FormField {
  id: string;
  fieldKey: string;
  label: string;
  type: 'TEXT' | 'TEXTAREA' | 'NUMBER' | 'DATE' | 'SELECT' | 'CHECKBOX' | 'FILE';
  required: boolean;
  optionsJson: unknown;
}

export interface FormTemplate {
  id: string;
  title: string;
  controlNumber: string;
  description: string | null;
  fields: FormField[];
}

export interface QualityRecord {
  id: string;
  status: string;
  values: Record<string, unknown>;
  createdAt: string;
  template: { title: string; controlNumber: string };
  completedBy: { name: string; email: string };
}

export async function listTemplates(): Promise<FormTemplate[]> {
  return request('/forms/templates');
}

export async function getTemplate(id: string): Promise<FormTemplate> {
  return request(`/forms/templates/${id}`);
}

export async function createTemplate(data: { title: string; controlNumber: string; description?: string; documentId?: string; fields: Array<{ fieldKey: string; label: string; type: FormField['type']; required: boolean; options?: string[] }> }) {
  return request('/forms/templates', { method: 'POST', body: JSON.stringify(data) });
}

export async function listRecords(): Promise<QualityRecord[]> {
  return request('/forms/records');
}

export async function createRecord(data: { templateId: string; values: Record<string, unknown> }) {
  return request('/forms/records', { method: 'POST', body: JSON.stringify(data) });
}

export async function uploadRecordFile(recordId: string, file: File) {
  const token = window.localStorage.getItem('erp_access_token');
  const form = new FormData();
  form.append('file', file);
  const response = await fetch(`${API_BASE_URL}/files/records/${recordId}`, {
    method: 'POST',
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    body: form,
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.message || 'Record file upload failed');
  return body;
}

async function request(path: string, options: RequestInit = {}) {
  const token = window.localStorage.getItem('erp_access_token');
  const response = await fetch(`${API_BASE_URL}${path}`, { ...options, headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}), ...options.headers } });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.message || 'Form operation failed');
  return body;
}
