'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './login.module.css';
import { loginTenant } from './auth-client';

export default function TenantLoginPage() {
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setMessage(null);

    try {
      await loginTenant({
        subdomain: String(form.get('subdomain')),
        email: String(form.get('email')),
        password: String(form.get('password')),
      });
      window.location.assign('/tenant-admin');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Unable to sign in');
    }
  }

  return (
    <main className={styles.page}>
      <section className={styles.panel}>
        <div className={styles.brandMark}>ERP</div>
        <p className={styles.eyebrow}>Client workspace</p>
        <h1>Sign in to your company</h1>
        <p className={styles.intro}>
          Access your organization&apos;s documents, quality workflows, records, and tasks.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            <span>Company subdomain</span>
            <div className={styles.subdomainField}>
              <input name="subdomain" placeholder="acme" required />
              <strong>.erp.local</strong>
            </div>
          </label>
          <label>
            <span>Email address</span>
            <input type="email" name="email" placeholder="you@company.com" required />
          </label>
          <label>
            <span>Password</span>
            <input type="password" name="password" placeholder="Enter your password" required />
          </label>
          <button type="submit">Sign in</button>
        </form>

        {message && <p className={styles.message} role="status">{message}</p>}
        <p className={styles.support}>Need access? Contact your company Tenant Admin.</p>
        <Link className={styles.switchLink} href="/login/platform-admin">Platform Admin sign in</Link>
      </section>
      <aside className={styles.sidePanel}>
        <p className={styles.sideLabel}>Tenant workspace</p>
        <h2>One controlled home for your quality system.</h2>
        <ul>
          <li>Controlled procedures and document versions</li>
          <li>Approval, review, and training workflows</li>
          <li>Forms, records, and supporting evidence</li>
        </ul>
      </aside>
    </main>
  );
}
