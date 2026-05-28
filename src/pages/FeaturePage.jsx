import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { SectionTitle } from '../components/ui/SectionTitle'
import { useGalleryMedia } from '../hooks/useGalleryMedia'

export function FeaturePage({ page }) {
  const photos = useGalleryMedia(page.photos)
  const totalPhotos = photos.length
  const galleryPhotos = photos.slice(0, page.galleryLimit ?? 8)
  const [activePhotoIndex, setActivePhotoIndex] = useState(null)
  const touchStartX = useRef(null)
  const touchStartY = useRef(null)

  const hasActivePhoto = activePhotoIndex !== null
  const isGalleryLeftLayout = page.featureLayout === 'gallery-left'

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

  function renderClosing() {
    if (!page.closingLinks?.length) {
      return page.closing
    }

    const linkedLabels = page.closingLinks.map((link) => link.label)
    const pattern = new RegExp(`(${linkedLabels.join('|')})`, 'g')

    return page.closing.split(pattern).map((part, index) => {
      const link = page.closingLinks.find((item) => item.label === part)

      if (!link) {
        return part
      }

      return (
        <Link key={`${link.to}-${index}`} to={link.to}>
          {part}
        </Link>
      )
    })
  }

  function renderGallery() {
    return (
      <div className="single-feature-gallery" aria-label={page.imageAlt}>
        <div className="menu-photo-grid">
          {galleryPhotos.map((photo, photoIndex) => (
            <button
              className={`menu-photo-placeholder ${photo.type === 'video' ? 'is-video' : ''}`}
              key={photo.src}
              type="button"
              onClick={() => setActivePhotoIndex(photoIndex)}
            >
              <img src={photo.preview} alt={`${page.title} ${photoIndex + 1}`} />
              {photo.type === 'video' && <span className="menu-video-play" aria-hidden="true" />}
              <span>{photo.type === 'video' ? 'Vídeo' : 'Foto'} {photoIndex + 1}</span>
            </button>
          ))}
        </div>
      </div>
    )
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
    <article
      className={[
        'page split-menu-page single-feature-page',
        isGalleryLeftLayout ? 'single-feature-page-gallery-left' : '',
      ].filter(Boolean).join(' ')}
    >
      <header className="menu-page-hero single-feature-hero">
        <div className="menu-page-hero-content single-feature-hero-content">
          <SectionTitle
            as="h1"
            title={page.title}
            titleLines={page.titleLines}
            description={page.description}
            descriptionLines={page.descriptionLines}
          />
        </div>
      </header>

      <section className="single-feature-section">
        {isGalleryLeftLayout && renderGallery()}

        <div className="single-feature-copy">
          {page.body && <p>{page.body}</p>}
          {page.items?.length > 0 && (
            <ul className="single-feature-list">
              {page.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {page.highlights && (
            <div className="single-feature-highlights">
              {page.highlights.map((highlight) => (
                <article className="single-feature-highlight" key={highlight.title}>
                  <h2>{highlight.title}</h2>
                  {highlight.text && <p>{highlight.text}</p>}
                  {highlight.note && <span>{highlight.note}</span>}
                </article>
              ))}
            </div>
          )}
          {isGalleryLeftLayout && page.closing && (
            <p className="single-feature-closing">{renderClosing()}</p>
          )}
        </div>

        {!isGalleryLeftLayout && renderGallery()}

        {!isGalleryLeftLayout && page.closing && (
          <p className="single-feature-closing">{renderClosing()}</p>
        )}
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
              {photos[activePhotoIndex].type === 'video' ? (
                <video
                  src={photos[activePhotoIndex].src}
                  poster={photos[activePhotoIndex].poster}
                  controls
                />
              ) : (
                <img
                  src={photos[activePhotoIndex].src}
                  alt={`${page.title} ${activePhotoIndex + 1}`}
                />
              )}
            </div>
            <button
              type="button"
              className="gallery-nav-button gallery-nav-next"
              aria-label="Próxima foto"
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
