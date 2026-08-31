import styles from './AboutUs.module.css'

export default function AboutUs() {
  return (
    <div className={styles.page}>
      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>Who We Are</span>
          <h1 className={`section-heading ${styles.heading}`}>About Us</h1>
          <p className={`section-subtext ${styles.subtext}`}>
            Content coming soon — this page is ready for you to fill in.
          </p>
        </div>
      </section>

      {/* ─── Placeholder body ─────────────────────────────────────── */}
      <section className={`section ${styles.body}`}>
        <div className="container">
          <div className={styles.placeholder}>
            <div className={styles.placeholderImage} aria-hidden="true" />
            <div className={styles.placeholderLines}>
              <div className={styles.line} style={{ width: '80%' }} />
              <div className={styles.line} style={{ width: '65%' }} />
              <div className={styles.line} style={{ width: '72%' }} />
              <div className={styles.line} style={{ width: '55%' }} />
            </div>
          </div>

          <div className={styles.comingSoon}>
            <span className={styles.comingSoonBadge}>Coming Soon</span>
            <p className={styles.comingSoonText}>
              We're working on sharing our story. Check back soon to learn about the people behind the mission.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
