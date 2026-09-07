import Carousel from '../components/Carousel'
import styles from './CaregiverStories.module.css'
import storyGentleTouch from '../assets/images/story-gentle-touch.jpg'
import storyMorningLight from '../assets/images/story-morning-light.jpg'
import storyNostalgicMoments from '../assets/images/story-nostalgic-moments.jpg'
import storySharedJourney from '../assets/images/story-shared-journey.jpg'
import storyLifelongBond from '../assets/images/story-lifelong-bond.jpg'
import storyCommunityCare from '../assets/images/story-community-care.jpg'

const stories = [
  {
    title: 'The Gentle Touch',
    description: 'A moment of quiet connection and shared memories.',
    image: storyGentleTouch,
  },
  {
    title: 'Morning Light',
    description: 'The small joys that make a caregiver\'s day.',
    image: storyMorningLight,
  },
  {
    title: 'Nostalgic Moments',
    description: 'Finding beauty in the everyday.',
    image: storyNostalgicMoments,
  },
  {
    title: 'The Shared Journey',
    description: 'Walking side by side through life\'s chapters.',
    image: storySharedJourney,
  },
  {
    title: 'A Lifelong Bond',
    description: 'The strength found in the most intimate of moments.',
    image: storyLifelongBond,
  },
  {
    title: 'Community Care',
    description: 'Supporting one another in the journey of Alzheimer\'s.',
    image: storyCommunityCare,
  },
]

export default function CaregiverStories() {
  return (
    <div className={styles.page}>
      {/* ─── Hero heading ────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>From Our Community</span>
          <h1 className={`section-heading ${styles.heading}`}>
            Stories of Care
          </h1>
          <p className={`section-subtext ${styles.subtext}`}>
            Every caregiver carries a story of quiet courage. Explore the moments that define this journey — one memory at a time.
          </p>
        </div>
      </section>

      {/* ─── Carousel ────────────────────────────────────────────── */}
      <section className={`section ${styles.carouselSection}`}>
        <div className="container">
          <Carousel slides={stories} />
        </div>
      </section>

      {/* ─── Share Your Story ────────────────────────────────────── */}
      <section className={`section ${styles.share}`}>
        <div className="container">
          <div className={styles.shareInner}>
            <div className={styles.shareText}>
              <span className={styles.eyebrow}>Your Voice Matters</span>
              <h2 className={`section-heading ${styles.shareHeading}`}>
                Share Your Story
              </h2>
              <p className={`section-subtext ${styles.shareSubtext}`}>
                Your journey is a vital part of our collective memory. By sharing your experiences, you help us build a supportive network of caregivers and patients, ensuring that no one walks this path alone.
              </p>
              <a
                href="mailto:Humansformemories@gmail.com?subject=My Caregiver Story"
                className="btn-primary"
              >
                Submit Story
              </a>
            </div>
            <div className={styles.shareDecor}>
              <div className={styles.decorBox} />
              <div className={styles.decorBoxInner} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
