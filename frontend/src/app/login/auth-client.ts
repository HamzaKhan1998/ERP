const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export async function loginTenant(data: {
  subdomain: string;
  email: string;
  password: string;
}) {
  return sendLogin('/auth/tenant/login', data);
}

export async function loginPlatform(data: { email: string; password: string }) {
  return sendLogin('/auth/platform/login', data);
}

async function sendLogin(path: string, data: Record<string, string>) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(body.message || 'Unable to sign in');
  }

  window.localStorage.setItem('erp_access_token', body.accessToken);
  return body;
}
