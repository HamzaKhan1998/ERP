const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export interface NotificationItem {
  id: string;
  subject: string;
  message: string;
  status: string;
  queuedAt: string;
  readAt: string | null;
}

export interface TrainingTask {
  id: string;
  title: string;
  status: string;
  dueDate: string | null;
  completedAt: string | null;
  document: { title: string; controlNumber: string };
  version: { versionLabel: string };
}

export async function listNotifications(): Promise<NotificationItem[]> { return request('/notifications'); }
export async function markNotificationRead(id: string) { return request(`/notifications/${id}/read`, { method: 'PATCH' }); }
export async function listTrainingTasks(): Promise<TrainingTask[]> { return request('/training/tasks'); }
export async function completeTrainingTask(id: string) { return request(`/training/tasks/${id}/complete`, { method: 'PATCH' }); }

async function request(path: string, options: RequestInit = {}) {
  const token = window.localStorage.getItem('erp_access_token');
  const response = await fetch(`${API_BASE_URL}${path}`, { ...options, headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}), ...options.headers } });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.message || 'Workspace operation failed');
  return body;
}
