import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './Carousel.module.css'

const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const FOCUSABLE_SELECTOR =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

// Carousel of caregiver story cards. Each slide is { id, name, relationship,
// quote, image, tag?, modalTitle, paragraphs[] }. Clicking a card opens a
// full-story modal — a long-form reader with prev/next navigation between
// stories, not just an image lightbox.
export default function Carousel({ slides }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  })

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Modal state: which story is open, and whether it's mid-close animation.
  const [activeIndex, setActiveIndex] = useState(null)
  const [closing, setClosing] = useState(false)
  const isOpen = activeIndex !== null

  const triggerRef = useRef(null) // element to return focus to on close
  const modalRef = useRef(null)
  const closeBtnRef = useRef(null)
  const closeTimerRef = useRef(null)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const openStory = (index, triggerEl) => {
    triggerRef.current = triggerEl
    setClosing(false)
    setActiveIndex(index)
  }

  const requestClose = useCallback(() => {
    if (prefersReducedMotion()) {
      setActiveIndex(null)
      return
    }
    setClosing(true)
    closeTimerRef.current = window.setTimeout(() => {
      setActiveIndex(null)
      setClosing(false)
    }, 200)
  }, [])

  const goPrev = useCallback(() => {
    setActiveIndex(i => (i - 1 + slides.length) % slides.length)
  }, [slides.length])

  const goNext = useCallback(() => {
    setActiveIndex(i => (i + 1) % slides.length)
  }, [slides.length])

  // Focus the close button once, the moment the modal opens (not on every
  // prev/next navigation while it stays open).
  useEffect(() => {
    if (isOpen) closeBtnRef.current?.focus()
  }, [isOpen])

  // Escape/arrow keys, focus trap, background scroll lock, and returning
  // focus to the triggering card — all scoped to the modal being open.
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        requestClose()
        return
      }
      if (e.key === 'ArrowLeft') {
        goPrev()
        return
      }
      if (e.key === 'ArrowRight') {
        goNext()
        return
      }
      if (e.key === 'Tab') {
        const focusables = modalRef.current?.querySelectorAll(FOCUSABLE_SELECTOR)
        if (!focusables || focusables.length === 0) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = prevOverflow
      triggerRef.current?.focus()
    }
  }, [isOpen, requestClose, goPrev, goNext])

  useEffect(() => () => window.clearTimeout(closeTimerRef.current), [])

  const activeStory = activeIndex !== null ? slides[activeIndex] : null

  return (
    <div className={styles.root}>
      <div className={styles.viewport} ref={emblaRef} aria-hidden={isOpen || undefined}>
        <div className={styles.track}>
          {slides.map((slide, i) => (
            <div key={slide.id ?? i} className={styles.slide}>
              <button
                className={styles.card}
                onClick={(e) => openStory(i, e.currentTarget)}
                aria-haspopup="dialog"
                aria-label={`Read ${slide.name}’s full story`}
                tabIndex={isOpen ? -1 : undefined}
              >
                <div className={styles.cardImageWrap}>
                  <img
                    src={slide.image}
                    alt={slide.name}
                    className={styles.cardImage}
                    loading="lazy"
                  />
                  <span className={styles.cardNumber}>{String(i + 1).padStart(2, '0')}</span>
                  {slide.tag && <span className={styles.cardTag}>{slide.tag}</span>}
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{slide.name}</h3>
                  <p className={styles.cardRelationship}>{slide.relationship}</p>
                  <p className={styles.cardQuote}>“{slide.quote}”</p>
                  <span className={styles.cardCta}>Read full story →</span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.controls} aria-hidden={isOpen || undefined}>
        <button
          className={styles.navBtn}
          onClick={scrollPrev}
          aria-label="Previous story"
          tabIndex={isOpen ? -1 : undefined}
        >
          <ChevronLeft />
        </button>
        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === selectedIndex ? styles.dotActive : ''}`}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              tabIndex={isOpen ? -1 : undefined}
            />
          ))}
        </div>
        <button
          className={styles.navBtn}
          onClick={scrollNext}
          aria-label="Next story"
          tabIndex={isOpen ? -1 : undefined}
        >
          <ChevronRight />
        </button>
      </div>

      {/* Full-story modal */}
      {activeStory && (
        <div
          className={`${styles.modalOverlay} ${closing ? styles.modalOverlayClosing : ''}`}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) requestClose()
          }}
        >
          <div
            className={`${styles.modalCard} ${closing ? styles.modalCardClosing : ''}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="story-modal-title"
            ref={modalRef}
          >
            <header className={styles.modalHeader}>
              <div className={styles.modalHeaderText}>
                <span className={styles.modalEyebrow}>
                  Story {activeIndex + 1} of {slides.length} · {activeStory.relationship}
                </span>
                <h2 id="story-modal-title" className={styles.modalTitle}>
                  {activeStory.modalTitle}
                </h2>
              </div>
              <button
                className={styles.modalClose}
                onClick={requestClose}
                aria-label="Close story"
                ref={closeBtnRef}
              >
                <CloseIcon />
              </button>
            </header>

            <div className={styles.modalBody}>
              {activeStory.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <footer className={styles.modalFooter}>
              <button className={styles.modalNavBtn} onClick={goPrev} aria-label="Read previous caregiver's story">
                <ChevronLeft />
                <span>Previous</span>
              </button>
              <span className={styles.modalProgress}>
                {String(activeIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
              <button className={styles.modalNavBtn} onClick={goNext} aria-label="Read next caregiver's story">
                <span>Next</span>
                <ChevronRight />
              </button>
            </footer>
          </div>
        </div>
      )}
    </div>
  )
}
