const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export interface DueReview {
  id: string;
  versionLabel: string;
  revisionNumber: number;
  nextReviewDate: string;
  document: {
    id: string;
    title: string;
    controlNumber: string;
    level: string;
    tenant: { name: string };
  };
}

export async function fetchDueReviews(): Promise<DueReview[]> {
  return request('/documents/periodic-reviews/due');
}

export async function recordPeriodicReview(data: {
  versionId: string;
  outcome: 'REMAINS_VALID' | 'REVISION_REQUIRED' | 'RETIRED' | 'RETURNED_FOR_CLARIFICATION';
  comments?: string;
  referencesChecked?: string;
  nextReviewDate?: string;
}) {
  return request('/documents/periodic-reviews', {
    method: 'POST',
    body: JSON.stringify(data),
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
  if (!response.ok) throw new Error(body.message || 'Periodic review operation failed');
  return body;
}
