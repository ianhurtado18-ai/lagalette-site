import { useEffect, useRef, useState } from 'react'
import { SectionTitle } from '../components/ui/SectionTitle'

export function FeaturePage({ page }) {
  const photos = page.photos ?? []
  const totalPhotos = photos.length
  const galleryPhotos = photos.slice(0, 8)
  const [activePhotoIndex, setActivePhotoIndex] = useState(null)
  const touchStartX = useRef(null)
  const touchStartY = useRef(null)

  const hasActivePhoto = activePhotoIndex !== null

  function closeGallery() {
    setActivePhotoIndex(null)
  }

  function showPreviousPhoto() {
    setActivePhotoIndex((photoIndex) => {
      if (photoIndex === null) {
        return photoIndex
      }

      return photoIndex === 0 ? totalPhotos - 1 : photoIndex - 1
    })
  }

  function showNextPhoto() {
    setActivePhotoIndex((photoIndex) => {
      if (photoIndex === null) {
        return photoIndex
      }

      return photoIndex === totalPhotos - 1 ? 0 : photoIndex + 1
    })
  }

  function handleGalleryTouchStart(event) {
    touchStartX.current = event.touches[0].clientX
    touchStartY.current = event.touches[0].clientY
  }

  function handleGalleryTouchEnd(event) {
    if (touchStartX.current === null || touchStartY.current === null) {
      return
    }

    const swipeDistance = event.changedTouches[0].clientX - touchStartX.current
    const verticalDistance = event.changedTouches[0].clientY - touchStartY.current
    touchStartX.current = null
    touchStartY.current = null

    if (Math.abs(swipeDistance) < 36 || Math.abs(swipeDistance) < Math.abs(verticalDistance) * 1.2) {
      return
    }

    if (swipeDistance > 0) {
      showPreviousPhoto()
    } else {
      showNextPhoto()
    }
  }

  useEffect(() => {
    if (!hasActivePhoto) {
      return
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        closeGallery()
      }

      if (event.key === 'ArrowLeft') {
        setActivePhotoIndex((photoIndex) =>
          photoIndex === 0 ? totalPhotos - 1 : photoIndex - 1,
        )
      }

      if (event.key === 'ArrowRight') {
        setActivePhotoIndex((photoIndex) =>
          photoIndex === totalPhotos - 1 ? 0 : photoIndex + 1,
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [hasActivePhoto, totalPhotos])

  return (
    <article className="page split-menu-page single-feature-page">
      <header className="menu-page-hero single-feature-hero">
        <div className="menu-page-hero-content single-feature-hero-content">
          <SectionTitle
            as="h1"
            title={page.title}
            description={page.description}
          />
        </div>
      </header>

      <section className="single-feature-section">
        <div className="single-feature-copy">
          <p>{page.body}</p>
        </div>

        <div className="single-feature-gallery" aria-label={page.imageAlt}>
          <div className="menu-photo-grid">
            {galleryPhotos.map((photo, photoIndex) => (
              <button
                className="menu-photo-placeholder"
                key={photo}
                type="button"
                onClick={() => setActivePhotoIndex(photoIndex)}
              >
                <img src={photo} alt={`${page.title} ${photoIndex + 1}`} />
                <span>Foto {photoIndex + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {hasActivePhoto && (
        <div className="gallery-modal" role="dialog" aria-modal="true">
          <button
            className="gallery-backdrop"
            type="button"
            aria-label="Fechar galeria"
            onClick={closeGallery}
          />
          <div
            className="gallery-content"
            onTouchStart={handleGalleryTouchStart}
            onTouchEnd={handleGalleryTouchEnd}
          >
            <button
              type="button"
              className="gallery-close"
              aria-label="Fechar galeria"
              onClick={closeGallery}
            />
            <button
              type="button"
              className="gallery-nav-button gallery-nav-previous"
              aria-label="Foto anterior"
              onClick={showPreviousPhoto}
            >
              <span aria-hidden="true">{'\u2039'}</span>
            </button>
            <div className="gallery-image-placeholder">
              <img
                src={photos[activePhotoIndex]}
                alt={`${page.title} ${activePhotoIndex + 1}`}
              />
            </div>
            <button
              type="button"
              className="gallery-nav-button gallery-nav-next"
              aria-label="Proxima foto"
              onClick={showNextPhoto}
            >
              <span aria-hidden="true">{'\u203a'}</span>
            </button>
          </div>
        </div>
      )}
    </article>
  )
}
