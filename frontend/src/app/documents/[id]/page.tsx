'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import styles from './document-detail.module.css';
import { getDocument, downloadFile } from '../documents-client';

interface DocumentDetail {
  id: string;
  title: string;
  controlNumber: string;
  level: string;
  status: string;
  tenant: { name: string; subdomain: string };
  versions: Array<{
    id: string;
    versionLabel: string;
    revisionNumber: number;
    status: string;
    effectiveDate: string | null;
    nextReviewDate: string | null;
    purpose: string | null;
    scope: string | null;
    procedureContent: string | null;
    assignments: Array<{ type: string; user: { name: string; email: string; designation: string | null } }>;
    approvals: Array<{ decision: string; comment: string | null; decidedAt: string; user: { name: string } }>;
    complianceRefs: Array<{ standard: string; edition: string | null; clause: string }>;
    revisionHistory: Array<{ revisionNumber: string; changeDescription: string; createdAt: string }>;
    files: Array<{ id: string; originalName: string; mimeType: string }>;
  }>;
}

export default function DocumentDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [document, setDocument] = useState<DocumentDetail | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  useEffect(() => { getDocument(id).then(setDocument).catch((error) => setMessage(error instanceof Error ? error.message : 'Document could not be loaded')); }, [id]);

  async function handleFileDownload(fileId: string) {
    try {
      setDownloadingId(fileId);
      await downloadFile(fileId);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'File download failed');
    } finally {
      setDownloadingId(null);
    }
  }

  if (message) return <main className={styles.page}><p className={styles.notice}>{message}</p><Link className={styles.primaryButton} href="/documents">Back to master list</Link></main>;
  if (!document) return <main className={styles.page}><p className={styles.empty}>Loading document...</p></main>;

  return <main className={styles.page}><header className={styles.header}><div><p className={styles.eyebrow}>Controlled document detail</p><h1>{document.title}</h1><p>{document.controlNumber} · {document.level.replace('_', ' ')} · {document.tenant.name}</p></div><Link className={styles.primaryButton} href="/documents">Back to master list</Link></header><section className={styles.detailPanel}><div className={styles.detailTop}><div><span className={styles.documentNumber}>Document status</span><strong className={styles.detailStatus}>{document.status.replaceAll('_', ' ')}</strong></div><div><span className={styles.documentNumber}>Tenant subdomain</span><strong>{document.tenant.subdomain}.erp.local</strong></div></div>{document.versions.map((version) => <article className={styles.version} key={version.id}><div className={styles.versionHeader}><div><span className={styles.documentNumber}>{version.versionLabel}</span><h2>Version {version.revisionNumber}</h2></div><span className={styles.versionState}>{version.status}</span></div><div className={styles.detailGrid}><div><span>Effective date</span><strong>{version.effectiveDate ? new Date(version.effectiveDate).toLocaleDateString() : 'Not set'}</strong></div><div><span>Next review</span><strong>{version.nextReviewDate ? new Date(version.nextReviewDate).toLocaleDateString() : 'Not scheduled'}</strong></div><div><span>Prepared By</span><strong>{version.assignments.find((item) => item.type === 'PREPARED_BY')?.user.name || 'Unassigned'}</strong></div><div><span>Reviewed By</span><strong>{version.assignments.find((item) => item.type === 'REVIEWED_BY')?.user.name || 'Unassigned'}</strong></div><div><span>Approved By</span><strong>{version.assignments.find((item) => item.type === 'APPROVED_BY')?.user.name || 'Unassigned'}</strong></div></div><section className={styles.detailContent}><h3>Purpose</h3><p>{version.purpose || 'Not provided.'}</p><h3>Scope</h3><p>{version.scope || 'Not provided.'}</p><h3>Procedure</h3><p>{version.procedureContent || 'Not provided.'}</p></section><div className={styles.detailColumns}><div><h3>Compliance</h3>{version.complianceRefs.length ? version.complianceRefs.map((reference) => <p key={`${reference.standard}-${reference.clause}`}>{reference.standard}{reference.edition ? ` · ${reference.edition}` : ''}<br />Clause {reference.clause}</p>) : <p>None recorded.</p>}</div><div><h3>Revision history</h3>{version.revisionHistory.length ? version.revisionHistory.map((item) => <p key={`${item.revisionNumber}-${item.createdAt}`}>{item.revisionNumber}: {item.changeDescription}</p>) : <p>None recorded.</p>}</div><div><h3>Files</h3>{version.files.length ? version.files.map((file) => <p key={file.id}><button type="button" className={styles.fileLink} disabled={downloadingId === file.id} onClick={() => handleFileDownload(file.id)}>{downloadingId === file.id ? 'Downloading...' : file.originalName}</button><br /><small>{file.mimeType}</small></p>) : <p>No attachments.</p>}</div></div><div className={styles.approvalHistory}><h3>Approval history</h3>{version.approvals.length ? version.approvals.map((approval) => <p key={approval.decidedAt}><strong>{approval.decision}</strong> by {approval.user.name} · {new Date(approval.decidedAt).toLocaleString()} {approval.comment ? `· ${approval.comment}` : ''}</p>) : <p>No approval decisions recorded.</p>}</div></article>)}</section></main>;
}
