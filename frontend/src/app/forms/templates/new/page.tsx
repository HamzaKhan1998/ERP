'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../../forms.module.css';
import { createTemplate } from '../../forms-client';

type FieldType = 'TEXT' | 'TEXTAREA' | 'NUMBER' | 'DATE' | 'SELECT' | 'CHECKBOX' | 'FILE';
interface BuilderField { id: number; fieldKey: string; label: string; type: FieldType; required: boolean; options: string; }
const fieldTypes: Array<[FieldType, string]> = [['TEXT', 'Short text'], ['TEXTAREA', 'Long text'], ['NUMBER', 'Number'], ['DATE', 'Date'], ['SELECT', 'Dropdown'], ['CHECKBOX', 'Checkbox'], ['FILE', 'File attachment']];
let nextFieldId = 4;
const initialFields: BuilderField[] = [
  { id: 1, fieldKey: 'activityDate', label: 'Activity date', type: 'DATE', required: true, options: '' },
  { id: 2, fieldKey: 'performedBy', label: 'Performed by', type: 'TEXT', required: true, options: '' },
  { id: 3, fieldKey: 'result', label: 'Result or observation', type: 'TEXTAREA', required: true, options: '' },
];

export default function NewTemplatePage() {
  const [fields, setFields] = useState(initialFields);
  const [message, setMessage] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const updateField = (id: number, patch: Partial<BuilderField>) => setFields((current) => current.map((field) => field.id === id ? { ...field, ...patch } : field));
  const addField = () => { const id = nextFieldId++; setFields((current) => [...current, { id, fieldKey: `field${id}`, label: 'New field', type: 'TEXT', required: false, options: '' }]); };
  const removeField = (id: number) => { if (fields.length > 1) setFields((current) => current.filter((field) => field.id !== id)); };
  const moveField = (id: number, direction: -1 | 1) => setFields((current) => { const index = current.findIndex((field) => field.id === id); const next = index + direction; if (index < 0 || next < 0 || next >= current.length) return current; const result = [...current]; [result[index], result[next]] = [result[next], result[index]]; return result; });

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const invalid = fields.some((field) => !field.label.trim() || !field.fieldKey.trim() || (field.type === 'SELECT' && !field.options.trim()));
    if (invalid) { setMessage('Every field needs a label and key. Dropdowns also need options.'); return; }
    setSaving(true); setMessage(null);
    try {
      await createTemplate({ title: String(form.get('title')), controlNumber: String(form.get('controlNumber')), description: String(form.get('description') || ''), fields: fields.map((field) => ({ fieldKey: field.fieldKey.trim(), label: field.label.trim(), type: field.type, required: field.required, options: field.type === 'SELECT' ? field.options.split(',').map((option) => option.trim()).filter(Boolean) : undefined })) });
      setMessage('Level 4 blank template created successfully.'); event.currentTarget.reset(); setFields(initialFields);
    } catch (error) { setMessage(error instanceof Error ? error.message : 'Template could not be created'); } finally { setSaving(false); }
  }

  return <main className={styles.page}><header className={styles.header}><div><p className={styles.eyebrow}>Level 4 · Blank template</p><h1>Create a form template</h1><p>Define the controlled blank form that personnel will complete when a procedure or work instruction is performed.</p></div><Link className={styles.secondaryButton} href="/forms">Back to forms</Link></header>{message && <p className={styles.notice} role="status">{message}</p>}<form className={styles.form} onSubmit={submit}><label><span>Form title</span><input name="title" placeholder="e.g. Incoming Material Inspection Form" required /></label><label><span>Form control number</span><input name="controlNumber" placeholder="FR-QA-001" required /></label><label><span>Description</span><textarea name="description" rows={4} placeholder="Explain which procedure or work instruction requires this form." /></label><section className={styles.builder}><div className={styles.heading}><div><p className={styles.sectionLabel}>Template fields</p><h2>Design the blank form</h2></div><span>{fields.length} fields</span></div><div className={styles.builderList}>{fields.map((field, index) => <article className={styles.builderField} key={field.id}><div className={styles.builderFieldTop}><strong>Field {index + 1}</strong><div className={styles.reorder}><button type="button" title="Move field up" disabled={index === 0} onClick={() => moveField(field.id, -1)}>↑</button><button type="button" title="Move field down" disabled={index === fields.length - 1} onClick={() => moveField(field.id, 1)}>↓</button><button type="button" title="Remove field" onClick={() => removeField(field.id)}>×</button></div></div><div className={styles.builderGrid}><label><span>Field label</span><input value={field.label} onChange={(event) => updateField(field.id, { label: event.target.value })} /></label><label><span>Field key</span><input value={field.fieldKey} onChange={(event) => updateField(field.id, { fieldKey: event.target.value.replace(/\s+/g, '_') })} /></label><label><span>Field type</span><select value={field.type} onChange={(event) => updateField(field.id, { type: event.target.value as FieldType })}>{fieldTypes.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label><label className={styles.checkboxField}><input type="checkbox" checked={field.required} onChange={(event) => updateField(field.id, { required: event.target.checked })} /><span>Required field</span></label></div>{field.type === 'SELECT' && <label><span>Dropdown options</span><input value={field.options} onChange={(event) => updateField(field.id, { options: event.target.value })} placeholder="Accepted, Rejected, Pending" /><small>Separate options with commas.</small></label>}</article>)}</div><button type="button" className={styles.addFieldButton} onClick={addField}>+ Add field</button></section><div className={styles.actions}><Link className={styles.secondaryButton} href="/forms">Cancel</Link><button className={styles.primaryButton} disabled={saving} type="submit">{saving ? 'Creating...' : 'Create blank template'}</button></div></form></main>;
}
