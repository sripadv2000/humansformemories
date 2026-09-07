import Carousel from '../components/Carousel'
import styles from './CaregiverStories.module.css'
import { CAREGIVER_STORIES } from '../data/caregiverStories'

export default function CaregiverStories() {
  return (
    <div className={styles.page}>
      {/* ─── Hero heading ────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>Real Families, Real Journeys</span>
          <h1 className={`section-heading ${styles.heading}`}>
            Stories of Care
          </h1>
          <p className={`section-subtext ${styles.subtext}`}>
            These are the voices of families walking alongside Dementia and Alzheimer's, caring for a parent, a spouse, a partner of decades.
          </p>
        </div>
      </section>

      {/* ─── Carousel ────────────────────────────────────────────── */}
      <section className={`section ${styles.carouselSection}`}>
        <div className="container">
          <Carousel slides={CAREGIVER_STORIES} />
        </div>
      </section>

      {/* ─── Share Your Story ────────────────────────────────────── */}
      <section className={styles.share}>
        <div className="container">
          <div className={styles.shareInner}>
            <span className={styles.shareEyebrow}>Your Voice Matters</span>
            <h2 className={styles.shareHeading}>
              Your Story Matters
            </h2>
            <p className={styles.shareSubtext}>
              Your journey is a vital part of our collective memory. By sharing your experience as a caregiver, you help another family feel a little less alone.
            </p>
            <a
              href="mailto:humansformemories@gmail.com?subject=My Caregiver Story"
              className={`btn-primary ${styles.shareBtn}`}
            >
              Share Your Story
            </a>
            <p className={styles.shareReassurance}>
              Every story helps another caregiver feel less alone.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
