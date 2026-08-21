'use client';

import { useState } from 'react';
import styles from './procedure-form.module.css';

const designations = [
  'CEO / Managing Director',
  'General Manager',
  'Management Representative',
  'Departmental Head',
  'Departmental Manager',
  'Process Owner',
];

const standards = [
  'ISO 9001:2015',
  'API Spec Q1',
  'API Spec Q2',
  'ISO 14001:2015',
  'ISO 45001:2018',
];

export default function NewProcedurePage() {
  const [savedMessage, setSavedMessage] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>, message: string) {
    event.preventDefault();
    setSavedMessage(message);
    window.setTimeout(() => setSavedMessage(null), 4000);
  }

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Level 2 · Quality System Procedure</p>
          <h1>Create a controlled procedure</h1>
          <p className={styles.lede}>
            Build the procedure in a structured format, assign its approval chain,
            and route it through document control when ready.
          </p>
        </div>
        <div className={styles.headerMeta}>
          <span>Document status</span>
          <strong>Draft</strong>
          <small>Not yet visible as an approved document</small>
        </div>
      </header>

      {savedMessage && <div className={styles.toast} role="status">{savedMessage}</div>}

      <form className={styles.form} onSubmit={(event) => handleSubmit(event, 'Procedure draft saved locally for review.')}>
        <section className={styles.panel}>
          <div className={styles.panelHeading}>
            <div>
              <p className={styles.sectionNumber}>01</p>
              <h2>Document identity</h2>
            </div>
            <p>Controlled metadata used in the document header and master list.</p>
          </div>
          <div className={styles.fieldGrid}>
            <label className={styles.field}>
              <span>Procedure title</span>
              <input name="title" placeholder="e.g. Supplier Evaluation and Control" required />
            </label>
            <label className={styles.field}>
              <span>Procedure control number</span>
              <input name="controlNumber" placeholder="QSP-PR-001" required />
            </label>
            <label className={styles.field}>
              <span>Issue / revision</span>
              <input name="revision" defaultValue="Issue 1" required />
            </label>
            <label className={styles.field}>
              <span>Review interval</span>
              <select name="reviewInterval" defaultValue="3 years">
                <option>3 years</option>
                <option>5 years</option>
                <option>Custom tenant interval</option>
              </select>
            </label>
            <label className={styles.field}>
              <span>Process owner department</span>
              <select name="department" defaultValue="">
                <option value="">Select department...</option>
                <option>Procurement</option>
                <option>Production</option>
                <option>Quality Assurance</option>
                <option>Sales and Marketing</option>
                <option>HR and Administration</option>
                <option>Information Technology</option>
              </select>
            </label>
            <label className={styles.field}>
              <span>Effective date</span>
              <input type="date" name="effectiveDate" />
            </label>
          </div>
        </section>

        <section className={styles.panel}>
          <div className={styles.panelHeading}>
            <div>
              <p className={styles.sectionNumber}>02</p>
              <h2>Ownership and approval</h2>
            </div>
            <p>The tenant&apos;s organizational designation is separate from system permissions.</p>
          </div>
          <div className={styles.approvalGrid}>
            <label className={styles.approvalCard}>
              <span className={styles.approvalStep}>Prepared By</span>
              <strong>Process owner</strong>
              <select name="preparedByDesignation" defaultValue="Departmental Head">
                {designations.map((designation) => <option key={designation}>{designation}</option>)}
              </select>
              <input name="preparedBy" placeholder="Search or select person" />
            </label>
            <label className={styles.approvalCard}>
              <span className={styles.approvalStep}>Reviewed By</span>
              <strong>Management review</strong>
              <select name="reviewedByDesignation" defaultValue="Management Representative">
                {designations.map((designation) => <option key={designation}>{designation}</option>)}
              </select>
              <input name="reviewedBy" placeholder="Search or select person" />
            </label>
            <label className={styles.approvalCard}>
              <span className={styles.approvalStep}>Approved By</span>
              <strong>Final authority</strong>
              <select name="approvedByDesignation" defaultValue="CEO / Managing Director">
                {designations.map((designation) => <option key={designation}>{designation}</option>)}
              </select>
              <input name="approvedBy" placeholder="Search or select person" />
            </label>
          </div>
        </section>

        <section className={styles.panel}>
          <div className={styles.panelHeading}>
            <div>
              <p className={styles.sectionNumber}>03</p>
              <h2>Procedure content</h2>
            </div>
            <p>These sections become the controlled body of the procedure.</p>
          </div>
          <div className={styles.contentFields}>
            <label className={styles.field}>
              <span>1.0 Purpose</span>
              <textarea name="purpose" placeholder="Why does this procedure exist? What requirement or process does it address?" rows={4} required />
            </label>
            <label className={styles.field}>
              <span>2.0 Scope</span>
              <textarea name="scope" placeholder="Define the departments, activities, products, or locations covered by this procedure." rows={4} required />
            </label>
            <label className={styles.field}>
              <span>3.0 Responsibilities</span>
              <textarea name="responsibilities" placeholder="Describe responsibilities by designation or department." rows={5} required />
            </label>
            <label className={styles.field}>
              <span>4.0 Procedure</span>
              <textarea name="procedure" placeholder="Describe the process steps, controls, inputs, outputs, and required evidence." rows={10} required />
            </label>
          </div>
        </section>

        <section className={styles.panel}>
          <div className={styles.panelHeading}>
            <div>
              <p className={styles.sectionNumber}>04</p>
              <h2>Records and related documents</h2>
            </div>
            <p>Link blank Level 4 templates and related controlled documents.</p>
          </div>
          <div className={styles.fieldGrid}>
            <label className={styles.field}>
              <span>5.0 Records and Level 4 forms</span>
              <textarea name="records" placeholder="List the blank forms, formats, or logbooks used by this procedure, including form numbers." rows={5} />
            </label>
            <label className={styles.field}>
              <span>6.0 Related documents</span>
              <textarea name="relatedDocuments" placeholder="List related procedures, work instructions, standards, specifications, or drawings." rows={5} />
            </label>
          </div>
        </section>

        <section className={styles.panel}>
          <div className={styles.panelHeading}>
            <div>
              <p className={styles.sectionNumber}>05</p>
              <h2>Compliance note</h2>
            </div>
            <p>Reference the standard clauses addressed by this procedure.</p>
          </div>
          <div className={styles.complianceRow}>
            <select name="standard" defaultValue="">
              <option value="">Select applicable standard...</option>
              {standards.map((standard) => <option key={standard}>{standard}</option>)}
            </select>
            <input name="clause" placeholder="Clause number, e.g. 8.4" />
            <input name="complianceNote" placeholder="What requirement does this procedure fulfill?" />
          </div>
        </section>

        <section className={styles.panel}>
          <div className={styles.panelHeading}>
            <div>
              <p className={styles.sectionNumber}>06</p>
              <h2>Revision history</h2>
            </div>
            <p>Each approved issue or revision must explain what changed.</p>
          </div>
          <div className={styles.revisionRow}>
            <input name="historyPage" placeholder="Page #" />
            <input name="historyRevision" placeholder="Rev. #" />
            <input name="historyDescription" placeholder="Change description" />
          </div>
        </section>

        <footer className={styles.formFooter}>
          <p>Saving keeps this document in Draft. Submitting starts the document-control review.</p>
          <div className={styles.actions}>
            <button type="button" className={styles.secondaryButton} onClick={() => setSavedMessage('Draft changes discarded from this prototype form.')}>Cancel</button>
            <button type="submit" className={styles.secondaryButton}>Save draft</button>
            <button type="button" className={styles.primaryButton} onClick={(event) => handleSubmit(event as unknown as React.FormEvent<HTMLFormElement>, 'Procedure submitted for document-control review.')}>Submit for review</button>
          </div>
        </footer>
      </form>
    </main>
  );
}
