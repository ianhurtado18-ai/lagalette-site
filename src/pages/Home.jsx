import { useEffect, useState } from 'react'
import { ButtonPill } from '../components/ui/ButtonPill'
import { MenuCard } from '../components/ui/MenuCard'
import { SectionTitle } from '../components/ui/SectionTitle'
import aboutPhoto from '../assets/quem-somos-1.jpg'
import { clientTestimonials, homeMenuCards, homeServiceCards } from '../siteData'

export function Home({ sections }) {
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const testimonial = clientTestimonials[testimonialIndex]

  useEffect(() => {
    if (clientTestimonials.length < 2) {
      return undefined
    }

    const testimonialTimer = window.setInterval(() => {
      setTestimonialIndex((current) => (current + 1) % clientTestimonials.length)
    }, 5200)

    return () => window.clearInterval(testimonialTimer)
  }, [])

  return (
    <>
      <section id="hero" className="section hero-section">
        <div className="hero-content">
          <h1>
            <span>Momentos especiais</span>
            <span>merecem experi&#234;ncias</span>
            <span className="hero-title-accent">inesquec&#237;veis.</span>
          </h1>
          <span className="hero-rule" aria-hidden="true" />
          <p>
            <span>Com acompanhamento personalizado</span>
            <span>do primeiro contato ao dia do evento,</span>
            <span>atenção aos detalhes e sabores que conquistam,</span>
            <span>transformamos seu evento numa vivência única e marcante.</span>
          </p>
          <ButtonPill className="hero-button" to="/#menus">
            Descobrir nossos menus
            <span className="hero-button-arrow" aria-hidden="true" />
          </ButtonPill>
        </div>
      </section>

      {sections.map((section) => {
        if (section.id === 'sobre-nos') {
          return (
            <section key={section.id} id={section.id} className="section about-section">
              <div className="about-media">
                <img
                  className="about-image"
                  src={aboutPhoto}
                  alt="Fachada histórica ligada à história da La Galette"
                />
                <span className="about-shape about-shape-large" aria-hidden="true" />
                <span className="about-shape about-shape-small" aria-hidden="true" />
              </div>

              <div className="about-content">
                <SectionTitle
                  kicker={section.kicker}
                  title="Tradi&#231;&#227;o familiar, cozinha artesanal e olhar contemporâneo."
                  description="Com raízes em uma tradição gastronômica familiar que nasceu em um restaurante na França e se consolidou no Brasil, La Galette Buffet é especializado na realização de eventos sociais e corporativos."
                />
                <ul className="about-list">
                  <li>Experiência em eventos desde 1993</li>
                  <li>Tradição com uma visão moderna e criativa</li>
                  <li>Cozinha artesanal com ingredientes frescos e selecionados</li>
                  <li>Equipe qualificada, atenciosa e comprometida</li>
                </ul>
                <ButtonPill className="about-button" to="/#menus">
                  Conhecer mais
                </ButtonPill>
              </div>
            </section>
          )
        }

        if (section.id === 'menus') {
          return (
            <section key={section.id} id={section.id} className="section menus-section">
              <SectionTitle
                kicker={'Nossos Card\u00e1pios'}
                title="Menus para transformar cada encontro em uma experiência memorável."
              />
              <div className="card-grid">
                {homeMenuCards.map((card) => (
                  <MenuCard key={card.to} {...card} />
                ))}
              </div>
            </section>
          )
        }

        if (section.id === 'servicos-complementares') {
          return (
            <section key={section.id} id={section.id} className="section services-section">
              <SectionTitle
                kicker={'Servi\u00e7os Complementares'}
                title="Solu&#231;&#245;es personalizadas para cada tipo de evento."
              />
              <div className="card-grid">
                {homeServiceCards.map((card) => (
                  <MenuCard key={card.to} {...card} />
                ))}
              </div>
            </section>
          )
        }

        if (section.id === 'eles-confiam-na-gente') {
          return (
            <section key={section.id} id={section.id} className="section trust-section">
              <SectionTitle
                kicker={section.kicker}
                title="Eles confiam na gente para seus momentos importantes."
              />

              <div className="trust-content">
                <div className="trust-logo-panel" aria-label="Empresas clientes">
                  <img
                    className="trust-logo-image"
                    src="/logos/client-logos-placeholder.svg"
                    alt="Logos de empresas clientes"
                  />
                </div>

                <div className="testimonial-panel" aria-live="polite">
                  <div className="testimonial-slide" key={testimonial.name}>
                    <p className="testimonial-quote">&ldquo;{testimonial.quote}&rdquo;</p>
                    <div className="testimonial-meta">
                      <strong>{testimonial.name}</strong>
                      <span>{testimonial.eventType}</span>
                    </div>
                  </div>
                  <div className="testimonial-indicators" aria-hidden="true">
                    {clientTestimonials.map((item, index) => (
                      <span
                        className={index === testimonialIndex ? 'is-active' : undefined}
                        key={item.name}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )
        }

        if (section.id === 'contato') {
          return null
        }

        return (
          <section key={section.id} id={section.id} className="section">
            <SectionTitle
              kicker={section.kicker}
              title={section.title}
              description={section.description}
            />
          </section>
        )
      })}
    </>
  )
}
