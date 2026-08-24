'use client';

import { useState } from 'react';
import styles from '../change-requests.module.css';
import { createChangeRequest } from '../change-request-client';

export default function NewChangeRequestPage() {
  const [message, setMessage] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setSaving(true);
    setMessage(null);
    try {
      await createChangeRequest({
        documentId: String(form.get('documentId')),
        existingRequirement: String(form.get('existingRequirement')),
        proposedChange: String(form.get('proposedChange')),
        reason: String(form.get('reason')),
      });
      setMessage('Change request submitted for Management Representative review.');
      event.currentTarget.reset();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Change request could not be submitted');
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className={styles.page}>
      <header className={styles.header}><div><p className={styles.eyebrow}>Document control · Process 2</p><h1>Initiate document change</h1><p>Submit a controlled request describing what exists, what should change, and why.</p></div><a className={styles.secondaryButton} href="/documents/change-requests">View requests</a></header>
      {message && <div className={styles.notice} role="status">{message}</div>}
      <form className={styles.form} onSubmit={submit}>
        <label><span>Approved document ID</span><input name="documentId" placeholder="Paste the approved document ID" required /></label>
        <label><span>Existing requirement or wording</span><textarea name="existingRequirement" rows={5} placeholder="What is currently present in the approved document?" required /></label>
        <label><span>Proposed replacement or new requirement</span><textarea name="proposedChange" rows={7} placeholder="What should be changed, added, or replaced?" required /></label>
        <label><span>Reason for change</span><textarea name="reason" rows={5} placeholder="Why is this change required? Consider policy, regulatory, organizational, or operational impact." required /></label>
        <div className={styles.actions}><a className={styles.secondaryButton} href="/documents/change-requests">Cancel</a><button className={styles.primaryButton} disabled={saving} type="submit">{saving ? 'Submitting...' : 'Submit change request'}</button></div>
      </form>
    </main>
  );
}
