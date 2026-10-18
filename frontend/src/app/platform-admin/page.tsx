'use client';

import { useEffect, useMemo, useState } from 'react';
import styles from './platform-admin.module.css';
import { assignTenantAdmin, createTenant, listTenants, PlatformTenant, updateTenantStatus } from './platform-admin-client';

type Filter = 'All' | PlatformTenant['status'];

function formatStatus(status: PlatformTenant['status']) { return status.charAt(0) + status.slice(1).toLowerCase(); }
function initials(name: string) { return name.split(/\s+/).map((part) => part[0]).join('').slice(0, 3).toUpperCase(); }

export default function PlatformAdminPage() {
  const [tenants, setTenants] = useState<PlatformTenant[]>([]);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Filter>('All');
  const [notice, setNotice] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState<'tenant' | 'admin' | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [tenantForm, setTenantForm] = useState({ name: '', slug: '', subdomain: '' });
  const [adminForm, setAdminForm] = useState({ email: '', name: '' });
  const [saving, setSaving] = useState(false);

  async function loadTenants() {
    try { setLoading(true); setTenants(await listTenants()); }
    catch (error) { setNotice(error instanceof Error ? error.message : 'Tenants could not be loaded'); }
    finally { setLoading(false); }
  }

  useEffect(() => { loadTenants(); }, []);

  const filteredTenants = useMemo(() => tenants.filter((tenant) => {
    const text = `${tenant.name} ${tenant.subdomain} ${tenant.users[0]?.email || ''}`.toLowerCase();
    return (filter === 'All' || tenant.status === filter) && text.includes(query.trim().toLowerCase());
  }), [filter, query, tenants]);
  const activeCount = tenants.filter((tenant) => tenant.status === 'ACTIVE').length;
  const onboardingCount = tenants.filter((tenant) => tenant.status === 'ONBOARDING').length;
  const totalUsers = tenants.reduce((sum, tenant) => sum + (tenant._count?.users ?? tenant.users.length), 0);

  function openAdmin(tenant: PlatformTenant) {
    setSelectedId(tenant.id);
    setAdminForm({ email: tenant.users[0]?.email || '', name: tenant.users[0]?.name || '' });
    setModal('admin');
  }

  async function saveAdmin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); if (!selectedId) return; setSaving(true);
    try { await assignTenantAdmin(selectedId, adminForm); setModal(null); setNotice('Tenant Admin invitation queued.'); await loadTenants(); }
    catch (error) { setNotice(error instanceof Error ? error.message : 'Tenant Admin could not be assigned'); }
    finally { setSaving(false); }
  }

  async function saveTenant(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setSaving(true);
    try { await createTenant(tenantForm); setModal(null); setTenantForm({ name: '', slug: '', subdomain: '' }); setNotice('Client tenant created.'); await loadTenants(); }
    catch (error) { setNotice(error instanceof Error ? error.message : 'Tenant could not be created'); }
    finally { setSaving(false); }
  }

  async function toggleStatus(tenant: PlatformTenant) {
    try { await updateTenantStatus(tenant.id, tenant.status === 'SUSPENDED' ? 'ACTIVE' : 'SUSPENDED'); setNotice('Tenant status updated.'); await loadTenants(); }
    catch (error) { setNotice(error instanceof Error ? error.message : 'Tenant status could not be updated'); }
  }

  return <main className={styles.page}>
    <header className={styles.topbar}><div><p className={styles.kicker}>Platform control room</p><h1>Platform Administration</h1><p className={styles.intro}>Manage client tenants, onboarding, and Tenant Admin access from one place.</p></div><div className={styles.identity}><span className={styles.identityLabel}>Signed in as Platform Admin</span><strong>hamzakhannaghar1998@gmail.com</strong></div></header>
    <section className={styles.metrics} aria-label="Platform summary"><article className={styles.metric}><span>Total client tenants</span><strong>{tenants.length}</strong><small>Across the platform</small></article><article className={styles.metric}><span>Active tenants</span><strong>{activeCount}</strong><small>Currently operational</small></article><article className={styles.metric}><span>Onboarding</span><strong>{onboardingCount}</strong><small>Need follow-up</small></article><article className={styles.metric}><span>Total tenant users</span><strong>{totalUsers}</strong><small>Across all companies</small></article></section>
    <section className={styles.workspace}><div className={styles.sectionHeading}><div><p className={styles.kicker}>Tenant directory</p><h2>Client companies</h2></div><button className={styles.primaryButton} type="button" onClick={() => setModal('tenant')}>Add client tenant</button></div>
      <div className={styles.toolbar}><label className={styles.searchField}><span>Search tenants</span><input type="search" placeholder="Company, subdomain, or admin email" value={query} onChange={(event) => setQuery(event.target.value)} /></label><label className={styles.filterField}><span>Show</span><select value={filter} onChange={(event) => setFilter(event.target.value as Filter)}><option>All</option><option value="ACTIVE">Active</option><option value="ONBOARDING">Onboarding</option><option value="SUSPENDED">Suspended</option></select></label></div>
      {notice && <p className={styles.notice} role="status">{notice}</p>}
      {loading ? <p className={styles.emptyState}>Loading client tenants...</p> : <div className={styles.tableWrap}><table className={styles.table}><thead><tr><th>Client company</th><th>Tenant Admin</th><th>Status</th><th>Users</th><th>Created</th><th><span className={styles.visuallyHidden}>Actions</span></th></tr></thead><tbody>{filteredTenants.map((tenant) => { const admin = tenant.users[0]; return <tr key={tenant.id}><td><div className={styles.companyCell}><span className={styles.companyMark}>{initials(tenant.name)}</span><div><strong>{tenant.name}</strong><span>{tenant.subdomain}.erp.local</span></div></div></td><td><div className={styles.adminCell}><strong>{admin?.name || 'Unassigned'}</strong><span>{admin?.email || 'No Tenant Admin assigned'}</span></div></td><td><span className={`${styles.status} ${styles[tenant.status.toLowerCase()]}`}>{formatStatus(tenant.status)}</span></td><td><strong>{tenant._count?.users ?? tenant.users.length}</strong></td><td>{new Date(tenant.createdAt).toLocaleDateString()}</td><td><div className={styles.rowActions}><button type="button" className={styles.textButton} onClick={() => openAdmin(tenant)}>{admin ? 'Manage admin' : 'Assign admin'}</button><button type="button" className={styles.iconButton} onClick={() => toggleStatus(tenant)}>{tenant.status === 'SUSPENDED' ? 'Activate' : 'Suspend'}</button></div></td></tr>; })}</tbody></table></div>}
      {!loading && filteredTenants.length === 0 && <p className={styles.emptyState}>No tenants match the current search.</p>}
    </section>
    {modal === 'tenant' && <div className={styles.modalBackdrop} onMouseDown={() => setModal(null)}><section className={styles.modal} role="dialog" aria-modal="true" onMouseDown={(event) => event.stopPropagation()}><div className={styles.modalHeader}><div><p className={styles.kicker}>New client</p><h2>Add client tenant</h2></div><button className={styles.closeButton} type="button" onClick={() => setModal(null)} aria-label="Close">×</button></div><form className={styles.modalForm} onSubmit={saveTenant}><label className={styles.formLabel}>Company name<input value={tenantForm.name} onChange={(event) => setTenantForm({ ...tenantForm, name: event.target.value })} required /></label><label className={styles.formLabel}>Tenant slug<input value={tenantForm.slug} onChange={(event) => setTenantForm({ ...tenantForm, slug: event.target.value })} placeholder="acme-manufacturing" required /></label><label className={styles.formLabel}>Subdomain<input value={tenantForm.subdomain} onChange={(event) => setTenantForm({ ...tenantForm, subdomain: event.target.value })} placeholder="acme" required /></label><div className={styles.modalActions}><button className={styles.secondaryButton} type="button" onClick={() => setModal(null)}>Cancel</button><button className={styles.primaryButton} type="submit" disabled={saving}>{saving ? 'Creating...' : 'Create tenant'}</button></div></form></section></div>}
    {modal === 'admin' && <div className={styles.modalBackdrop} onMouseDown={() => setModal(null)}><section className={styles.modal} role="dialog" aria-modal="true" onMouseDown={(event) => event.stopPropagation()}><div className={styles.modalHeader}><div><p className={styles.kicker}>Tenant access</p><h2>Assign Tenant Admin</h2></div><button className={styles.closeButton} type="button" onClick={() => setModal(null)} aria-label="Close">×</button></div><form className={styles.modalForm} onSubmit={saveAdmin}><label className={styles.formLabel}>Tenant Admin email<input type="email" value={adminForm.email} onChange={(event) => setAdminForm({ ...adminForm, email: event.target.value })} required /></label><label className={styles.formLabel}>Name (optional)<input value={adminForm.name} onChange={(event) => setAdminForm({ ...adminForm, name: event.target.value })} /></label><div className={styles.modalActions}><button className={styles.secondaryButton} type="button" onClick={() => setModal(null)}>Cancel</button><button className={styles.primaryButton} type="submit" disabled={saving}>{saving ? 'Saving...' : 'Send invitation'}</button></div></form></section></div>}
  </main>;
}
