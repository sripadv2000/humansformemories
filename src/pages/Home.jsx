import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import heroHome from '../assets/images/hero-home.jpg'
import cardSignsSymptoms from '../assets/images/card-signs-symptoms.jpg'
import cardCaregiverStories from '../assets/images/card-caregiver-stories.jpg'
import cardSupportCause from '../assets/images/card-support-cause.jpg'

const cards = [
  {
    title: 'Signs & Symptoms',
    to: '/alzheimers-signs-and-symptoms',
    image: cardSignsSymptoms,
    alt: 'Person looking thoughtfully out a window',
  },
  {
    title: 'Caregiver Stories',
    to: '/caregiver-stories',
    image: cardCaregiverStories,
    alt: 'Caregiver holding hands with elderly person',
  },
  {
    title: 'Support Our Cause',
    to: '/support-our-cause',
    image: cardSupportCause,
    alt: 'Community gathering in support',
  },
]

export default function Home() {
  return (
    <div className={styles.page}>
      {/* ─── Ticker ───────────────────────────────────────────────── */}
      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.tickerTrack}>
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className={styles.tickerItem}>
              Early Detection <span className={styles.tickerDot}>•</span> Compassionate Care
            </span>
          ))}
        </div>
      </div>

      {/* ─── Mission ──────────────────────────────────────────────── */}
      <section className={`section ${styles.mission}`}>
        <div className="container">
          <div className={styles.missionInner}>
            <span className={styles.missionEyebrow}>Our Mission</span>
            <p className={styles.missionText}>
              We bridge the gap between early detection and compassionate care through patient narratives and community action. Our mission is to ensure that every individual and their family receives the support they deserve.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <img
          src={heroHome}
          alt="Warm light through a window with family photographs"
          className={styles.heroBg}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <blockquote className={styles.heroQuote}>
            "We believe that every memory is a story worth telling and every person is a legacy worth honoring."
          </blockquote>
        </div>
      </section>

      {/* ─── Intro ────────────────────────────────────────────────── */}
      <section className={styles.intro}>
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.introText}>
              <h1 className={`section-heading ${styles.introHeading}`}>
                Preserving the Legacy of Memory
              </h1>
              <p className="section-subtext">
                We bridge the gap between early detection and compassionate care through patient narratives and community action.
              </p>
              <Link to="/support-our-cause" className="btn-primary">
                Join Our Community
              </Link>
            </div>
            <div className={styles.introDecor}>
              <div className={styles.decorCircle} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Cards ────────────────────────────────────────────────── */}
      <section className={`section ${styles.cards}`}>
        <div className="container">
          <div className={styles.cardsGrid}>
            {cards.map(({ title, to, image, alt }) => (
              <div key={to} className={styles.card}>
                <div className={styles.cardImageWrap}>
                  <img src={image} alt={alt} className={styles.cardImage} loading="lazy" />
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{title}</h3>
                  <Link to={to} className={styles.cardLink}>
                    Explore →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
