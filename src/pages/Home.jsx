import { useEffect, useState } from 'react'
import { ButtonPill } from '../components/ui/ButtonPill'
import { MenuCard } from '../components/ui/MenuCard'
import { SectionTitle } from '../components/ui/SectionTitle'
import aboutPhoto from '../assets/quem-somos-1.jpg'
import { clientTestimonials, faqItems, homeMenuCards, homeServiceCards } from '../siteData'

const faqHighlightTerms = [
  '30 pessoas',
  'ilhas gastronômicas',
  '40 pessoas',
  '4 e 5 horas',
  '2 horas adicionais',
  'hora extra por profissional',
  'Garçons em uniforme preto',
  'cozinha',
  'uniforme branco',
  'Cardápios infantis',
  'Demais cardápios',
  '50% do valor integral',
  'vegetarianos',
  'veganos',
  'solicitação prévia',
  'todo o material necessário',
  'taças para vinho e espumante',
  'cobradas à parte',
  'possível contratar separadamente',
  'vinhos, espumantes, cerveja e chopp',
  'copos',
  'preparação de drinks',
  'serviço de chopp',
  'garçons servem',
  'exceção',
  'material necessário',
  'pode contratar separadamente',
  'desvaloriza o serviço',
  'evento incompleto',
  'planejamento',
  ' 10% a mais do número de convidados confirmado, e a diferença é cobrada ao final do serviço.',
  'é muito importante confirmar o número de convidados com precisão.',
  'cobrado à parte',
  '5 dias úteis antes do evento',
  'contrato completo e detalhado',
  'pagamento de um sinal',
]

function renderFaqText(text) {
  const escapedTerms = faqHighlightTerms.map((term) =>
    term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
  )
  const pattern = new RegExp(`(${escapedTerms.join('|')})`, 'gi')

  return text.split(pattern).map((part, index) => {
    const isHighlighted = faqHighlightTerms.some(
      (term) => term.toLowerCase() === part.toLowerCase(),
    )

    return isHighlighted ? <strong key={`${part}-${index}`}>{part}</strong> : part
  })
}

function renderFaqAnswerBlock(block) {
  if (typeof block === 'string') {
    return <p key={block}>{renderFaqText(block)}</p>
  }

  return (
    <div className="faq-answer-group" key={block.label}>
      <strong className="faq-answer-label">{block.label}</strong>
      <ul className="faq-answer-list">
        {block.items.map((item) => (
          <li key={item}>{renderFaqText(item)}</li>
        ))}
      </ul>
    </div>
  )
}

export function Home({ sections }) {
  const [googleReviews, setGoogleReviews] = useState([])
  const [googleReviewSummary, setGoogleReviewSummary] = useState(null)
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const testimonials = googleReviews.length > 0 ? googleReviews : clientTestimonials
  const testimonial = testimonials[testimonialIndex]
  const isGoogleReview = googleReviews.length > 0

  useEffect(() => {
    let isMounted = true

    async function loadGoogleReviews() {
      try {
        const response = await fetch('/api/google-reviews')

        if (!response.ok) {
          return
        }

        const data = await response.json()

        if (!isMounted || !Array.isArray(data.reviews) || data.reviews.length === 0) {
          return
        }

        setGoogleReviews(data.reviews)
        setGoogleReviewSummary({
          googleMapsUri: data.googleMapsUri,
          googleSearchUri: data.googleSearchUri,
          rating: data.rating,
          userRatingCount: data.userRatingCount,
        })
        setTestimonialIndex(0)
      } catch {
        // The static testimonials remain the fallback if Google Places is unavailable.
      }
    }

    loadGoogleReviews()

    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    if (testimonials.length < 2) {
      return undefined
    }

    const testimonialTimer = window.setInterval(() => {
      setTestimonialIndex((current) => (current + 1) % testimonials.length)
    }, 9000)

    return () => window.clearInterval(testimonialTimer)
  }, [testimonials.length])

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
            <span className="hero-copy-desktop">atenção aos detalhes e sabores que conquistam,</span>
            <span className="hero-copy-mobile">atenção aos detalhes</span>
            <span className="hero-copy-mobile">e sabores que conquistam,</span>
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
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="about-content">
                <SectionTitle
                  kicker={section.kicker}
                  title="Herança gastronômica familiar, cozinha artesanal e um olhar contemporâneo."
                  description="Com raízes em uma tradição gastronômica familiar que nasceu em um restaurante na França e se consolidou no Brasil, La Galette Buffet é especializado na realização de eventos sociais e corporativos."
                />
                <ul className="about-list">
                  <li>Experiência em eventos desde 1993.</li>
                  <li>Tradição com uma visão moderna e criativa.</li>
                  <li>Cozinha artesanal com ingredientes frescos e selecionados.</li>
                  <li>Equipe qualificada, atenciosa e comprometida.</li>
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
                kicker="Nossos Menus"
                title="Para cada estilo de evento, um menu perfeito e memorável."
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
                title="Soluções personalizadas de acordo com sua demanda."
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
                title="Escolhem nosso trabalho para a realização de eventos marcantes."
              />

              <div className="trust-content">
                <div className="trust-logo-panel" aria-label="Empresas clientes">
                  <img
                    className="trust-logo-image"
                    src="/logos/client-logos.png"
                    alt="Logos de empresas clientes"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="testimonial-panel" aria-live="polite">
                  {isGoogleReview && googleReviewSummary ? (
                    <a
                      className="google-review-summary"
                      href={
                        googleReviewSummary.googleSearchUri ||
                        googleReviewSummary.googleMapsUri ||
                        'https://www.google.com'
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="google-review-source">Google Reviews</span>
                      {googleReviewSummary.rating ? (
                        <span className="google-review-rating">
                          {googleReviewSummary.rating.toFixed(1)}
                        </span>
                      ) : null}
                      <span className="google-review-stars" aria-hidden="true">
                        ★★★★★
                      </span>
                      {googleReviewSummary.userRatingCount ? (
                        <strong>{googleReviewSummary.userRatingCount} avaliações</strong>
                      ) : null}
                    </a>
                  ) : null}

                  <article
                    className="testimonial-slide"
                    key={testimonial.name || testimonial.author}
                  >
                    <p className="testimonial-quote">
                      &ldquo;{testimonial.quote || testimonial.text}&rdquo;
                    </p>
                    <div className="testimonial-meta">
                      <strong>{testimonial.name || testimonial.author}</strong>
                      {!isGoogleReview ? <span>{testimonial.eventType}</span> : null}
                      {isGoogleReview &&
                      (googleReviewSummary?.googleSearchUri ||
                        googleReviewSummary?.googleMapsUri) ? (
                        <a
                          href={
                            googleReviewSummary.googleSearchUri ||
                            googleReviewSummary.googleMapsUri
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          Ler avaliação completa no Google
                        </a>
                      ) : null}
                    </div>
                  </article>
                  <div className="testimonial-indicators" aria-hidden="true">
                    {testimonials.map((item, index) => (
                      <span
                        className={index === testimonialIndex ? 'is-active' : undefined}
                        key={item.name || `${item.author}-${index}`}
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

      <section id="faq" className="section faq-section">
        <SectionTitle
          kicker="Perguntas Frequentes"
          title="Tudo o que você precisa saber para planejar seu evento com tranquilidade."
        />

        <div className="faq-list">
          {faqItems.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <div className="faq-answer">
                {item.answer.map((block) => renderFaqAnswerBlock(block))}
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  )
}
