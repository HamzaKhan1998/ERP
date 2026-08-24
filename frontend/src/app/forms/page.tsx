'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './forms.module.css';
import { FormTemplate, QualityRecord, listRecords, listTemplates } from './forms-client';

export default function FormsPage() {
  const [templates, setTemplates] = useState<FormTemplate[]>([]);
  const [records, setRecords] = useState<QualityRecord[]>([]);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([listTemplates(), listRecords()])
      .then(([nextTemplates, nextRecords]) => { setTemplates(nextTemplates); setRecords(nextRecords); })
      .catch((error) => setMessage(error instanceof Error ? error.message : 'Forms could not be loaded'));
  }, []);

  return <main className={styles.page}>
    <header className={styles.header}><div><p className={styles.eyebrow}>Level 4 · Controlled templates</p><h1>Forms and records</h1><p>Maintain blank forms separately from the completed quality records captured during work.</p></div><Link className={styles.primaryButton} href="/forms/templates/new">Create template</Link></header>
    {message && <p className={styles.notice} role="status">{message}</p>}
    <section className={styles.section}><div className={styles.heading}><div><p className={styles.sectionLabel}>Blank controlled templates</p><h2>Form library</h2></div><span>{templates.length} templates</span></div><div className={styles.grid}>{templates.map((template) => <article className={styles.card} key={template.id}><span className={styles.number}>{template.controlNumber}</span><h3>{template.title}</h3><p>{template.description || 'No description provided.'}</p><small>{template.fields.length} fields</small><Link href={`/forms/${template.id}`}>Complete record</Link></article>)}{templates.length === 0 && <p className={styles.empty}>No templates yet. Create the first Level 4 form.</p>}</div></section>
    <section className={styles.section}><div className={styles.heading}><div><p className={styles.sectionLabel}>Captured activity data</p><h2>Quality records</h2></div><span>{records.length} records</span></div><div className={styles.recordList}>{records.map((record) => <div className={styles.record} key={record.id}><div><strong>{record.template.title}</strong><span>{record.template.controlNumber} · Completed by {record.completedBy.name}</span></div><b>{record.status}</b><time>{new Date(record.createdAt).toLocaleDateString()}</time></div>)}{records.length === 0 && <p className={styles.empty}>Completed form submissions will appear here as quality records.</p>}</div></section>
  </main>;
}
