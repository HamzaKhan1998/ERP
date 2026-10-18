const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export interface AuditLogItem {
  id: string;
  action: string;
  entityType: string;
  entityId: string | null;
  details: Record<string, unknown> | null;
  createdAt: string;
}

export async function listAuditLogs(): Promise<AuditLogItem[]> {
  const token = window.localStorage.getItem('erp_access_token');
  const response = await fetch(`${API_BASE_URL}/audit-logs`, { headers: token ? { Authorization: `Bearer ${token}` } : {} });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.message || 'Audit log could not be loaded');
  return body;
}
