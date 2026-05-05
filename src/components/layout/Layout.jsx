import { Outlet } from 'react-router-dom'
import { CTASection } from '../ui/CTASection'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { ScrollToHash } from './ScrollToHash'

export function Layout() {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <main className="site-main">
        <Outlet />
      </main>
      <CTASection
        id="contato"
        buttonLabel="Solicitar orçamento"
        buttonTo="https://wa.me/5511986396891"
      />
      <a
        className="whatsapp-floating-button"
        href="https://wa.me/5511986396891"
        target="_blank"
        rel="noreferrer"
        aria-label="Fale com a La Galette Buffet no WhatsApp"
      >
        <svg
          className="whatsapp-floating-icon"
          viewBox="0 0 32 32"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M16.02 3.2c-7.02 0-12.72 5.7-12.72 12.72 0 2.38.66 4.6 1.8 6.5L3.2 28.8l6.54-1.82a12.63 12.63 0 0 0 6.28 1.66c7.02 0 12.72-5.7 12.72-12.72S23.04 3.2 16.02 3.2Zm0 23.28c-2.02 0-3.9-.56-5.5-1.54l-.4-.24-3.84 1.06 1.1-3.74-.26-.42a10.48 10.48 0 0 1-1.66-5.68c0-5.82 4.74-10.56 10.56-10.56 5.84 0 10.58 4.74 10.58 10.56 0 5.82-4.74 10.56-10.58 10.56Z" />
          <path d="M21.86 18.6c-.32-.16-1.9-.94-2.2-1.04-.3-.12-.52-.16-.74.16-.22.32-.84 1.04-1.02 1.26-.2.22-.38.24-.7.08-.32-.16-1.34-.5-2.56-1.58a9.6 9.6 0 0 1-1.78-2.22c-.18-.32-.02-.5.14-.66.14-.14.32-.38.48-.56.16-.2.22-.32.32-.54.1-.22.06-.4-.02-.56-.08-.16-.74-1.78-1.02-2.44-.26-.64-.54-.54-.74-.56h-.62c-.22 0-.56.08-.86.4-.3.32-1.14 1.12-1.14 2.72s1.16 3.14 1.32 3.36c.16.22 2.28 3.48 5.54 4.88.78.34 1.38.54 1.84.68.78.24 1.48.2 2.04.12.62-.1 1.9-.78 2.18-1.54.26-.76.26-1.4.18-1.54-.08-.14-.3-.22-.62-.38Z" />
        </svg>
      </a>
      <Footer />
    </>
  )
}
