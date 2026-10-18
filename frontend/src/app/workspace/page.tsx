'use client';

import { useEffect, useState } from 'react';
import styles from './workspace.module.css';
import { completeTrainingTask, listNotifications, listTrainingTasks, markNotificationRead, NotificationItem, TrainingTask } from './workspace-client';

export default function WorkspacePage() {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [tasks, setTasks] = useState<TrainingTask[]>([]);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([listNotifications(), listTrainingTasks()])
      .then(([nextNotifications, nextTasks]) => { setNotifications(nextNotifications); setTasks(nextTasks); })
      .catch((error) => setMessage(error instanceof Error ? error.message : 'Workspace could not be loaded'));
  }, []);

  async function readNotification(id: string) {
    try {
      const updated = await markNotificationRead(id);
      setNotifications((current) => current.map((item) => item.id === id ? updated : item));
    } catch (error) { setMessage(error instanceof Error ? error.message : 'Notification could not be marked read'); }
  }

  async function completeTask(id: string) {
    try {
      const updated = await completeTrainingTask(id);
      setTasks((current) => current.map((task) => task.id === id ? updated : task));
    } catch (error) { setMessage(error instanceof Error ? error.message : 'Training task could not be completed'); }
  }

  const unreadCount = notifications.filter((item) => item.status !== 'READ').length;
  const openTasks = tasks.filter((task) => task.status !== 'COMPLETED').length;

  return <main className={styles.page}>
    <header className={styles.header}><div><p className={styles.eyebrow}>Tenant workspace</p><h1>Updates and training</h1><p>Stay current with released documents and complete the training assigned to your role.</p></div><div className={styles.metrics}><span><strong>{unreadCount}</strong> unread updates</span><span><strong>{openTasks}</strong> open training tasks</span></div></header>
    {message && <p className={styles.notice} role="status">{message}</p>}
    <section className={styles.grid}>
      <article className={styles.panel}><div className={styles.panelHeader}><div><p className={styles.sectionLabel}>Document control</p><h2>Notifications</h2></div><span>{notifications.length}</span></div><div className={styles.list}>{notifications.map((item) => <div className={`${styles.notification} ${item.status === 'READ' ? styles.read : ''}`} key={item.id}><div><strong>{item.subject}</strong><p>{item.message}</p><time>{new Date(item.queuedAt).toLocaleDateString()}</time></div>{item.status !== 'READ' && <button type="button" onClick={() => readNotification(item.id)}>Mark read</button>}</div>)}{notifications.length === 0 && <p className={styles.empty}>No document updates yet.</p>}</div></article>
      <article className={styles.panel}><div className={styles.panelHeader}><div><p className={styles.sectionLabel}>Department and HR follow-up</p><h2>Training tasks</h2></div><span>{tasks.length}</span></div><div className={styles.list}>{tasks.map((task) => <div className={styles.task} key={task.id}><div><strong>{task.title}</strong><p>{task.document.controlNumber} · {task.document.title}</p><small>Due: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No due date'}</small></div>{task.status === 'COMPLETED' ? <b className={styles.complete}>Completed</b> : <button type="button" onClick={() => completeTask(task.id)}>Mark complete</button>}</div>)}{tasks.length === 0 && <p className={styles.empty}>No training tasks assigned.</p>}</div></article>
    </section>
  </main>;
}
