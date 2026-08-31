import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import logo from '../assets/images/logo.jpg'

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-label="Instagram">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const navLinks = [
  { to: '/',                              label: 'Home' },
  { to: '/alzheimers-signs-and-symptoms', label: "Alzheimer's Signs and Symptoms" },
  { to: '/caregiver-stories',             label: 'Caregiver Stories' },
  { to: '/support-our-cause',             label: 'Support Our Cause' },
  { to: '/about-us',                      label: 'About Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Humans for Memories" className={styles.logoImg} />
        </Link>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <a
            href="https://www.instagram.com/humansformemories"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.igLink}
            aria-label="Join our community on Instagram"
            onClick={() => setMenuOpen(false)}
          >
            <InstagramIcon />
            <span>Join our community</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
