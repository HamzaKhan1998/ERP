'use client';

import { useMemo, useState } from 'react';
import styles from './approvals.module.css';

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

const initialDocuments: ApprovalDocument[] = [
  {
    id: 'qsp-001',
    title: 'Supplier Evaluation and Control',
    number: 'QSP-PR-001',
    department: 'Procurement',
    processOwner: 'Ayesha Malik',
    preparedBy: 'Ayesha Malik · Departmental Head',
    reviewedBy: 'Omar Farooq · General Manager',
    revision: 'Issue 1',
    submitted: 'Aug 18, 2026',
    due: 'Aug 25, 2026',
    status: 'Awaiting approval',
    standard: 'ISO 9001:2015',
    clause: '8.4',
    purpose: 'Define how external providers are evaluated, selected, monitored, and re-evaluated.',
    procedureSummary: 'The procedure covers supplier qualification, risk classification, evaluation criteria, approval, performance monitoring, and retained evidence.',
    relatedForms: ['FR-PR-001 Supplier Evaluation Form', 'FR-PR-002 Approved Supplier List'],
    relatedDocuments: ['QSP-DC-001 Document Control Procedure', 'WI-PR-001 Purchase Order Review'],
  },
  {
    id: 'qsp-014',
    title: 'Internal Audit Management',
    number: 'QSP-QA-014',
    department: 'Quality Assurance',
    processOwner: 'Nadia Ahmed',
    preparedBy: 'Nadia Ahmed · Quality Head',
    reviewedBy: 'Omar Farooq · Management Representative',
    revision: 'Issue 2',
    submitted: 'Aug 16, 2026',
    due: 'Aug 23, 2026',
    status: 'Awaiting approval',
    standard: 'API Spec Q2 2nd Edition',
    clause: '6.2',
    purpose: 'Establish the organization-wide method for planning, conducting, reporting, and closing internal audits.',
    procedureSummary: 'The procedure defines the annual audit program, auditor competence, independence, findings classification, corrective action, and follow-up.',
    relatedForms: ['FR-QA-014 Internal Audit Plan', 'FR-QA-015 Audit Report'],
    relatedDocuments: ['QSP-CAPA-003 Corrective Action Procedure'],
  },
  {
    id: 'qsp-022',
    title: 'Training and Competence Management',
    number: 'QSP-HR-022',
    department: 'HR and Administration',
    processOwner: 'Hina Shah · HR Head',
    preparedBy: 'Hina Shah · Departmental Head',
    reviewedBy: 'Omar Farooq · General Manager',
    revision: 'Revision 3',
    submitted: 'Aug 12, 2026',
    due: 'Aug 20, 2026',
    status: 'Returned for correction',
    standard: 'ISO 9001:2015',
    clause: '7.2',
    purpose: 'Define how competency needs are identified, training is planned, and effectiveness is evaluated.',
    procedureSummary: 'This revision adds post-training effectiveness checks and links competence records to designation-specific requirements.',
    relatedForms: ['FR-HR-022 Training Attendance Record', 'FR-HR-023 Competence Evaluation'],
    relatedDocuments: ['WI-HR-004 New Employee Induction'],
  },
];

export default function ApprovalsPage() {
  const [documents, setDocuments] = useState(initialDocuments);
  const [selectedId, setSelectedId] = useState(initialDocuments[0].id);
  const [comment, setComment] = useState('');
  const [notice, setNotice] = useState<string | null>(null);

  const selectedDocument = documents.find((document) => document.id === selectedId) ?? documents[0];
  const awaitingCount = documents.filter((document) => document.status === 'Awaiting approval').length;
  const returnedCount = documents.filter((document) => document.status === 'Returned for correction').length;

  const visibleDocuments = useMemo(
    () => documents.filter((document) => document.status !== 'Approved'),
    [documents],
  );

  function updateDecision(status: ApprovalStatus, message: string) {
    if (!selectedDocument) return;

    setDocuments((current) =>
      current.map((document) =>
        document.id === selectedDocument.id ? { ...document, status } : document,
      ),
    );
    setComment('');
    setNotice(message);
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
                <button type="button" className={styles.returnButton} onClick={() => updateDecision('Returned for correction', 'Document returned to the process owner for correction.')}>Return for correction</button>
                <button type="button" className={styles.approveButton} onClick={() => updateDecision('Approved', 'Document approved. Electronic approval evidence recorded for this version.')}>Approve and sign</button>
              </div>
            </section>
          </article>
        )}
      </section>
    </main>
  );
}
