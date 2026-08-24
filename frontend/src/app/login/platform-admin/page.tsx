'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from '../login.module.css';
import { loginPlatform } from '../auth-client';

export default function PlatformAdminLoginPage() {
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setMessage(null);

    try {
      await loginPlatform({
        email: String(form.get('email')),
        password: String(form.get('password')),
      });
      window.location.assign('/platform-admin');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Unable to sign in');
    }
  }

  return (
    <main className={`${styles.page} ${styles.platformPage}`}>
      <section className={styles.panel}>
        <div className={`${styles.brandMark} ${styles.platformMark}`}>PA</div>
        <p className={styles.eyebrow}>Platform control room</p>
        <h1>Platform Admin sign in</h1>
        <p className={styles.intro}>
          Manage client tenants, onboarding, platform settings, and system-wide oversight.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            <span>Platform email</span>
            <input type="email" name="email" placeholder="admin@platform.com" required />
          </label>
          <label>
            <span>Password</span>
            <input type="password" name="password" placeholder="Enter your password" required />
          </label>
          <button type="submit">Sign in to platform</button>
        </form>

        {message && <p className={styles.message} role="status">{message}</p>}
        <p className={styles.support}>Restricted access for platform operators only.</p>
        <Link className={styles.switchLink} href="/login">Tenant user sign in</Link>
      </section>
      <aside className={styles.sidePanel}>
        <p className={styles.sideLabel}>Platform scope</p>
        <h2>See every tenant without crossing their boundaries.</h2>
        <ul>
          <li>Client tenant and subdomain management</li>
          <li>Tenant Admin assignment and onboarding</li>
          <li>Platform activity and access oversight</li>
        </ul>
      </aside>
    </main>
  );
}
