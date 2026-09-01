import styles from './AboutUs.module.css'
import founderPhoto from '../assets/images/about-founder.jpg'
import teamMember1 from '../assets/images/team-member-1.jpg'
import teamMember2 from '../assets/images/team-member-2.jpg'
import teamMember3 from '../assets/images/team-member-3.jpg'

const team = [
  {
    photo: teamMember1,
    name: '[Team Member Name]',
    role: '[Title / Role]',
  },
  {
    photo: teamMember2,
    name: '[Team Member Name]',
    role: '[Title / Role]',
  },
  {
    photo: teamMember3,
    name: '[Team Member Name]',
    role: '[Title / Role]',
  },
]

export default function AboutUs() {
  return (
    <div className={styles.page}>
      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>Who We Are</span>
          <h1 className={`section-heading ${styles.heading}`}>About Us</h1>
          <p className={`section-subtext ${styles.subtext}`}>
            A community built on love, memory, and the belief that no caregiver should walk this road alone.
          </p>
        </div>
      </section>

      {/* ─── Our Story ────────────────────────────────────────────── */}
      <section className={`section ${styles.story}`}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyPhoto}>
              <img
                src={founderPhoto}
                alt="[Founder name]"
                className={styles.founderImg}
                loading="lazy"
              />
            </div>
            <div className={styles.storyText}>
              <span className={styles.sectionEyebrow}>Our Story</span>
              <h2 className={`section-heading ${styles.storyHeading}`}>
                A Personal Mission Born from Love
              </h2>
              <p className={styles.storyPara}>
                [Paragraph 1 — Introduce yourself: your name, and the moment Alzheimer's entered your life. Perhaps it was watching a grandparent or parent slowly lose their hold on the names and faces they'd known for decades. Describe what that experience felt like — not just the grief, but the confusion, the helplessness, the desperate search for guidance that often led nowhere.]
              </p>
              <p className={styles.storyPara}>
                [Paragraph 2 — Describe the gap you witnessed: the space between an early diagnosis and any real, compassionate community support. Families left to navigate a complex disease alone, caregivers burning out in silence, and patients whose stories deserved to be heard but rarely were. This is where the motivation for Humans for Memories took root.]
              </p>
              <p className={styles.storyPara}>
                [Paragraph 3 — Describe what Humans for Memories is doing: gathering caregiver stories as a source of strength and solidarity, raising awareness about early warning signs, and building a community where every memory — no matter how fragile — and every person carrying one is honored. This is where the mission becomes the promise.]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Team ─────────────────────────────────────────────────── */}
      <section className={`section ${styles.team}`}>
        <div className="container">
          <div className={styles.teamHeader}>
            <span className={styles.sectionEyebrow}>The People Behind the Mission</span>
            <h2 className={`section-heading ${styles.teamHeading}`}>Meet Our Team</h2>
          </div>
          <div className={styles.teamGrid}>
            {team.map(({ photo, name, role }, i) => (
              <div key={i} className={styles.memberCard}>
                <div className={styles.memberPhotoWrap}>
                  <img src={photo} alt={name} className={styles.memberPhoto} loading="lazy" />
                </div>
                <div className={styles.memberInfo}>
                  <p className={styles.memberName}>{name}</p>
                  <p className={styles.memberRole}>{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
