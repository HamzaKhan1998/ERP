'use client';

import { useEffect, useState } from 'react';
import styles from './change-requests.module.css';
import { ChangeRequest, incorporateChangeRequest, listChangeRequests, reviewChangeRequest } from './change-request-client';

export default function ChangeRequestsPage() {
  const [requests, setRequests] = useState<ChangeRequest[]>([]);
  const [selected, setSelected] = useState<ChangeRequest | null>(null);
  const [comment, setComment] = useState('');
  const [notice, setNotice] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listChangeRequests()
      .then(setRequests)
      .catch((error) => setNotice(error instanceof Error ? error.message : 'Requests could not be loaded'))
      .finally(() => setLoading(false));
  }, []);

  async function decide(decision: 'ACCEPTED_FOR_CHANGE' | 'REJECTED') {
    if (!selected) return;
    try {
      const updated = await reviewChangeRequest(selected.id, decision, comment);
      setRequests((current) => current.map((request) => request.id === updated.id ? updated : request));
      setSelected(updated);
      setComment('');
      setNotice(decision === 'REJECTED' ? 'Change request rejected.' : 'Change request accepted for controlled revision.');
    } catch (error) {
      setNotice(error instanceof Error ? error.message : 'Review could not be recorded');
    }
  }

  async function incorporate() {
    if (!selected) return;
    try {
      const updated = await incorporateChangeRequest(selected.id);
      setRequests((current) => current.map((request) => request.id === updated.id ? updated : request));
      setSelected(updated);
      setNotice('New draft revision created. The original approval chain has been copied.');
    } catch (error) {
      setNotice(error instanceof Error ? error.message : 'Change could not be incorporated');
    }
  }

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Document control · Process 2</p>
          <h1>Change requests</h1>
          <p>Review proposed changes to approved documents before they enter the original approval chain.</p>
        </div>
        <a className={styles.primaryButton} href="/documents/change-requests/new">Initiate change request</a>
      </header>
      {notice && <div className={styles.notice} role="status">{notice}</div>}
      {loading && <div className={styles.notice}>Loading change requests...</div>}
      <section className={styles.workspace}>
        <div className={styles.list}>
          {requests.map((request) => (
            <button type="button" key={request.id} className={`${styles.requestItem} ${selected?.id === request.id ? styles.selected : ''}`} onClick={() => setSelected(request)}>
              <span>{request.document.controlNumber}</span>
              <strong>{request.document.title}</strong>
              <small>{request.requestedBy.name} · {new Date(request.createdAt).toLocaleDateString()}</small>
              <em className={styles[request.status.toLowerCase().replaceAll('_', '')]}>{request.status.replaceAll('_', ' ')}</em>
            </button>
          ))}
          {!loading && requests.length === 0 && <p className={styles.empty}>No change requests have been submitted.</p>}
        </div>
        <article className={styles.detail}>
          {selected ? (
            <>
              <span className={styles.documentNumber}>{selected.document.controlNumber}</span>
              <h2>{selected.document.title}</h2>
              <p className={styles.statusLine}>Status: <strong>{selected.status.replaceAll('_', ' ')}</strong></p>
              <div className={styles.field}><span>Existing requirement</span><p>{selected.existingRequirement}</p></div>
              <div className={styles.field}><span>Proposed change</span><p>{selected.proposedChange}</p></div>
              <div className={styles.field}><span>Reason for change</span><p>{selected.reason}</p></div>
              {selected.managementComment && <div className={styles.field}><span>Management review comment</span><p>{selected.managementComment}</p></div>}
              {selected.status === 'SUBMITTED' && <div className={styles.reviewBox}><label><span>Management review comment</span><textarea rows={4} value={comment} onChange={(event) => setComment(event.target.value)} placeholder="Explain the relevance decision..." /></label><div className={styles.actions}><button type="button" className={styles.rejectButton} onClick={() => decide('REJECTED')}>Reject</button><button type="button" className={styles.primaryButton} onClick={() => decide('ACCEPTED_FOR_CHANGE')}>Accept for change</button></div></div>}
              {selected.status === 'ACCEPTED_FOR_CHANGE' && <div className={styles.reviewBox}><span className={styles.eyebrow}>Ready for controlled revision</span><p>The request has passed initial management review. Create the next draft revision and copy the original Prepared By / Reviewed By / Approved By chain.</p><div className={styles.actions}><button type="button" className={styles.primaryButton} onClick={incorporate}>Create next revision</button></div></div>}
            </>
          ) : <p className={styles.empty}>Select a change request to review.</p>}
        </article>
      </section>
    </main>
  );
}
