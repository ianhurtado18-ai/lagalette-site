import { useEffect, useState } from 'react'
import { AnchorPills } from '../components/ui/AnchorPills'
import { ButtonPill } from '../components/ui/ButtonPill'
import { SectionTitle } from '../components/ui/SectionTitle'
import { ServiceCard } from '../components/ui/ServiceCard'

export function MenuPage({ page }) {
  const isSplitSectionsLayout = page.layout === 'split-sections'
  const [activeGallery, setActiveGallery] = useState(null)

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

  return (
    <article
      className={`page menu-page ${isSplitSectionsLayout ? 'split-menu-page' : ''}`}
    >
      {!isSplitSectionsLayout && (
        <header className="page-header">
          <SectionTitle
            as="h1"
            kicker="Menu"
            title={page.title}
            description={page.description}
          />
        </header>
      )}

      {isSplitSectionsLayout && (
        <header className="menu-page-hero">
          <div className="menu-page-hero-content">
            <SectionTitle
              as="h1"
              kicker="Menu"
              title={page.title}
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
            className={`section ${section.items ? 'menu-detail-section' : ''} ${
              index % 2 === 1 ? 'menu-detail-section-right' : ''
            }`}
          >
            {section.items ? (
              <>
                <div className="menu-section-half menu-section-text-half">
                  <div className="menu-section-content">
                    <SectionTitle
                      kicker="Especialidade"
                      title={section.title}
                      description={section.description}
                    />
                    <ul className="prestation-list">
                      {section.items.map((item) => (
                        <ServiceCard key={item}>{item}</ServiceCard>
                      ))}
                    </ul>
                    <ButtonPill className="quote-button" to="/#contato">
                      Solicitar orcamento
                    </ButtonPill>
                  </div>
                </div>
                <div
                  className="menu-section-half menu-section-photo-half"
                  aria-label={section.imageAlt}
                >
                  <div className="menu-photo-grid">
                    {(section.photos ?? []).map((photo, photoIndex) => (
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
                </div>
              </>
            ) : (
              <SectionTitle
                kicker={section.kicker}
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
            >
              <span aria-hidden="true">x</span>
            </button>
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
