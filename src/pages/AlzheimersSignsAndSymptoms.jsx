import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './AlzheimersSignsAndSymptoms.module.css'
import heroSignsSymptoms from '../assets/images/hero-signs-symptoms.jpg'
import sectionCausesImg from '../assets/images/section-causes.jpg'
import sectionLifestyleImg from '../assets/images/section-lifestyle.jpg'

function useInView(threshold = 0.12) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

const causes = [
  {
    icon: '🧠',
    title: "Alzheimer's Disease",
    desc: "Abnormal protein deposits — amyloid plaques and neurofibrillary tangles — disrupt communication between brain cells until neurons die over time.",
  },
  {
    icon: '🩸',
    title: 'Vascular Dementia',
    desc: "Reduced blood flow to the brain — often from strokes or narrowed vessels — starves neurons of oxygen and nutrients.",
  },
  {
    icon: '✨',
    title: 'Lewy Body Dementia',
    desc: "Abnormal protein clumps (alpha-synuclein) form inside nerve cells, causing both cognitive decline and motor symptoms.",
  },
  {
    icon: '🔷',
    title: 'Frontotemporal Dementia',
    desc: "Nerve cell damage in the frontal and temporal lobes causes personality and language changes — sometimes before memory is affected.",
  },
  {
    icon: '🔀',
    title: 'Mixed Dementia',
    desc: "Multiple dementia pathologies occurring together — most often Alzheimer's combined with vascular damage — more common than once thought.",
  },
]

const timelineStages = [
  {
    number: '01',
    title: 'Preclinical',
    desc: 'Brain changes — including protein buildup — begin silently, 15–20 years before any symptoms appear. Daily function remains fully intact.',
  },
  {
    number: '02',
    title: 'Mild Cognitive Impairment',
    desc: 'Subtle memory or thinking changes become noticeable to the person or those close to them, but daily life remains manageable.',
  },
  {
    number: '03',
    title: 'Early Dementia',
    desc: 'Symptoms become apparent — difficulty recalling recent conversations, misplacing objects, and trouble planning ahead.',
  },
  {
    number: '04',
    title: 'Progression',
    desc: 'Symptoms gradually expand to affect memory, reasoning, mood, and eventually physical abilities. The pace varies significantly.',
  },
]

const risks = [
  { icon: '🕐', label: 'Advancing Age' },
  { icon: '🧬', label: 'Genetics & Family History' },
  { icon: '❤️', label: 'Cardiovascular Health' },
  { icon: '🤕', label: 'Prior Head Injuries' },
  { icon: '🚬', label: 'Smoking & Alcohol' },
  { icon: '🏃', label: 'Physical Inactivity' },
  { icon: '🤝', label: 'Social Isolation' },
  { icon: '👂', label: 'Untreated Hearing Loss' },
]

const signs = [
  {
    icon: '🧠',
    title: 'Memory Loss That Disrupts Daily Life',
    description:
      'Forgetting recently learned information, important dates, or events — and increasingly relying on memory aids or family for things managed independently before.',
  },
  {
    icon: '📋',
    title: 'Challenges in Planning or Problem Solving',
    description:
      'Difficulty following a familiar recipe, keeping track of monthly bills, or concentrating on tasks that involve multiple steps or numbers.',
  },
  {
    icon: '🍳',
    title: 'Difficulty Completing Familiar Tasks',
    description:
      'Trouble driving to a familiar location, managing a work project, or remembering the rules of a game played for years.',
  },
  {
    icon: '💬',
    title: 'New Problems with Words',
    description:
      'Stopping mid-sentence without knowing how to continue, struggling to name familiar objects, or repeating themselves frequently in conversation.',
  },
  {
    icon: '⚖️',
    title: 'Decreased or Poor Judgment',
    description:
      'Making unusual financial decisions, paying less attention to personal grooming, or showing difficulty weighing risks and consequences.',
  },
  {
    icon: '😔',
    title: 'Changes in Mood and Personality',
    description:
      'Becoming confused, suspicious, depressed, or anxious — particularly in unfamiliar situations or when their usual routines are disrupted.',
  },
]

const lifestyle = [
  {
    icon: '😴',
    title: 'Sleep',
    teaser: 'Quality sleep helps the brain clear toxic proteins that accumulate during the day.',
    desc: "Poor or fragmented sleep allows harmful proteins to build up in the brain rather than being cleared during rest — a key pathway linked to Alzheimer's risk.",
    bullets: [
      'Aim for 7–9 hours of uninterrupted sleep per night',
      'Diagnose and treat sleep apnea or other sleep disorders',
      'Keep a consistent sleep and wake schedule, even on weekends',
      'Limit screens and caffeine in the two hours before bed',
    ],
  },
  {
    icon: '🥗',
    title: 'Nutrition',
    teaser: 'A plant-forward diet rich in healthy fats supports brain cell function and reduces inflammation.',
    desc: 'Diets like the Mediterranean or MIND diet have been associated with slower cognitive decline, likely by reducing inflammation and supporting vascular health.',
    bullets: [
      'Prioritize berries, leafy greens, olive oil, nuts, and fatty fish',
      'Limit ultra-processed foods, added sugar, and trans fats',
      'Stay well-hydrated — even mild dehydration affects cognition',
      'Moderate alcohol consumption; avoid heavy or binge drinking',
    ],
  },
  {
    icon: '🧩',
    title: 'Cognitive Stimulation',
    teaser: 'Regularly challenging the brain builds cognitive reserve — a buffer against decline.',
    desc: "Cognitive reserve is the brain's resilience developed through lifelong mental engagement. A larger reserve means symptoms may appear later, even when physical changes have begun.",
    bullets: [
      'Read regularly, write, or learn a new language or instrument',
      'Engage in puzzles, strategy games, or creative activities',
      'Take a class or pursue a challenging hobby',
      'Vary your activities — novelty is particularly valuable',
    ],
  },
  {
    icon: '🏃',
    title: 'Physical Exercise',
    teaser: 'Aerobic activity increases blood flow to the brain and promotes new neuron growth.',
    desc: 'Regular physical exercise is one of the most consistently supported lifestyle factors for reducing dementia risk — through inflammation reduction, neurogenesis, and improved vascular health.',
    bullets: [
      'Aim for 150 minutes of moderate aerobic activity per week',
      'Include strength training 2–3 times per week',
      'Walking, swimming, and dancing are especially beneficial',
      'Even light movement reduces risk compared to prolonged inactivity',
    ],
  },
  {
    icon: '❤️',
    title: 'Emotional Health & Social Connection',
    teaser: 'Chronic stress and social isolation are established, modifiable risk factors for decline.',
    desc: 'Loneliness and chronic psychological stress trigger inflammatory responses that, over time, may accelerate cognitive decline. Strong social bonds appear protective.',
    bullets: [
      'Prioritize regular, meaningful social engagement',
      'Practice stress reduction through mindfulness, meditation, or therapy',
      'Seek treatment for depression and anxiety — both are modifiable risk factors',
      'Volunteer or participate in community and group activities',
    ],
  },
]

export default function AlzheimersSignsAndSymptoms() {
  const [openIdx, setOpenIdx] = useState(null)
  const [causesRef, causesInView] = useInView()
  const [timelineRef, timelineInView] = useInView(0.08)
  const [risksRef, risksInView] = useInView()
  const [warningRef, warningInView] = useInView()
  const [lifestyleRef, lifestyleInView] = useInView()

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
            Understanding Alzheimer's &amp; Dementia
          </h1>
          <p className={`section-subtext ${styles.subtext}`}>
            Early detection is the first step toward preserving the memories that define our lives. Here you'll find clear, compassionate guidance — from the earliest warning signs to protective lifestyle choices.
          </p>
        </div>
      </section>

      {/* ─── What Is Dementia? ────────────────────────────────────── */}
      <section className={styles.intro}>
        <div className="container">
          <div className={styles.introInner}>
            <span className={styles.eyebrow}>The Starting Point</span>
            <h2 className={`section-heading ${styles.introHeading}`}>What Is Dementia?</h2>
            <p className={styles.introText}>
              Dementia is not a single disease but a broad umbrella term for symptoms affecting memory, thinking, reasoning, and language severely enough to interfere with daily life. Several conditions can cause it — but one accounts for the vast majority of cases.
            </p>
            <div className={styles.statCallout}>
              <span className={styles.statNumber}>60–80%</span>
              <p className={styles.statCaption}>of all dementia cases are caused by Alzheimer's disease</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What Causes Dementia? ────────────────────────────────── */}
      <section
        ref={causesRef}
        className={`section ${styles.causesSection} ${styles.fadeSection} ${causesInView ? styles.visible : ''}`}
      >
        <div className="container">
          <div className={styles.causesLead}>
            <div className={styles.causesLeadText}>
              <span className={styles.eyebrow}>Underlying Conditions</span>
              <h2 className={`section-heading ${styles.sectionHeading}`}>What Causes Dementia?</h2>
              <p className={styles.causesLeadDesc}>
                Dementia symptoms can stem from several different underlying diseases, each affecting the brain through distinct mechanisms. Understanding the cause matters for treatment, prognosis, and the kind of care that helps most.
              </p>
            </div>
            <div className={styles.causesImgWrap}>
              <img
                src={sectionCausesImg}
                alt="Brain health and neurological research"
                className={styles.causesImg}
                loading="lazy"
              />
            </div>
          </div>
          <div className={styles.causesGrid}>
            {causes.map(({ icon, title, desc }) => (
              <div key={title} className={styles.causeCard}>
                <span className={styles.causeIcon} aria-hidden="true">{icon}</span>
                <h3 className={styles.causeTitle}>{title}</h3>
                <p className={styles.causeDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How Does It Start? — Timeline ────────────────────────── */}
      <section className={`section ${styles.timelineSection}`}>
        <div className="container">
          <div className={styles.timelineHeader}>
            <span className={styles.eyebrow}>Disease Progression</span>
            <h2 className={`section-heading ${styles.sectionHeading}`}>How Does It Start?</h2>
            <p className={styles.timelineSubtext}>
              Alzheimer's follows a long, slow progression — often beginning decades before a diagnosis is possible.
            </p>
          </div>
          <div
            ref={timelineRef}
            className={`${styles.timelineTrack} ${timelineInView ? styles.timelineVisible : ''}`}
          >
            {timelineStages.map((stage, i) => (
              <div
                key={i}
                className={styles.timelineStage}
                style={{ '--stage-delay': `${i * 180}ms` }}
              >
                <div className={styles.stageDot}>
                  <span className={styles.stageDotNumber}>{stage.number}</span>
                </div>
                <div className={styles.stageBody}>
                  <h3 className={styles.stageTitle}>{stage.title}</h3>
                  <p className={styles.stageDesc}>{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Risk Factors ─────────────────────────────────────────── */}
      <section
        ref={risksRef}
        className={`section ${styles.risksSection} ${styles.fadeSection} ${risksInView ? styles.visible : ''}`}
      >
        <div className="container">
          <div className={styles.risksHeader}>
            <span className={styles.eyebrow}>Know the Factors</span>
            <h2 className={`section-heading ${styles.sectionHeading}`}>Risk Factors</h2>
            <p className={styles.risksSubtext}>
              Age is the strongest known risk factor — but dementia is not an inevitable part of aging. Many risk factors are modifiable.
            </p>
          </div>
          <div className={styles.riskPills}>
            {risks.map(({ icon, label }) => (
              <span key={label} className={styles.riskPill}>
                <span aria-hidden="true">{icon}</span> {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Early Warning Signs ──────────────────────────────────── */}
      <section
        ref={warningRef}
        className={`section ${styles.warningSection} ${styles.fadeSection} ${warningInView ? styles.visible : ''}`}
      >
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>What to Watch For</span>
            <h2 className={`section-heading ${styles.sectionHeading}`}>Early Warning Signs</h2>
            <p className={`section-subtext ${styles.sectionSubtext}`}>
              These signs go beyond ordinary forgetfulness. If several are present and interfering with daily life, consulting a doctor is an important next step.
            </p>
          </div>
          <div className={styles.signsGrid}>
            {signs.map(({ title, description, icon }) => (
              <div key={title} className={styles.signCard}>
                <div className={styles.signIcon} aria-hidden="true">{icon}</div>
                <h3 className={styles.signTitle}>{title}</h3>
                <p className={styles.signDesc}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Lifestyle Factors ────────────────────────────────────── */}
      <section
        ref={lifestyleRef}
        className={`section ${styles.lifestyleSection} ${styles.fadeSection} ${lifestyleInView ? styles.visible : ''}`}
      >
        <div className="container">
          <div className={styles.lifestyleGrid}>
            <div className={styles.lifestyleContent}>
              <div className={styles.sectionHeader}>
                <span className={styles.eyebrow}>Protective Choices</span>
                <h2 className={`section-heading ${styles.sectionHeading}`}>
                  Lifestyle Factors That Support Brain Health
                </h2>
                <p className={`section-subtext ${styles.sectionSubtext}`}>
                  While there's no guaranteed prevention, research consistently shows that certain habits meaningfully reduce risk and support cognitive resilience.
                </p>
              </div>
              <div className={styles.accordion}>
                {lifestyle.map(({ icon, title, teaser, desc, bullets }, i) => {
                  const isOpen = openIdx === i
                  return (
                    <div key={i} className={`${styles.accordionItem} ${isOpen ? styles.accordionItemOpen : ''}`}>
                      <button
                        className={styles.accordionTrigger}
                        onClick={() => setOpenIdx(isOpen ? null : i)}
                        aria-expanded={isOpen}
                      >
                        <span className={styles.accordionTriggerLeft}>
                          <span className={styles.accordionIcon} aria-hidden="true">{icon}</span>
                          <span className={styles.accordionTitleGroup}>
                            <span className={styles.accordionTitle}>{title}</span>
                            {!isOpen && (
                              <span className={styles.accordionTeaser}>{teaser}</span>
                            )}
                          </span>
                        </span>
                        <span
                          className={`${styles.accordionChevron} ${isOpen ? styles.chevronOpen : ''}`}
                          aria-hidden="true"
                        >›</span>
                      </button>
                      <div className={`${styles.accordionBody} ${isOpen ? styles.accordionBodyOpen : ''}`}>
                        <div className={styles.accordionInner}>
                          <div className={styles.accordionPad}>
                            <p className={styles.accordionDesc}>{desc}</p>
                            <ul className={styles.accordionList}>
                              {bullets.map((b, j) => <li key={j}>{b}</li>)}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className={styles.lifestyleImgWrap}>
              <img
                src={sectionLifestyleImg}
                alt="Person engaging in healthy lifestyle activities"
                className={styles.lifestyleImg}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <p className={styles.ctaText}>
              If you or a loved one are experiencing these signs, you are not alone.
            </p>
            <Link to="/support-our-cause" className="btn-primary">
              Find Support
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
