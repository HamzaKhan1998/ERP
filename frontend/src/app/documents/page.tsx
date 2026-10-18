'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import styles from './documents.module.css';
import { DocumentListItem, listDocuments } from './documents-client';

const statuses = ['ALL', 'DRAFT', 'PENDING_APPROVAL', 'APPROVED', 'PUBLISHED', 'RETURNED_FOR_CORRECTION', 'RETIRED'] as const;

function statusLabel(value: string) { return value.replaceAll('_', ' '); }
function currentVersion(document: DocumentListItem) { return document.versions[0]; }
function assignment(document: DocumentListItem, type: string) { return currentVersion(document)?.assignments.find((item) => item.type === type)?.user.name || 'Unassigned'; }

export default function DocumentsPage() {
  const [documents, setDocuments] = useState<DocumentListItem[]>([]);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<(typeof statuses)[number]>('ALL');
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => { listDocuments().then(setDocuments).catch((error) => setMessage(error instanceof Error ? error.message : 'Documents could not be loaded')); }, []);

  const filtered = useMemo(() => documents.filter((document) => {
    const text = `${document.title} ${document.controlNumber} ${document.level} ${document.tenant.name}`.toLowerCase();
    return (status === 'ALL' || document.status === status) && text.includes(query.trim().toLowerCase());
  }), [documents, query, status]);

  return <main className={styles.page}><header className={styles.header}><div><p className={styles.eyebrow}>Document control · Master list</p><h1>Controlled documents</h1><p>The authoritative register for current, draft, approved, superseded, and retired QMS documents.</p></div><Link className={styles.primaryButton} href="/documents/procedures/new">New Level 2 procedure</Link></header>{message && <p className={styles.notice} role="status">{message}</p>}<section className={styles.summary}><div><span>Total documents</span><strong>{documents.length}</strong></div><div><span>Published</span><strong>{documents.filter((document) => document.status === 'PUBLISHED').length}</strong></div><div><span>Pending approval</span><strong>{documents.filter((document) => document.status === 'PENDING_APPROVAL').length}</strong></div><div><span>With attachments</span><strong>{documents.filter((document) => document._count.files > 0).length}</strong></div></section><section className={styles.panel}><div className={styles.toolbar}><label><span>Search register</span><input type="search" placeholder="Title, number, level, or tenant" value={query} onChange={(event) => setQuery(event.target.value)} /></label><label><span>Status</span><select value={status} onChange={(event) => setStatus(event.target.value as (typeof statuses)[number])}>{statuses.map((item) => <option key={item} value={item}>{item === 'ALL' ? 'All statuses' : statusLabel(item)}</option>)}</select></label></div><div className={styles.tableWrap}><table className={styles.table}><thead><tr><th>Document</th><th>Level</th><th>Version</th><th>Prepared By</th><th>Reviewed By</th><th>Approved By</th><th>Status</th><th>Review due</th><th>Links</th></tr></thead><tbody>{filtered.map((document) => { const version = currentVersion(document); return <tr key={document.id}><td><Link href={`/documents/${document.id}`} className={styles.documentLink}><strong>{document.title}</strong><span>{document.controlNumber}</span></Link></td><td>{document.level.replace('_', ' ')}</td><td>{version?.versionLabel || 'No version'}</td><td>{assignment(document, 'PREPARED_BY')}</td><td>{assignment(document, 'REVIEWED_BY')}</td><td>{assignment(document, 'APPROVED_BY')}</td><td><span className={`${styles.status} ${styles[document.status.toLowerCase()]}`}>{statusLabel(document.status)}</span></td><td>{version?.nextReviewDate ? new Date(version.nextReviewDate).toLocaleDateString() : 'Not scheduled'}</td><td><span className={styles.linkCount}>{document._count.files} files · {document._count.qualityRecords} records</span></td></tr>; })}</tbody></table></div>{filtered.length === 0 && <p className={styles.empty}>No documents match the current filters.</p>}</section></main>;
}
