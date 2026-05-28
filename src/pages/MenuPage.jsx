import { useEffect, useRef, useState } from 'react'
import { AnchorPills } from '../components/ui/AnchorPills'
import { ButtonPill } from '../components/ui/ButtonPill'
import { SectionTitle } from '../components/ui/SectionTitle'
import { ServiceCard } from '../components/ui/ServiceCard'
import { useGalleryMedia } from '../hooks/useGalleryMedia'
import { FeaturePage } from './FeaturePage'

function MenuSectionGallery({
  isSplitSectionsLayout,
  onOpenGallery,
  section,
}) {
  const mediaClassName = isSplitSectionsLayout
    ? 'menu-section-half menu-section-photo-half menu-section-gallery'
    : 'menu-section-half menu-section-photo-half'
  const photos = useGalleryMedia(section.photos)
  const galleryPhotos = isSplitSectionsLayout ? photos.slice(0, 8) : photos

  return (
    <div
      className={mediaClassName}
      aria-label={section.imageAlt}
    >
      <div className="menu-photo-grid">
        {galleryPhotos.map((media, photoIndex) => (
          <button
            className={`menu-photo-placeholder ${media.type === 'video' ? 'is-video' : ''}`}
            key={media.src}
            type="button"
            onClick={() => onOpenGallery(section, photos, photoIndex)}
          >
            <img src={media.preview} alt={`${section.title} ${photoIndex + 1}`} />
            {media.type === 'video' && <span className="menu-video-play" aria-hidden="true" />}
            <span>{media.type === 'video' ? 'Vídeo' : 'Foto'} {photoIndex + 1}</span>
          </button>
        ))}
      </div>
      {!isSplitSectionsLayout && (
        <>
          <span className="about-shape about-shape-large" aria-hidden="true" />
          <span className="about-shape about-shape-small" aria-hidden="true" />
        </>
      )}
    </div>
  )
}

export function MenuPage({ page }) {
  const isSingleFeatureLayout = page.layout === 'single-feature'
  const isSplitSectionsLayout = page.layout === 'split-sections'
  const heroTitle = isSplitSectionsLayout
    ? page.title.replace(/^Menus\s+/i, '')
    : page.title
  const [activeGallery, setActiveGallery] = useState(null)
  const touchStartX = useRef(null)
  const touchStartY = useRef(null)

  function openGallery(section, photos, photoIndex) {
    setActiveGallery({
      photos,
      sectionTitle: section.title,
      photoIndex,
      totalPhotos: photos.length,
    })
  }

  function closeGallery() {
    setActiveGallery(null)
  }

  function showPreviousPhoto() {
    setActiveGallery((gallery) => {
      if (!gallery) {
        return gallery
      }

      return {
        ...gallery,
        photoIndex:
          gallery.photoIndex === 0 ? gallery.totalPhotos - 1 : gallery.photoIndex - 1,
      }
    })
  }

  function showNextPhoto() {
    setActiveGallery((gallery) => {
      if (!gallery) {
        return gallery
      }

      return {
        ...gallery,
        photoIndex:
          gallery.photoIndex === gallery.totalPhotos - 1 ? 0 : gallery.photoIndex + 1,
      }
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
    if (!activeGallery) {
      return
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        closeGallery()
      }

      if (event.key === 'ArrowLeft') {
        showPreviousPhoto()
      }

      if (event.key === 'ArrowRight') {
        showNextPhoto()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeGallery])

  if (isSingleFeatureLayout) {
    return <FeaturePage page={page} />
  }

  function renderSectionText(section) {
    const contentClassName = isSplitSectionsLayout
      ? 'about-content menu-section-content'
      : 'menu-section-content'
    const listClassName = isSplitSectionsLayout
      ? 'about-list prestation-list'
      : 'prestation-list'
    const buttonClassName = isSplitSectionsLayout
      ? 'about-button quote-button'
      : 'quote-button'

    return (
      <div className="menu-section-half menu-section-text-half">
        <div className={contentClassName}>
          <SectionTitle
            title={section.title}
            titleLines={section.titleLines}
            description={section.description}
            descriptionLines={section.descriptionLines}
          />
          {section.versoes && (
            <p className="menu-section-versions">{section.versoes}</p>
          )}
          {section.items.length > 0 && (
            <ul className={listClassName}>
              {section.items.map((item) => (
                <ServiceCard key={item}>{item}</ServiceCard>
              ))}
            </ul>
          )}
          {section.disclaimer && (
            <p className="menu-section-disclaimer">
              <em>{section.disclaimer}</em>
            </p>
          )}
          <ButtonPill
            className={buttonClassName}
            href="https://wa.me/5511986396891"
            target="_blank"
            rel="noreferrer"
          >
            Solicitar orçamento
          </ButtonPill>
        </div>
      </div>
    )
  }

  function renderSectionGallery(section) {
    return (
      <MenuSectionGallery
        isSplitSectionsLayout={isSplitSectionsLayout}
        onOpenGallery={openGallery}
        section={section}
      />
    )
  }
  return (
    <article
      className={`page menu-page ${isSplitSectionsLayout ? 'split-menu-page' : ''}`}
    >
      {!isSplitSectionsLayout && (
        <header className="page-header">
          <SectionTitle
            as="h1"
            title={heroTitle}
            titleLines={page.titleLines}
            description={page.description}
            descriptionLines={page.descriptionLines}
          />
        </header>
      )}

      {isSplitSectionsLayout && (
        <header className="menu-page-hero">
          <div className="menu-page-hero-content">
            <SectionTitle
              as="h1"
              title={heroTitle}
              titleLines={page.titleLines}
              description={page.description}
              descriptionLines={page.descriptionLines}
            />
            <AnchorPills
              className="menu-page-links"
              items={page.sections}
              label="Seções do menu"
            />
          </div>
        </header>
      )}

      {page.sections.length > 0 ? (
        page.sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={`section ${
              section.items
                ? `${isSplitSectionsLayout ? 'about-section' : ''} menu-detail-section`
                : ''
            } ${
              !isSplitSectionsLayout && index % 2 === 1 ? 'menu-detail-section-right' : ''
            }`}
          >
            {section.items ? (
              isSplitSectionsLayout ? (
                <>
                  {renderSectionGallery(section)}
                  {renderSectionText(section)}
                </>
              ) : (
                <>
                  {renderSectionText(section)}
                  {renderSectionGallery(section)}
                </>
              )
            ) : (
              <SectionTitle
                title={section.title}
                titleLines={section.titleLines}
                description={section.description}
                descriptionLines={section.descriptionLines}
              />
            )}
          </section>
        ))
      ) : (
        <section className="section">
          <SectionTitle
            title="Conteúdo a definir"
            description="Esta página está pronta para receber as futuras seções."
          />
        </section>
      )}

      {activeGallery && (
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
              {activeGallery.photos[activeGallery.photoIndex].type === 'video' ? (
                <video
                  src={activeGallery.photos[activeGallery.photoIndex].src}
                  poster={activeGallery.photos[activeGallery.photoIndex].poster}
                  controls
                />
              ) : (
                <img
                  src={activeGallery.photos[activeGallery.photoIndex].src}
                  alt={`${activeGallery.sectionTitle} ${activeGallery.photoIndex + 1}`}
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
