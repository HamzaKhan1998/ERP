const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export interface CreateProcedureRequest {
  title: string;
  controlNumber: string;
  versionLabel: string;
  revisionNumber: number;
  effectiveDate?: string;
  reviewIntervalYears?: number;
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
  complianceStandard?: string;
  complianceEdition?: string;
  complianceClause?: string;
  revisionPageNumber?: string;
  revisionDescription?: string;
}

interface CreatedProcedure {
  id: string;
  versions: Array<{ id: string }>;
}

export async function createProcedure(data: CreateProcedureRequest): Promise<CreatedProcedure> {
  return request('/documents/procedures', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function submitProcedure(documentId: string) {
  return request(`/documents/${documentId}/submit`, { method: 'POST' });
}

export async function uploadProcedureFile(documentId: string, versionId: string, file: File) {
  const token = window.localStorage.getItem('erp_access_token');
  const form = new FormData();
  form.append('file', file);
  const response = await fetch(`${API_BASE_URL}/files/documents/${documentId}?versionId=${versionId}`, {
    method: 'POST',
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    body: form,
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.message || 'File upload failed');
  return body;
}

async function request(path: string, options: RequestInit) {
  const token = window.localStorage.getItem('erp_access_token');
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(body.message || 'The procedure could not be saved');
  }

  return body;
}
