const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export interface ApprovalAssignment {
  id: string;
  version: {
    id: string;
    versionLabel: string;
    revisionNumber: number;
    purpose: string | null;
    procedureContent: string | null;
    document: {
      id: string;
      title: string;
      controlNumber: string;
      status: string;
      tenant: { name: string; slug: string };
    };
    assignments: Array<{
      type: string;
      user: { name: string; email: string; designation: string | null };
    }>;
    complianceRefs: Array<{ standard: string; edition: string | null; clause: string }>;
  };
}

export async function fetchApprovalQueue(): Promise<ApprovalAssignment[]> {
  return request('/documents/approvals');
}

export async function recordApprovalDecision(
  versionId: string,
  decision: 'APPROVED' | 'RETURNED_FOR_CORRECTION',
  comment?: string,
) {
  return request(`/documents/versions/${versionId}/decision`, {
    method: 'POST',
    body: JSON.stringify({ decision, comment }),
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
  if (!response.ok) {
    throw new Error(body.message || 'The approval request could not be completed');
  }

  return body;
}
