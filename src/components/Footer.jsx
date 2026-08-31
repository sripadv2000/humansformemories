import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import logo from '../assets/images/logo.jpg'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="Humans for Memories" className={styles.logoImg} />
          </Link>
          <p className={styles.tagline}>
            Bridging early detection with compassionate care and community action.
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Get in Touch</h4>
            <a href="mailto:aadithmaganti@gmail.com" className={styles.columnLink}>
              aadithmaganti@gmail.com
            </a>
            <a href="tel:+17745787853" className={styles.columnLink}>
              +1 (774) 578-7853
            </a>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Our Mission</h4>
            <p className={styles.columnText}>
              Bridging early detection with compassionate care and community action.
            </p>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Location</h4>
            <p className={styles.columnText}>
              331 Spring St<br />
              Shrewsbury, MA 01545
            </p>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 Humans for Memories Initiative. All rights reserved.</p>
      </div>
    </footer>
  )
}
