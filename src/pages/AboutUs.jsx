import styles from './AboutUs.module.css'
import teamAadith from '../assets/images/team-aadith-maganti.jpg'
import teamHavish from '../assets/images/team-havish-thotakura.jpg'
import teamArin from '../assets/images/team-arin-shinde.jpg'

const MISSION_PARAGRAPHS = [
  'Humans for Memories began with a simple idea: listen to the people whose stories are too often unheard.',
  'We believe dementia is more than a diagnosis. Behind every diagnosis is a personal journey, and often a caregiver navigating emotional challenges, changing responsibilities, difficult care decisions, and a complex healthcare system while supporting someone they love.',
  'Through personal interviews, we create a space for caregivers to share their experiences in their own words. Their stories bring attention to the everyday realities of caregiving, including challenges in finding appropriate healthcare, understanding available care options, accessing resources, and receiving the support they and their families need.',
  "By sharing these experiences, we aim to highlight caregivers' voices and bring greater visibility to gaps in dementia care, healthcare access, policy, and community support. We hope these stories not only build awareness and understanding, but also encourage conversations about better healthcare options, stronger caregiver resources, and more compassionate support for families affected by dementia.",
  'At the heart of Humans for Memories is the belief that meaningful change begins with listening. Every story helps us better understand the human experience behind dementia and the needs of those who care for others every day.',
]

const MISSION_TAGLINE = 'One caregiver. One story. One memory at a time.'

const team = [
  {
    photo: teamAadith,
    name: 'Aadith Maganti',
    role: 'President & Co-Founder',
    description:
      "Leading our mission to bring caregivers' stories and experiences into conversations about dementia care.",
  },
  {
    photo: teamHavish,
    name: 'Havish Thotakura',
    role: 'Vice President, Co-Founder',
    description:
      'Championing the voices of caregivers and families to help drive greater awareness and support within the dementia care community.',
  },
  {
    photo: teamArin,
    name: 'Arin Shinde',
    role: 'Vice President, Co-Founder',
    description:
      'Working to connect caregiver stories with the resources, conversations, and communities that can help families feel less alone.',
  },
]

export default function AboutUs() {
  return (
    <div className={styles.page}>
      {/* ─── Mission ──────────────────────────────────────────────── */}
      <section className={`section ${styles.mission}`}>
        <div className="container">
          <div className={styles.missionColumn}>
            {/* <span className={styles.eyebrow}>About Us</span> */}
            <h1 className={`section-heading ${styles.missionHeading}`}>About Us</h1>
            {MISSION_PARAGRAPHS.map((para, i) => (
              <p key={i} className={styles.missionPara}>
                {para}
              </p>
            ))}
          </div>
          <p className={styles.tagline}>{MISSION_TAGLINE}</p>
        </div>
      </section>

      {/* ─── Team ─────────────────────────────────────────────────── */}
      <section className={`section ${styles.team}`}>
        <div className="container">
          <div className={styles.teamHeader}>
            <span className={styles.sectionEyebrow}>The People Behind Humans for Memories</span>
            <h2 className={`section-heading ${styles.teamHeading}`}>Our Team</h2>
          </div>
          <div className={styles.teamList}>
            {team.map(({ photo, name, role, description }) => (
              <div key={name} className={styles.memberTile}>
                <div className={styles.memberPhotoWrap}>
                  <img src={photo} alt={name} className={styles.memberPhoto} loading="lazy" />
                </div>
                <div className={styles.memberInfo}>
                  <p className={styles.memberName}>{name}</p>
                  <p className={styles.memberRole}>{role}</p>
                  <p className={styles.memberDescription}>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
