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
    <>
      {/* Fixed backdrop — sits below nav (top: 72px), never extends behind it */}
      <div className={styles.backdrop} aria-hidden="true">
        <img src={heroHome} alt="" />
      </div>

      <div className={styles.page}>
        {/* ─── Hero ───────────────────────────────────────────────── */}
        {/* Transparent tile occupying the viewport space below the nav */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className={styles.heroHeading}>
                Preserving the<br />Legacy of Memory
              </h1>
              <p className={styles.heroIntro}>
                Our mission is to highlight caregivers’ voices through personal stories, bringing visibility to their lived experiences and gaps in dementia care, policy, and community support.
              </p>
              <blockquote className={styles.heroQuote}>
                "We believe that every memory is a story worth telling and every person is a legacy worth honoring."
              </blockquote>
            </div>
          </div>
        </section>

        {/* ─── Ticker ─────────────────────────────────────────────── */}
        <div className={styles.ticker} aria-hidden="true">
          <div className={styles.tickerTrack}>
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className={styles.tickerItem}>
                Early Detection <span className={styles.tickerDot}>•</span> Compassionate Care
              </span>
            ))}
          </div>
        </div>

        {/* ─── Cards ──────────────────────────────────────────────── */}
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
    </>
  )
}
