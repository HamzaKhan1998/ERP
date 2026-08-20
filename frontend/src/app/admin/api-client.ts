'use client';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export interface Member {
  id: string;
  email: string;
  name: string;
  role: string;
  status: 'active' | 'pending' | 'inactive';
  dateAdded: string;
  department?: string;
}

export interface CreateMemberRequest {
  email: string;
  role: string;
  department?: string;
}

export interface UpdateMemberRequest {
  role?: string;
  department?: string;
}

/**
 * Fetch all members for the current tenant
 */
export async function fetchMembers(): Promise<Member[]> {
  const response = await fetch(`${API_BASE_URL}/admin/members`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch members: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Fetch a single member by ID
 */
export async function fetchMember(id: string): Promise<Member> {
  const response = await fetch(`${API_BASE_URL}/admin/members/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch member: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Add a new member to the tenant
 */
export async function createMember(data: CreateMemberRequest): Promise<Member> {
  const response = await fetch(`${API_BASE_URL}/admin/members`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || `Failed to create member: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Update a member's role or department
 */
export async function updateMember(
  id: string,
  data: UpdateMemberRequest,
): Promise<Member> {
  const response = await fetch(`${API_BASE_URL}/admin/members/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Failed to update member: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Remove a member from the tenant
 */
export async function deleteMember(id: string): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/admin/members/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to delete member: ${response.statusText}`);
  }
}
