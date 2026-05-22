import { ButtonPill } from './ButtonPill'
import { SectionTitle } from './SectionTitle'

export function CTASection({
  buttonLabel = 'Solicitar orçamento',
  buttonTo = '/#contato',
  id,
  navigationItems = [],
}) {
  const isExternalButton = buttonTo.startsWith('http')

  return (
    <section id={id} className="cta-section">
      <div className="cta-content">
        <SectionTitle
          title="Vamos criar algo incrível juntos?"
          description="Fale com nossa equipe e solicite um orçamento personalizado."
        />
        <ButtonPill
          className="hero-button"
          href={isExternalButton ? buttonTo : undefined}
          rel={isExternalButton ? 'noreferrer' : undefined}
          target={isExternalButton ? '_blank' : undefined}
          to={isExternalButton ? undefined : buttonTo}
        >
          {buttonLabel}
          <span className="hero-button-arrow" aria-hidden="true" />
        </ButtonPill>
      </div>
      {navigationItems.length > 0 && (
        <nav className="cta-menu-nav" aria-label="Navegação de cardápios">
          {navigationItems.map((item) => (
            <ButtonPill className="hero-button cta-menu-button" key={item.to} to={item.to}>
              {item.title}
            </ButtonPill>
          ))}
        </nav>
      )}
    </section>
  )
}
