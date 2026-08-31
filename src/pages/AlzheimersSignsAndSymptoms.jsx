import styles from './AlzheimersSignsAndSymptoms.module.css'
import heroSignsSymptoms from '../assets/images/hero-signs-symptoms.jpg'

const signs = [
  {
    title: 'Memory Loss',
    description:
      'Difficulty remembering recent events, appointments, or conversations, which can interfere with daily activities.',
    icon: '🧠',
  },
  {
    title: 'Confusion',
    description:
      'Getting lost in familiar places or repeatedly asking the same questions, indicating a growing disorientation.',
    icon: '🗺',
  },
  {
    title: 'Language Issues',
    description:
      'Struggling to find the right words during conversations, or misusing words, which can make communication difficult.',
    icon: '💬',
  },
  {
    title: 'Personality Shifts',
    description:
      'Sudden mood swings, increased irritability, or a loss of interest in activities they once enjoyed.',
    icon: '🌤',
  },
  {
    title: 'Visual Problems',
    description:
      'Difficulty judging distances or colors, which can lead to problems with walking or driving.',
    icon: '👁',
  },
  {
    title: 'Disorientation',
    description:
      'Being unable to tell time or the day of the week, which can be a significant indicator of cognitive decline.',
    icon: '🕰',
  },
]

export default function AlzheimersSignsAndSymptoms() {
  return (
    <div className={styles.page}>
      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroImageWrap}>
          <img
            src={heroSignsSymptoms}
            alt="Elderly person looking peacefully out of a window"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroText}>
          <span className={styles.eyebrow}>Awareness &amp; Education</span>
          <h1 className={`section-heading ${styles.heading}`}>
            Early Signs of Alzheimer's
          </h1>
          <p className={`section-subtext ${styles.subtext}`}>
            We believe that early detection is the first step toward preserving the precious memories that define our lives. By recognizing the subtle changes in memory, language, and behavior, we empower families to bridge the gap between diagnosis and compassionate care.
          </p>
        </div>
      </section>

      {/* ─── Signs Grid ───────────────────────────────────────────── */}
      <section className={`section ${styles.signsSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>What to Watch For</span>
            <h2 className={`section-heading ${styles.sectionTitle}`}>
              Early Warning Signs
            </h2>
          </div>
          <div className={styles.grid}>
            {signs.map(({ title, description, icon }) => (
              <div key={title} className={styles.card}>
                <div className={styles.cardIcon} aria-hidden="true">
                  {icon}
                </div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDesc}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA strip ────────────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <p className={styles.ctaText}>
              If you or a loved one are experiencing these signs, you are not alone.
            </p>
            <a href="/support-our-cause" className="btn-primary">
              Find Support
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
