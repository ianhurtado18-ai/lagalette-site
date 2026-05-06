import { useEffect, useRef, useState } from 'react'
import { AnchorPills } from '../components/ui/AnchorPills'
import { ButtonPill } from '../components/ui/ButtonPill'
import { SectionTitle } from '../components/ui/SectionTitle'
import { ServiceCard } from '../components/ui/ServiceCard'
import { FeaturePage } from './FeaturePage'

export function MenuPage({ page }) {
  const isSingleFeatureLayout = page.layout === 'single-feature'
  const isSplitSectionsLayout = page.layout === 'split-sections'
  const heroTitle = isSplitSectionsLayout
    ? page.title.replace(/^Menus\s+/i, '')
    : page.title
  const [activeGallery, setActiveGallery] = useState(null)
  const touchStartX = useRef(null)

  function openGallery(section, photoIndex) {
    const photos = section.photos ?? []

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
  }

  function handleGalleryTouchEnd(event) {
    if (touchStartX.current === null) {
      return
    }

    const swipeDistance = event.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null

    if (Math.abs(swipeDistance) < 44) {
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
            description={section.description}
          />
          <ul className={listClassName}>
            {section.items.map((item) => (
              <ServiceCard key={item}>{item}</ServiceCard>
            ))}
          </ul>
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
    const mediaClassName = isSplitSectionsLayout
      ? 'menu-section-half menu-section-photo-half menu-section-gallery'
      : 'menu-section-half menu-section-photo-half'
    const photos = section.photos ?? []
    const galleryPhotos = isSplitSectionsLayout ? photos.slice(0, 8) : photos

    return (
      <div
        className={mediaClassName}
        aria-label={section.imageAlt}
      >
        <div className="menu-photo-grid">
          {galleryPhotos.map((photo, photoIndex) => (
            <button
              className="menu-photo-placeholder"
              key={photo}
              type="button"
              onClick={() => openGallery(section, photoIndex)}
            >
              <img src={photo} alt={`${section.title} ${photoIndex + 1}`} />
              <span>Foto {photoIndex + 1}</span>
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

  return (
    <article
      className={`page menu-page ${isSplitSectionsLayout ? 'split-menu-page' : ''}`}
    >
      {!isSplitSectionsLayout && (
        <header className="page-header">
          <SectionTitle
            as="h1"
            title={heroTitle}
            description={page.description}
          />
        </header>
      )}

      {isSplitSectionsLayout && (
        <header className="menu-page-hero">
          <div className="menu-page-hero-content">
            <SectionTitle
              as="h1"
              title={heroTitle}
              description={page.description}
            />
            <AnchorPills
              className="menu-page-links"
              items={page.sections}
              label="Secoes do menu"
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
                description={section.description}
              />
            )}
          </section>
        ))
      ) : (
        <section className="section">
          <SectionTitle
            title="Conteudo a definir"
            description="Esta pagina esta pronta para receber as futuras secoes."
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
          <div className="gallery-content">
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
            <div
              className="gallery-image-placeholder"
              onTouchStart={handleGalleryTouchStart}
              onTouchEnd={handleGalleryTouchEnd}
            >
              <img
                src={activeGallery.photos[activeGallery.photoIndex]}
                alt={`${activeGallery.sectionTitle} ${activeGallery.photoIndex + 1}`}
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
