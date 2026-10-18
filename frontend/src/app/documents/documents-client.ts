const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export interface DocumentListItem {
  id: string;
  title: string;
  controlNumber: string;
  level: string;
  status: string;
  updatedAt: string;
  tenant: { name: string };
  versions: Array<{
    versionLabel: string;
    revisionNumber: number;
    nextReviewDate: string | null;
    assignments: Array<{ type: string; user: { name: string; designation: string | null } }>;
    complianceRefs: Array<{ standard: string; clause: string }>;
    files: Array<{ id: string; originalName: string; mimeType: string }>;
  }>;
  _count: { versions: number; files: number; changeRequests: number; qualityRecords: number };
}

export async function listDocuments(): Promise<DocumentListItem[]> {
  const token = window.localStorage.getItem('erp_access_token');
  const response = await fetch(`${API_BASE_URL}/documents`, { headers: token ? { Authorization: `Bearer ${token}` } : {} });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.message || 'Documents could not be loaded');
  return body;
}

export async function getDocument(id: string) {
  const token = window.localStorage.getItem('erp_access_token');
  const response = await fetch(`${API_BASE_URL}/documents/${id}`, { headers: token ? { Authorization: `Bearer ${token}` } : {} });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.message || 'Document could not be loaded');
  return body;
}

export async function downloadFile(fileId: string) {
  const token = window.localStorage.getItem('erp_access_token');
  const response = await fetch(`${API_BASE_URL}/files/${fileId}/download`, { headers: token ? { Authorization: `Bearer ${token}` } : {} });
  if (!response.ok) throw new Error('File could not be downloaded');
  const blob = await response.blob();
  const disposition = response.headers.get('content-disposition');
  const filename = disposition?.match(/filename="([^"]+)"/)?.[1] || 'download';
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
