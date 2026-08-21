'use client';

import { useEffect, useState } from 'react';
import styles from './tenant-admin.module.css';
import {
  Member,
  fetchMembers,
  createMember,
  updateMember,
  deleteMember,
} from './api-client';

export default function TenantAdminPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    role: '',
    designation: '',
    department: '',
  });

  // Fetch members on component mount
  useEffect(() => {
    const loadMembers = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchMembers();
        setMembers(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to load members',
        );
      } finally {
        setLoading(false);
      }
    };

    loadMembers();
  }, []);

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleAddMember = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setFormSuccess(null);

    if (!formData.email || !formData.role || !formData.designation) {
      setFormError('Email, role, and designation are required');
      return;
    }

    try {
      setSubmitting(true);
      const newMember = await createMember({
        email: formData.email,
        role: formData.role,
        designation: formData.designation,
        department: formData.department || undefined,
      });

      setMembers((prev) => [...prev, newMember]);
      setFormData({ email: '', role: '', designation: '', department: '' });
      setFormSuccess(`Member added successfully`);

      // Clear success message after 3 seconds
      setTimeout(() => setFormSuccess(null), 3000);
    } catch (err) {
      setFormError(
        err instanceof Error ? err.message : 'Failed to add member',
      );
    } finally {
      setSubmitting(false);
    }
  };

  // Handle role change
  const handleRoleChange = async (
    memberId: string,
    newRole: string,
    designation?: string,
  ) => {
    try {
      const updated = await updateMember(memberId, {
        ...(newRole ? { role: newRole } : {}),
        ...(designation ? { designation } : {}),
      });
      setMembers((prev) =>
        prev.map((m) => (m.id === memberId ? updated : m)),
      );
    } catch (err) {
      alert(
        err instanceof Error ? err.message : 'Failed to update member role',
      );
    }
  };

  // Handle member deletion
  const handleDeleteMember = async (memberId: string, email: string) => {
    if (!confirm(`Are you sure you want to remove ${email}?`)) {
      return;
    }

    try {
      await deleteMember(memberId);
      setMembers((prev) => prev.filter((m) => m.id !== memberId));
    } catch (err) {
      alert(
        err instanceof Error ? err.message : 'Failed to delete member',
      );
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Tenant Admin</h1>
        <p>Manage company users, roles, and permissions</p>
      </header>

      <main className={styles.main}>
        {/* Add Member Section */}
        <section className={styles.section}>
          <h2>Add New Member</h2>

          {formError && (
            <div className={styles.errorMessage}>{formError}</div>
          )}
          {formSuccess && (
            <div className={styles.successMessage}>{formSuccess}</div>
          )}

          <form className={styles.form} onSubmit={handleAddMember}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="user@company.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="role">Assign Role</label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a role...</option>
                  <option value="Tenant Admin">Tenant Admin</option>
                  <option value="Document Owner">Document Owner</option>
                  <option value="Reviewer">Reviewer</option>
                  <option value="Approver">Approver</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="designation">Designation</label>
                <select
                  id="designation"
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a designation...</option>
                  <option value="CEO / Managing Director">CEO / Managing Director</option>
                  <option value="General Manager">General Manager</option>
                  <option value="Management Representative">Management Representative</option>
                  <option value="Departmental Head">Departmental Head</option>
                  <option value="Departmental Manager">Departmental Manager</option>
                  <option value="Process Owner">Process Owner</option>
                  <option value="Supervisor">Supervisor</option>
                  <option value="Officer / Coordinator">Officer / Coordinator</option>
                  <option value="Staff Member">Staff Member</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="department">Department (Optional)</label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  placeholder="e.g., Quality, IT, HR"
                  value={formData.department}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <button
              type="submit"
              className={styles.btnPrimary}
              disabled={submitting}
            >
              {submitting ? 'Sending...' : 'Send Invitation'}
            </button>
          </form>
        </section>

        {/* Members List Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Company Members</h2>
            <span className={styles.badge}>
              {members.length} {members.length === 1 ? 'member' : 'members'}
            </span>
          </div>

          {error && <div className={styles.errorMessage}>{error}</div>}
          {loading && <p className={styles.loading}>Loading members...</p>}

          {!loading && members.length === 0 && (
            <p className={styles.emptyState}>
              No members yet. Add your first member using the form above.
            </p>
          )}

          {!loading && members.length > 0 && (
            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Designation</th>
                    <th>Status</th>
                    <th>Date Added</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((member) => (
                    <tr key={member.id} className={styles.tableRow}>
                      <td>
                        <strong>{member.name}</strong>
                      </td>
                      <td>
                        <code>{member.email}</code>
                      </td>
                      <td>
                        <select
                          className={styles.roleSelect}
                          value={member.role}
                          onChange={(e) =>
                            handleRoleChange(member.id, e.target.value)
                          }
                        >
                          <option value="Tenant Admin">Tenant Admin</option>
                          <option value="Document Owner">Document Owner</option>
                          <option value="Reviewer">Reviewer</option>
                          <option value="Approver">Approver</option>
                        </select>
                      </td>
                      <td>
                        <select
                          className={styles.roleSelect}
                          value={member.designation}
                          onChange={(e) =>
                            handleRoleChange(member.id, '', e.target.value)
                          }
                        >
                          <option value="CEO / Managing Director">CEO / Managing Director</option>
                          <option value="General Manager">General Manager</option>
                          <option value="Management Representative">Management Representative</option>
                          <option value="Departmental Head">Departmental Head</option>
                          <option value="Departmental Manager">Departmental Manager</option>
                          <option value="Process Owner">Process Owner</option>
                          <option value="Supervisor">Supervisor</option>
                          <option value="Officer / Coordinator">Officer / Coordinator</option>
                          <option value="Staff Member">Staff Member</option>
                        </select>
                      </td>
                      <td>
                        <span
                          className={`${styles.status} ${styles[member.status]}`}
                        >
                          {member.status.charAt(0).toUpperCase() +
                            member.status.slice(1)}
                        </span>
                      </td>
                      <td>{member.dateAdded}</td>
                      <td className={styles.actions}>
                        <button
                          className={styles.btnIconDanger}
                          title="Remove member"
                          aria-label="Remove member"
                          onClick={() =>
                            handleDeleteMember(member.id, member.email)
                          }
                        >
                          ✕
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Role Summary Section */}
        <section className={styles.section}>
          <h2>Role Definitions</h2>

          <div className={styles.rolesGrid}>
            <article className={styles.roleCard}>
              <h3>Tenant Admin</h3>
              <p>
                Manages company users, roles, and permissions. Full access to
                tenant administration.
              </p>
              <ul>
                <li>Add/remove users</li>
                <li>Assign roles and permissions</li>
                <li>View audit logs</li>
              </ul>
            </article>

            <article className={styles.roleCard}>
              <h3>Document Owner</h3>
              <p>
                Writes and updates document content. Owns sections of quality
                manuals and controlled procedures.
              </p>
              <ul>
                <li>Create and edit documents</li>
                <li>Submit for review</li>
                <li>Respond to reviewer feedback</li>
              </ul>
            </article>

            <article className={styles.roleCard}>
              <h3>Reviewer</h3>
              <p>
                Validates accuracy and compliance. Reviews documents before
                final approval.
              </p>
              <ul>
                <li>Comment on drafts</li>
                <li>Request revisions</li>
                <li>Approve for signoff</li>
              </ul>
            </article>

            <article className={styles.roleCard}>
              <h3>Approver</h3>
              <p>
                Final authority for document release. Signs off on all
                controlled documents.
              </p>
              <ul>
                <li>Final approval and signoff</li>
                <li>Publish documents</li>
                <li>Retire or archive content</li>
              </ul>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
