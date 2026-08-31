import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
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

export default function Carousel({ slides }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  })

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [lightbox, setLightbox] = useState(null)

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

  // Lightbox keyboard navigation
  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowLeft') setLightbox(i => (i - 1 + slides.length) % slides.length)
      if (e.key === 'ArrowRight') setLightbox(i => (i + 1) % slides.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, slides.length])

  const lightboxSlide = lightbox !== null ? slides[lightbox] : null

  return (
    <div className={styles.root}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.track}>
          {slides.map((slide, i) => (
            <div key={i} className={styles.slide}>
              <button
                className={styles.card}
                onClick={() => setLightbox(i)}
                aria-label={`Open story: ${slide.title}`}
              >
                <div className={styles.cardImageWrap}>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className={styles.cardImage}
                    loading="lazy"
                  />
                  <span className={styles.cardNumber}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{slide.title}</h3>
                  <p className={styles.cardDesc}>{slide.description}</p>
                  <span className={styles.cardCta}>Read story →</span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.controls}>
        <button
          className={styles.navBtn}
          onClick={scrollPrev}
          aria-label="Previous story"
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
            />
          ))}
        </div>
        <button
          className={styles.navBtn}
          onClick={scrollNext}
          aria-label="Next story"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Lightbox */}
      {lightboxSlide && (
        <div
          className={styles.lightboxOverlay}
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightboxSlide.title}
        >
          <div className={styles.lightboxContent} onClick={e => e.stopPropagation()}>
            <button
              className={styles.lightboxClose}
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <CloseIcon />
            </button>
            <button
              className={`${styles.lightboxNav} ${styles.lightboxNavPrev}`}
              onClick={() => setLightbox(i => (i - 1 + slides.length) % slides.length)}
              aria-label="Previous"
            >
              <ChevronLeft />
            </button>
            <button
              className={`${styles.lightboxNav} ${styles.lightboxNavNext}`}
              onClick={() => setLightbox(i => (i + 1) % slides.length)}
              aria-label="Next"
            >
              <ChevronRight />
            </button>
            <img
              src={lightboxSlide.image}
              alt={lightboxSlide.title}
              className={styles.lightboxImage}
            />
            <div className={styles.lightboxBody}>
              <span className={styles.lightboxNumber}>
                {String(lightbox + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
              <h2 className={styles.lightboxTitle}>{lightboxSlide.title}</h2>
              <p className={styles.lightboxDesc}>{lightboxSlide.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
