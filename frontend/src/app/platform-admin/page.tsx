'use client';

import { useMemo, useState } from 'react';
import styles from './platform-admin.module.css';

type TenantStatus = 'Active' | 'Onboarding' | 'Suspended';

interface Tenant {
  id: string;
  company: string;
  code: string;
  subdomain: string;
  adminName: string;
  adminEmail: string;
  status: TenantStatus;
  users: number;
  lastActivity: string;
  created: string;
}

const initialTenants: Tenant[] = [
  {
    id: 'acme',
    company: 'Acme Manufacturing',
    code: 'ACM',
    subdomain: 'acme',
    adminName: 'Sarah Khan',
    adminEmail: 'sarah.khan@acme.com',
    status: 'Active',
    users: 24,
    lastActivity: '12 minutes ago',
    created: 'Jan 15, 2026',
  },
  {
    id: 'northstar',
    company: 'Northstar Healthcare',
    code: 'NHC',
    subdomain: 'northstar',
    adminName: 'David Wilson',
    adminEmail: 'david.wilson@northstar.com',
    status: 'Active',
    users: 18,
    lastActivity: '1 hour ago',
    created: 'Feb 02, 2026',
  },
  {
    id: 'meridian',
    company: 'Meridian Logistics',
    code: 'MRL',
    subdomain: 'meridian',
    adminName: 'Priya Nair',
    adminEmail: 'priya.nair@meridian.com',
    status: 'Onboarding',
    users: 6,
    lastActivity: 'Yesterday',
    created: 'Mar 10, 2026',
  },
  {
    id: 'vertex',
    company: 'Vertex Technologies',
    code: 'VTX',
    subdomain: 'vertex',
    adminName: 'Michael Chen',
    adminEmail: 'michael.chen@vertex.com',
    status: 'Active',
    users: 31,
    lastActivity: '3 hours ago',
    created: 'Apr 18, 2026',
  },
  {
    id: 'bluepeak',
    company: 'BluePeak Consulting',
    code: 'BPC',
    subdomain: 'bluepeak',
    adminName: 'Unassigned',
    adminEmail: 'No tenant admin assigned',
    status: 'Onboarding',
    users: 0,
    lastActivity: 'Not yet active',
    created: 'Aug 20, 2026',
  },
];

const statusOptions: Array<'All' | TenantStatus> = [
  'All',
  'Active',
  'Onboarding',
  'Suspended',
];

export default function PlatformAdminPage() {
  const [tenants, setTenants] = useState(initialTenants);
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<(typeof statusOptions)[number]>('All');
  const [selectedTenantId, setSelectedTenantId] = useState<string | null>(null);
  const [adminEmail, setAdminEmail] = useState('');
  const [notice, setNotice] = useState<string | null>(null);

  const filteredTenants = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return tenants.filter((tenant) => {
      const matchesStatus = statusFilter === 'All' || tenant.status === statusFilter;
      const matchesQuery =
        !normalizedQuery ||
        [tenant.company, tenant.subdomain, tenant.adminName, tenant.adminEmail]
          .join(' ')
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesStatus && matchesQuery;
    });
  }, [query, statusFilter, tenants]);

  const activeCount = tenants.filter((tenant) => tenant.status === 'Active').length;
  const onboardingCount = tenants.filter((tenant) => tenant.status === 'Onboarding').length;
  const totalUsers = tenants.reduce((total, tenant) => total + tenant.users, 0);

  function openAssignment(tenant: Tenant) {
    setSelectedTenantId(tenant.id);
    setAdminEmail(tenant.adminEmail.includes('@') ? tenant.adminEmail : '');
    setNotice(null);
  }

  function saveAssignment(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!selectedTenantId || !adminEmail.trim()) {
      return;
    }

    setTenants((currentTenants) =>
      currentTenants.map((tenant) =>
        tenant.id === selectedTenantId
          ? {
              ...tenant,
              adminName: 'Pending invitation',
              adminEmail: adminEmail.trim(),
            }
          : tenant,
      ),
    );
    setSelectedTenantId(null);
    setNotice('Tenant Admin invitation queued for delivery.');
  }

  function toggleTenantStatus(tenantId: string) {
    setTenants((currentTenants) =>
      currentTenants.map((tenant) =>
        tenant.id === tenantId
          ? { ...tenant, status: tenant.status === 'Suspended' ? 'Active' : 'Suspended' }
          : tenant,
      ),
    );
    setNotice('Tenant status updated.');
  }

  return (
    <main className={styles.page}>
      <header className={styles.topbar}>
        <div>
          <p className={styles.kicker}>Platform control room</p>
          <h1>Platform Administration</h1>
          <p className={styles.intro}>
            Manage client tenants, onboarding, and Tenant Admin access from one place.
          </p>
        </div>
        <div className={styles.identity}>
          <span className={styles.identityLabel}>Signed in as Platform Admin</span>
          <strong>{'hamzakhannaghar1998@gmail.com'}</strong>
        </div>
      </header>

      <section className={styles.metrics} aria-label="Platform summary">
        <article className={styles.metric}>
          <span>Total client tenants</span>
          <strong>{tenants.length}</strong>
          <small>Across the platform</small>
        </article>
        <article className={styles.metric}>
          <span>Active tenants</span>
          <strong>{activeCount}</strong>
          <small>Currently operational</small>
        </article>
        <article className={styles.metric}>
          <span>Onboarding</span>
          <strong>{onboardingCount}</strong>
          <small>Need follow-up</small>
        </article>
        <article className={styles.metric}>
          <span>Total tenant users</span>
          <strong>{totalUsers}</strong>
          <small>Across all companies</small>
        </article>
      </section>

      <section className={styles.workspace}>
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.kicker}>Tenant directory</p>
            <h2>Client companies</h2>
          </div>
          <button className={styles.primaryButton} type="button" onClick={() => setNotice('Tenant creation workflow will be connected next.') }>
            Add client tenant
          </button>
        </div>

        <div className={styles.toolbar}>
          <label className={styles.searchField}>
            <span>Search tenants</span>
            <input
              type="search"
              placeholder="Company, subdomain, or admin email"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          <label className={styles.filterField}>
            <span>Show</span>
            <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value as (typeof statusOptions)[number])}>
              {statusOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>

        {notice && <p className={styles.notice} role="status">{notice}</p>}

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Client company</th>
                <th>Tenant Admin</th>
                <th>Status</th>
                <th>Users</th>
                <th>Last activity</th>
                <th><span className={styles.visuallyHidden}>Actions</span></th>
              </tr>
            </thead>
            <tbody>
              {filteredTenants.map((tenant) => (
                <tr key={tenant.id}>
                  <td>
                    <div className={styles.companyCell}>
                      <span className={styles.companyMark}>{tenant.code}</span>
                      <div>
                        <strong>{tenant.company}</strong>
                        <span>{tenant.subdomain}.erp.local</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className={styles.adminCell}>
                      <strong>{tenant.adminName}</strong>
                      <span>{tenant.adminEmail}</span>
                    </div>
                  </td>
                  <td><span className={`${styles.status} ${styles[tenant.status.toLowerCase()]}`}>{tenant.status}</span></td>
                  <td><strong>{tenant.users}</strong></td>
                  <td>{tenant.lastActivity}</td>
                  <td>
                    <div className={styles.rowActions}>
                      <button type="button" className={styles.textButton} onClick={() => openAssignment(tenant)}>
                        {tenant.adminName === 'Unassigned' ? 'Assign admin' : 'Manage admin'}
                      </button>
                      <button type="button" className={styles.iconButton} title={`Toggle ${tenant.company} status`} onClick={() => toggleTenantStatus(tenant.id)}>
                        {tenant.status === 'Suspended' ? 'Activate' : 'Suspend'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredTenants.length === 0 && <p className={styles.emptyState}>No tenants match the current search.</p>}
      </section>

      <section className={styles.lowerGrid}>
        <article className={styles.activityPanel}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.kicker}>Platform oversight</p>
              <h2>Recent activity</h2>
            </div>
            <button className={styles.textButton} type="button" onClick={() => setNotice('The full platform audit log will be connected next.')}>View audit log</button>
          </div>
          <ul className={styles.activityList}>
            <li><span className={styles.activityDot} /><div><strong>Vertex Technologies</strong><span>Document Owner role assigned by Tenant Admin</span></div><time>3 hours ago</time></li>
            <li><span className={styles.activityDot} /><div><strong>Meridian Logistics</strong><span>Tenant onboarding checklist updated</span></div><time>Yesterday</time></li>
            <li><span className={styles.activityDot} /><div><strong>Northstar Healthcare</strong><span>New quality manual revision published</span></div><time>Yesterday</time></li>
          </ul>
        </article>

        <aside className={styles.accessPanel}>
          <p className={styles.kicker}>Access boundary</p>
          <h2>Platform Admin scope</h2>
          <p>You can manage all client tenants. Tenant Admins remain limited to their own company and its internal users.</p>
          <div className={styles.scopeList}>
            <span><b>5</b> client tenants</span>
            <span><b>{totalUsers}</b> tenant users</span>
            <span><b>1</b> platform identity</span>
          </div>
        </aside>
      </section>

      {selectedTenantId && (
        <div className={styles.modalBackdrop} role="presentation" onMouseDown={() => setSelectedTenantId(null)}>
          <section className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="assign-admin-title" onMouseDown={(event) => event.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div>
                <p className={styles.kicker}>Tenant access</p>
                <h2 id="assign-admin-title">Assign Tenant Admin</h2>
              </div>
              <button className={styles.closeButton} type="button" aria-label="Close dialog" onClick={() => setSelectedTenantId(null)}>×</button>
            </div>
            <p>Send an invitation to the technical point of contact who will manage this company&apos;s internal users and roles.</p>
            <form onSubmit={saveAssignment} className={styles.modalForm}>
              <label className={styles.formLabel} htmlFor="tenant-admin-email">Tenant Admin email</label>
              <input id="tenant-admin-email" type="email" value={adminEmail} onChange={(event) => setAdminEmail(event.target.value)} placeholder="admin@clientcompany.com" required />
              <div className={styles.modalActions}>
                <button className={styles.secondaryButton} type="button" onClick={() => setSelectedTenantId(null)}>Cancel</button>
                <button className={styles.primaryButton} type="submit">Send invitation</button>
              </div>
            </form>
          </section>
        </div>
      )}
    </main>
  );
}
