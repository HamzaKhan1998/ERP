const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export interface PlatformTenant {
  id: string;
  name: string;
  slug: string;
  subdomain: string;
  status: 'ONBOARDING' | 'ACTIVE' | 'SUSPENDED';
  createdAt: string;
  users: Array<{ name: string; email: string; status: string }>;
  _count?: { users: number; documents?: number };
}

export async function listTenants(): Promise<PlatformTenant[]> { return request('/platform-admin/tenants'); }
export async function createTenant(data: { name: string; slug: string; subdomain: string }) { return request('/platform-admin/tenants', { method: 'POST', body: JSON.stringify(data) }); }
export async function assignTenantAdmin(id: string, data: { email: string; name?: string }) { return request(`/platform-admin/tenants/${id}/admin`, { method: 'POST', body: JSON.stringify(data) }); }
export async function updateTenantStatus(id: string, status: PlatformTenant['status']) { return request(`/platform-admin/tenants/${id}/status`, { method: 'PATCH', body: JSON.stringify({ status }) }); }

async function request(path: string, options: RequestInit = {}) {
  const token = window.localStorage.getItem('erp_access_token');
  const response = await fetch(`${API_BASE_URL}${path}`, { ...options, headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}), ...options.headers } });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.message || 'Platform operation failed');
  return body;
}
