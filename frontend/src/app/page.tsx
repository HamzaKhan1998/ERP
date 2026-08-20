import styles from "./page.module.css";

const modules = [
  {
    title: "Audit Management",
    description: "Track audits, compliance actions, and control review cycles.",
    value: "24",
  },
  {
    title: "Findings & CAPA",
    description: "Monitor non-conformances and closure progress across teams.",
    value: "12",
  },
  {
    title: "Operations",
    description: "Review workflow activity, resources, and business KPIs.",
    value: "87%",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>ERP Dashboard</p>
          <h1>Operational visibility for compliance and business performance.</h1>
          <p className={styles.subtitle}>
            A central workspace for audit execution, accountability tracking, and
            operational reporting across the organization.
          </p>
          <div className={styles.actions}>
            <button className={styles.primary}>Open Dashboard</button>
            <button className={styles.secondary}>View Reports</button>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <span className={styles.status}>System status</span>
          <h2>Healthy</h2>
          <ul>
            <li>
              <strong>Database:</strong> PostgreSQL connected
            </li>
            <li>
              <strong>Backend:</strong> NestJS ready
            </li>
            <li>
              <strong>Environment:</strong> Local development
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.grid}>
        {modules.map((item) => (
          <article key={item.title} className={styles.card}>
            <span className={styles.cardValue}>{item.value}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
