'use client';

import { useEffect, useMemo, useState } from 'react';
import styles from './approvals.module.css';
import { fetchApprovalQueue, recordApprovalDecision } from './approval-client';

type ApprovalStatus = 'Awaiting approval' | 'Returned for correction' | 'Approved';

interface ApprovalDocument {
  id: string;
  title: string;
  number: string;
  department: string;
  processOwner: string;
  preparedBy: string;
  reviewedBy: string;
  revision: string;
  submitted: string;
  due: string;
  status: ApprovalStatus;
  standard: string;
  clause: string;
  purpose: string;
  procedureSummary: string;
  relatedForms: string[];
  relatedDocuments: string[];
}

function mapAssignment(item: import('./approval-client').ApprovalAssignment): ApprovalDocument {
  const assignments = Object.fromEntries(item.version.assignments.map((assignment) => [assignment.type, assignment.user]));
  const compliance = item.version.complianceRefs[0];

  return {
    id: item.version.id,
    title: item.version.document.title,
    number: item.version.document.controlNumber,
    department: item.version.document.tenant.name,
    processOwner: assignments.PREPARED_BY?.name ?? 'Unassigned',
    preparedBy: assignments.PREPARED_BY ? `${assignments.PREPARED_BY.name} · ${assignments.PREPARED_BY.designation ?? 'Process Owner'}` : 'Unassigned',
    reviewedBy: assignments.REVIEWED_BY ? `${assignments.REVIEWED_BY.name} · ${assignments.REVIEWED_BY.designation ?? 'Reviewer'}` : 'Unassigned',
    revision: item.version.versionLabel,
    submitted: 'Recently submitted',
    due: 'Review required',
    status: 'Awaiting approval',
    standard: compliance?.standard ?? 'Not specified',
    clause: compliance?.clause ?? 'Not specified',
    purpose: item.version.purpose ?? 'No purpose provided.',
    procedureSummary: item.version.procedureContent ?? 'No procedure summary provided.',
    relatedForms: item.version.document.title ? ['Related Level 4 templates will appear here.'] : [],
    relatedDocuments: [],
  };
}

export default function ApprovalsPage() {
  const [documents, setDocuments] = useState<ApprovalDocument[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [comment, setComment] = useState('');
  const [notice, setNotice] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [working, setWorking] = useState(false);

  useEffect(() => {
    fetchApprovalQueue()
      .then((items) => {
        const mapped = items.map(mapAssignment);
        setDocuments(mapped);
        setSelectedId(mapped[0]?.id ?? null);
      })
      .catch((error) => setNotice(error instanceof Error ? error.message : 'Approval queue could not be loaded'))
      .finally(() => setLoading(false));
  }, []);

  const selectedDocument = documents.find((document) => document.id === selectedId) ?? documents[0];
  const awaitingCount = documents.filter((document) => document.status === 'Awaiting approval').length;
  const returnedCount = documents.filter((document) => document.status === 'Returned for correction').length;

  const visibleDocuments = useMemo(
    () => documents.filter((document) => document.status !== 'Approved'),
    [documents],
  );

  async function updateDecision(status: ApprovalStatus, message: string) {
    if (!selectedDocument) return;

    setWorking(true);
    try {
      await recordApprovalDecision(
        selectedDocument.id,
        status === 'Approved' ? 'APPROVED' : 'RETURNED_FOR_CORRECTION',
        comment,
      );
      setDocuments((current) => current.map((document) => document.id === selectedDocument.id ? { ...document, status } : document));
      setComment('');
      setNotice(message);
    } catch (error) {
      setNotice(error instanceof Error ? error.message : 'Approval decision could not be recorded');
    } finally {
      setWorking(false);
    }
  }

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Document control · Approver workspace</p>
          <h1>Approval queue</h1>
          <p className={styles.lede}>
            Review the final controlled version before it becomes the current approved document for the organization.
          </p>
        </div>
        <div className={styles.identity}>
          <span>Signed in as</span>
          <strong>CEO / Managing Director</strong>
          <small>hamzakhannaghar1998@gmail.com</small>
        </div>
      </header>

      {notice && <div className={styles.notice} role="status">{notice}</div>}
      {loading && <div className={styles.notice} role="status">Loading assigned documents...</div>}

      <section className={styles.summary} aria-label="Approval summary">
        <article><span>Awaiting approval</span><strong>{awaitingCount}</strong><small>Requires your decision</small></article>
        <article><span>Returned for correction</span><strong>{returnedCount}</strong><small>Awaiting process-owner action</small></article>
        <article><span>Review standard</span><strong>Final sign-off</strong><small>Approval is recorded against a version</small></article>
      </section>

      <section className={styles.workspace}>
        <aside className={styles.queue}>
          <div className={styles.queueHeader}>
            <div>
              <p className={styles.sectionLabel}>Assigned to you</p>
              <h2>Documents</h2>
            </div>
            <span className={styles.count}>{visibleDocuments.length}</span>
          </div>
          <div className={styles.documentList}>
            {visibleDocuments.map((document) => (
              <button
                key={document.id}
                type="button"
                className={`${styles.documentItem} ${document.id === selectedId ? styles.selected : ''}`}
                onClick={() => setSelectedId(document.id)}
              >
                <span className={styles.documentNumber}>{document.number}</span>
                <strong>{document.title}</strong>
                <span>{document.department} · {document.revision}</span>
                <em className={document.status === 'Returned for correction' ? styles.returned : styles.waiting}>{document.status}</em>
              </button>
            ))}
          </div>
        </aside>

        {selectedDocument && (
          <article className={styles.detail}>
            <div className={styles.detailHeader}>
              <div>
                <span className={styles.documentNumber}>{selectedDocument.number} · {selectedDocument.revision}</span>
                <h2>{selectedDocument.title}</h2>
                <p>{selectedDocument.department} · Due {selectedDocument.due}</p>
              </div>
              <span className={`${styles.statusBadge} ${selectedDocument.status === 'Returned for correction' ? styles.returnedBadge : ''}`}>{selectedDocument.status}</span>
            </div>

            <div className={styles.peopleGrid}>
              <div><span>Process owner</span><strong>{selectedDocument.processOwner}</strong></div>
              <div><span>Prepared By</span><strong>{selectedDocument.preparedBy}</strong></div>
              <div><span>Reviewed By</span><strong>{selectedDocument.reviewedBy}</strong></div>
              <div><span>Submitted</span><strong>{selectedDocument.submitted}</strong></div>
            </div>

            <section className={styles.contentSection}>
              <div className={styles.sectionTitle}><span>01</span><h3>Purpose</h3></div>
              <p>{selectedDocument.purpose}</p>
            </section>
            <section className={styles.contentSection}>
              <div className={styles.sectionTitle}><span>02</span><h3>Procedure summary</h3></div>
              <p>{selectedDocument.procedureSummary}</p>
            </section>

            <div className={styles.supportGrid}>
              <section>
                <div className={styles.sectionTitle}><span>03</span><h3>Compliance</h3></div>
                <p><strong>{selectedDocument.standard}</strong><br />Clause {selectedDocument.clause}</p>
              </section>
              <section>
                <div className={styles.sectionTitle}><span>04</span><h3>Related forms</h3></div>
                <ul>{selectedDocument.relatedForms.map((form) => <li key={form}>{form}</li>)}</ul>
              </section>
              <section>
                <div className={styles.sectionTitle}><span>05</span><h3>Related documents</h3></div>
                <ul>{selectedDocument.relatedDocuments.map((document) => <li key={document}>{document}</li>)}</ul>
              </section>
            </div>

            <section className={styles.reviewPanel}>
              <div>
                <p className={styles.sectionLabel}>Decision record</p>
                <h3>What is your decision?</h3>
                <p>Approval applies to this document version only. Returning it sends the document back for correction and preserves your comments in the audit trail.</p>
              </div>
              <textarea value={comment} onChange={(event) => setComment(event.target.value)} placeholder="Add an approval note or correction request..." rows={4} />
              <div className={styles.actions}>
                <button type="button" className={styles.returnButton} disabled={working} onClick={() => updateDecision('Returned for correction', 'Document returned to the process owner for correction.')}>Return for correction</button>
                <button type="button" className={styles.approveButton} disabled={working} onClick={() => updateDecision('Approved', 'Document approved. Electronic approval evidence recorded for this version.')}>Approve and sign</button>
              </div>
            </section>
          </article>
        )}
      </section>
    </main>
  );
}
