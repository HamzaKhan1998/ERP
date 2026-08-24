'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import styles from '../forms.module.css';
import { createRecord, FormTemplate, getTemplate, uploadRecordFile } from '../forms-client';

export default function CompleteRecordPage() {
  const params = useParams<{ id: string }>();
  const [template, setTemplate] = useState<FormTemplate | null>(null);
  const [values, setValues] = useState<Record<string, unknown>>({});
  const [message, setMessage] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => { getTemplate(params.id).then(setTemplate).catch((error) => setMessage(error instanceof Error ? error.message : 'Template could not be loaded')); }, [params.id]);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setSaving(true);
    try {
      const record = await createRecord({ templateId: params.id, values });
      const files = form.getAll('fileAttachments').filter((value): value is File => value instanceof File && value.size > 0);
      for (const file of files) await uploadRecordFile(record.id, file);
      setMessage('Completed form saved as a quality record.');
      setValues({});
    }
    catch (error) { setMessage(error instanceof Error ? error.message : 'Quality record could not be saved'); }
    finally { setSaving(false); }
  }

  return <main className={styles.page}><header className={styles.header}><div><p className={styles.eyebrow}>Level 4 · Completed record</p><h1>{template?.title || 'Complete form'}</h1><p>Once submitted, the captured data becomes a quality record. The blank template remains controlled separately.</p></div><Link className={styles.secondaryButton} href="/forms">Back to forms</Link></header>{message && <p className={styles.notice} role="status">{message}</p>}{template && <form className={styles.form} onSubmit={submit}>{template.fields.map((field) => <label className={styles.field} key={field.id}><span>{field.label}{field.required ? ' *' : ''}</span>{field.type === 'TEXTAREA' ? <textarea rows={5} required={field.required} value={String(values[field.fieldKey] || '')} onChange={(event) => setValues({ ...values, [field.fieldKey]: event.target.value })} /> : field.type === 'CHECKBOX' ? <input type="checkbox" checked={Boolean(values[field.fieldKey])} onChange={(event) => setValues({ ...values, [field.fieldKey]: event.target.checked })} /> : field.type === 'FILE' ? <input name="fileAttachments" type="file" accept="application/pdf,image/jpeg,image/png" multiple required={field.required} onChange={(event) => setValues({ ...values, [field.fieldKey]: event.target.files?.length ? `${event.target.files.length} file(s)` : '' })} /> : <input type={field.type === 'DATE' ? 'date' : field.type === 'NUMBER' ? 'number' : 'text'} required={field.required} value={String(values[field.fieldKey] || '')} onChange={(event) => setValues({ ...values, [field.fieldKey]: event.target.value })} />}</label>)}<div className={styles.actions}><button className={styles.primaryButton} disabled={saving} type="submit">{saving ? 'Saving...' : 'Submit quality record'}</button></div></form>}</main>;
}
