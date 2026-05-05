import { Link } from 'react-router-dom'
import logoHorizontal from '../../assets/logo-lagalette-brand.png'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link className="footer-brand" to="/#hero" aria-label="La Galette Buffet">
          <img src={logoHorizontal} alt="La Galette Buffet" />
        </Link>

        <nav className="footer-column" aria-label="Navegação do rodapé">
          <strong>Navega&#231;&#227;o</strong>
          <Link to="/#sobre-nos">Sobre N&#243;s</Link>
          <Link to="/#menus">Menus</Link>
          <Link to="/#servicos-complementares">Servi&#231;os</Link>
          <Link to="/#contato">Contato</Link>
        </nav>

        <address className="footer-column footer-contact">
          <strong>Contato</strong>
          <a
            href="https://wa.me/5511986396891"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="footer-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M6.62 10.78a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1.1 1.1 0 0 1 1.12-.27c1.22.4 2.54.62 3.86.62.6 0 1.1.5 1.1 1.1v3.5c0 .6-.5 1.1-1.1 1.1C10.62 21.23 2.77 13.38 2.77 3.6c0-.6.5-1.1 1.1-1.1h3.5c.6 0 1.1.5 1.1 1.1 0 1.32.22 2.64.62 3.86.12.38.03.8-.27 1.12l-2.2 2.2Z" />
            </svg>
            11 98639-6891
          </a>
          <a href="mailto:festa@lagalette.com.br">
            <svg
              className="footer-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M4.5 5h15A2.5 2.5 0 0 1 22 7.5v9A2.5 2.5 0 0 1 19.5 19h-15A2.5 2.5 0 0 1 2 16.5v-9A2.5 2.5 0 0 1 4.5 5Zm0 2a.5.5 0 0 0-.5.5v.34l8 5.1 8-5.1V7.5a.5.5 0 0 0-.5-.5h-15Zm15 10a.5.5 0 0 0 .5-.5V10.2l-7.46 4.76a1 1 0 0 1-1.08 0L4 10.2v6.3a.5.5 0 0 0 .5.5h15Z" />
            </svg>
            festa@lagalette.com.br
          </a>
          <span>
            <svg
              className="footer-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M12 2.5A7.2 7.2 0 0 0 4.8 9.7c0 5.16 6.3 11.16 6.56 11.42a.94.94 0 0 0 1.28 0c.27-.26 6.56-6.26 6.56-11.42A7.2 7.2 0 0 0 12 2.5Zm0 16.54c-1.9-1.98-5.2-6.02-5.2-9.34a5.2 5.2 0 1 1 10.4 0c0 3.32-3.3 7.36-5.2 9.34Zm0-12.2a2.86 2.86 0 1 0 0 5.72 2.86 2.86 0 0 0 0-5.72Zm0 3.72a.86.86 0 1 1 0-1.72.86.86 0 0 1 0 1.72Z" />
            </svg>
            São Paulo - SP
          </span>
        </address>

        <div className="footer-column footer-social">
          <strong>Siga-nos</strong>
          <div className="footer-social-links">
            <a href="https://www.instagram.com/lagalettefestas/" aria-label="Instagram">
              <svg
                className="footer-social-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M7.8 2h8.4A5.81 5.81 0 0 1 22 7.8v8.4a5.81 5.81 0 0 1-5.8 5.8H7.8A5.81 5.81 0 0 1 2 16.2V7.8A5.81 5.81 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm4.2 3.4a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2Zm0 2a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2Zm4.85-2.75a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <p className="footer-legal">
        Copyright {currentYear} La Galette Buffet. Todos os direitos reservados.
      </p>
    </footer>
  )
}
