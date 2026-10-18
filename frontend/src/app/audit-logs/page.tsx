'use client';

import { useEffect, useState } from 'react';
import styles from './audit-logs.module.css';
import { AuditLogItem, listAuditLogs } from './audit-log-client';

export default function AuditLogsPage() {
  const [logs, setLogs] = useState<AuditLogItem[]>([]);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    listAuditLogs().then(setLogs).catch((error) => setMessage(error instanceof Error ? error.message : 'Audit log could not be loaded'));
  }, []);

  return <main className={styles.page}><header className={styles.header}><div><p className={styles.eyebrow}>Governance · Audit trail</p><h1>Application activity</h1><p>Review who created, approved, published, changed, or acknowledged important system actions.</p></div><span className={styles.count}>{logs.length} events</span></header>{message && <p className={styles.notice} role="status">{message}</p>}<section className={styles.panel}><div className={styles.tableWrap}><table className={styles.table}><thead><tr><th>Action</th><th>Entity</th><th>Details</th><th>Recorded</th></tr></thead><tbody>{logs.map((log) => <tr key={log.id}><td><strong>{log.action.replaceAll('_', ' ')}</strong></td><td>{log.entityType}<small>{log.entityId || 'No entity ID'}</small></td><td>{log.details ? JSON.stringify(log.details) : 'No additional details'}</td><td>{new Date(log.createdAt).toLocaleString()}</td></tr>)}</tbody></table></div>{logs.length === 0 && <p className={styles.empty}>No activity has been recorded for this scope yet.</p>}</section></main>;
}
