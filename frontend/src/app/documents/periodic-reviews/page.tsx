'use client';

import { useEffect, useState } from 'react';
import styles from './periodic-reviews.module.css';
import { DueReview, fetchDueReviews, recordPeriodicReview } from './periodic-review-client';

const outcomes = [
  ['REMAINS_VALID', 'Reviewed - remains valid'],
  ['REVISION_REQUIRED', 'Revision required'],
  ['RETIRED', 'Retire document'],
  ['RETURNED_FOR_CLARIFICATION', 'Return for clarification'],
] as const;

export default function PeriodicReviewsPage() {
  const [reviews, setReviews] = useState<DueReview[]>([]);
  const [selected, setSelected] = useState<DueReview | null>(null);
  const [outcome, setOutcome] = useState<(typeof outcomes)[number][0]>('REMAINS_VALID');
  const [nextReviewDate, setNextReviewDate] = useState('');
  const [comments, setComments] = useState('');
  const [referencesChecked, setReferencesChecked] = useState('');
  const [notice, setNotice] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchDueReviews()
      .then(setReviews)
      .catch((error) => setNotice(error instanceof Error ? error.message : 'Reviews could not be loaded'))
      .finally(() => setLoading(false));
  }, []);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selected) return;
    setSaving(true);
    try {
      await recordPeriodicReview({
        versionId: selected.id,
        outcome,
        comments: comments || undefined,
        referencesChecked: referencesChecked || undefined,
        nextReviewDate: nextReviewDate || undefined,
      });
      setReviews((current) => current.filter((review) => review.id !== selected.id));
      setSelected(null);
      setNotice(outcome === 'REVISION_REQUIRED' ? 'Review recorded and a Change Request was created.' : 'Periodic review recorded successfully.');
      setComments('');
      setReferencesChecked('');
      setNextReviewDate('');
    } catch (error) {
      setNotice(error instanceof Error ? error.message : 'Review could not be recorded');
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div><p className={styles.eyebrow}>Document control · Process 3</p><h1>Periodic review</h1><p>Confirm that current documents remain valid against the organization, standards, and applicable legal requirements.</p></div>
        <div className={styles.dueBadge}><strong>{reviews.length}</strong><span>reviews due</span></div>
      </header>
      {notice && <div className={styles.notice} role="status">{notice}</div>}
      <section className={styles.workspace}>
        <aside className={styles.queue}>
          <p className={styles.sectionLabel}>Review queue</p>
          {loading && <p className={styles.muted}>Loading due reviews...</p>}
          {!loading && reviews.length === 0 && <p className={styles.empty}>No reviews are currently due.</p>}
          {reviews.map((review) => <button key={review.id} type="button" className={`${styles.reviewItem} ${selected?.id === review.id ? styles.selected : ''}`} onClick={() => setSelected(review)}><span>{review.document.controlNumber} · {review.document.level.replace('_', ' ')}</span><strong>{review.document.title}</strong><small>{review.document.tenant.name} · Due {new Date(review.nextReviewDate).toLocaleDateString()}</small></button>)}
        </aside>
        <article className={styles.detail}>
          {selected ? <form onSubmit={submit}><span className={styles.documentNumber}>{selected.document.controlNumber}</span><h2>{selected.document.title}</h2><p className={styles.meta}>{selected.document.tenant.name} · Current {selected.versionLabel}</p><div className={styles.checklist}><h3>Review against</h3><label><input type="checkbox" required /> Current organizational policies and procedures</label><label><input type="checkbox" required /> Applicable standards and legal requirements</label><label><input type="checkbox" required /> Organization structure and designations</label><label><input type="checkbox" required /> Related documents, forms, and operating practices</label></div><label className={styles.field}><span>Review outcome</span><select value={outcome} onChange={(event) => setOutcome(event.target.value as (typeof outcomes)[number][0])}>{outcomes.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label><label className={styles.field}><span>References checked</span><textarea rows={3} value={referencesChecked} onChange={(event) => setReferencesChecked(event.target.value)} placeholder="Standards, policies, regulations, or organizational references reviewed" required /></label><label className={styles.field}><span>Review comments and justification</span><textarea rows={5} value={comments} onChange={(event) => setComments(event.target.value)} placeholder="Explain why the document remains valid or what requires attention" required /></label>{outcome !== 'RETIRED' && outcome !== 'REVISION_REQUIRED' && <label className={styles.field}><span>Next review date (optional)</span><input type="date" value={nextReviewDate} onChange={(event) => setNextReviewDate(event.target.value)} /></label>}<div className={styles.actions}><button type="submit" className={styles.primaryButton} disabled={saving}>{saving ? 'Recording...' : 'Record periodic review'}</button></div></form> : <div className={styles.empty}>Select a due document to begin its mandatory review.</div>}
        </article>
      </section>
    </main>
  );
}
