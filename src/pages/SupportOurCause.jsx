import { useState } from 'react'
import styles from './SupportOurCause.module.css'

// Replace PLACEHOLDER_ID with your actual Formspree form ID
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mwlkvole'

export default function SupportOurCause() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className={styles.page}>
      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>Get Involved</span>
          <h1 className={`section-heading ${styles.heading}`}>
            Join the Initiative
          </h1>
          <p className={`section-subtext ${styles.subtext}`}>
            Be part of our mission to bridge the gap between early detection and compassionate care. Join our community to help us bridge the gap between early detection and compassionate care through patient narratives and community action.
          </p>
        </div>
      </section>

      {/* ─── Form ─────────────────────────────────────────────────── */}
      <section className={`section ${styles.formSection}`}>
        <div className="container">
          <div className={styles.formGrid}>
            <div className={styles.formText}>
              <span className={styles.eyebrow}>Connect With Us</span>
              <h2 className={`section-heading ${styles.formHeading}`}>
                Join Our Community
              </h2>
              <p className={styles.formDesc}>
                Fill in your details below and we'll reach out to welcome you into the Humans for Memories community.
              </p>
              <div className={styles.contactDetail}>
                <span className={styles.contactLabel}>Email</span>
                <a href="mailto:humansformemories@gmail.com" className={styles.contactValue}>
                  humansformemories@gmail.com
                </a>
              </div>
              <div className={styles.contactDetail}>
                <span className={styles.contactLabel}>Phone</span>
                <a href="tel:+17745787853" className={styles.contactValue}>
                  +1 (774) 578-7853
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.field}>
                <label htmlFor="name" className={styles.label}>
                  Full Name <span className={styles.required} aria-label="required">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>
                  Email Address <span className={styles.required} aria-label="required">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>
                  Message <span className={styles.optional}>(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us how you'd like to get involved…"
                  value={form.message}
                  onChange={handleChange}
                  className={`${styles.input} ${styles.textarea}`}
                />
              </div>

              {status === 'success' && (
                <p className={styles.successMsg}>
                  Thank you for joining! We'll be in touch soon.
                </p>
              )}
              {status === 'error' && (
                <p className={styles.errorMsg}>
                  Something went wrong. Please try again or email us directly.
                </p>
              )}

              <button
                type="submit"
                className={`btn-primary ${styles.submitBtn}`}
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending…' : 'Join Us'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ─── Donate ───────────────────────────────────────────────── */}
      <section className={`section ${styles.donate}`}>
        <div className="container">
          <div className={styles.donateInner}>
            <div className={styles.donateText}>
              <span className={styles.eyebrow}>Make a Difference</span>
              <h2 className={`section-heading ${styles.donateHeading}`}>
                Help Us Build Memory Bridges
              </h2>
              <p className={styles.donateDesc}>
                Your generosity funds research, community events, and caregiver support resources that make a tangible difference in the lives of those affected by Alzheimer's.
              </p>
              <a
                href="https://www.gofundme.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Donate via GoFundMe
              </a>
            </div>
            <div className={styles.donateDecor}>
              <div className={styles.decorRing} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
