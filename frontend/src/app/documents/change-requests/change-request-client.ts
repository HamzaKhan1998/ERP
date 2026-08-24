const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export interface ChangeRequest {
  id: string;
  status: string;
  existingRequirement: string;
  proposedChange: string;
  reason: string;
  document: { id: string; title: string; controlNumber: string; status: string };
  requestedBy: { name: string; email: string };
  reviewedBy?: { name: string; email: string } | null;
  managementComment?: string | null;
  createdAt: string;
}

export async function listChangeRequests(): Promise<ChangeRequest[]> {
  return request('/documents/change-requests');
}

export async function createChangeRequest(data: {
  documentId: string;
  existingRequirement: string;
  proposedChange: string;
  reason: string;
}) {
  return request('/documents/change-requests', { method: 'POST', body: JSON.stringify(data) });
}

export async function reviewChangeRequest(
  id: string,
  decision: 'ACCEPTED_FOR_CHANGE' | 'REJECTED',
  comment: string,
) {
  return request(`/documents/change-requests/${id}/review`, {
    method: 'POST',
    body: JSON.stringify({ decision, comment }),
  });
}

export async function incorporateChangeRequest(id: string, versionLabel?: string) {
  return request(`/documents/change-requests/${id}/incorporate`, {
    method: 'POST',
    body: JSON.stringify({ versionLabel }),
  });
}

async function request(path: string, options: RequestInit = {}) {
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
  if (!response.ok) throw new Error(body.message || 'Change request operation failed');
  return body;
}
