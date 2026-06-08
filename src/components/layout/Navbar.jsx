import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logoHorizontal from '../../assets/logo-lagalette-brand.png'
import { menuLinks, serviceLinks } from '../../siteData'

export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isHiddenOnMobile, setIsHiddenOnMobile] = useState(false)
  const menuDropdownRef = useRef(null)
  const serviceDropdownRef = useRef(null)

  function isMobileNav() {
    return window.matchMedia('(max-width: 760px)').matches
  }

  function closeDropdown() {
    setActiveDropdown(null)

    if (
      menuDropdownRef.current?.contains(document.activeElement) ||
      serviceDropdownRef.current?.contains(document.activeElement)
    ) {
      document.activeElement.blur()
    }
  }

  function handleDropdownTriggerClick(event, dropdown) {
    if (!isMobileNav()) {
      return
    }

    event.preventDefault()
    setActiveDropdown((current) => (current === dropdown ? null : dropdown))
  }

  useEffect(() => {
    let lastScrollY = window.scrollY

    function handleScroll() {
      if (!isMobileNav()) {
        setIsHiddenOnMobile(false)
        return
      }

      const currentScrollY = window.scrollY

      if (currentScrollY < 24 || currentScrollY < lastScrollY - 8) {
        setIsHiddenOnMobile(false)
      } else if (currentScrollY > lastScrollY + 8) {
        setIsHiddenOnMobile(true)
        closeDropdown()
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (!activeDropdown) {
      return undefined
    }

    function handlePointerDown(event) {
      if (
        menuDropdownRef.current?.contains(event.target) ||
        serviceDropdownRef.current?.contains(event.target)
      ) {
        return
      }

      closeDropdown()
    }

    document.addEventListener('pointerdown', handlePointerDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [activeDropdown])

  return (
    <header
      className={[
        'site-header',
        'navbar-shell',
        isHiddenOnMobile ? 'is-hidden-mobile' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <nav className="navbar navbar-inner" aria-label="Navegação principal">
        <Link className="brand navbar-logo" to="/#hero" onClick={closeDropdown}>
          <img src={logoHorizontal} alt="La Galette Buffet" />
        </Link>

        <div className="nav-links navbar-links">
          <Link to="/#sobre-nos" onClick={closeDropdown}>
            {'Sobre N\u00f3s'}
          </Link>

          <div
            className={['menu-dropdown', activeDropdown === 'menus' ? 'is-open' : '']
              .filter(Boolean)
              .join(' ')}
            ref={menuDropdownRef}
          >
            <Link
              className="dropdown-trigger"
              to="/#menus"
              aria-haspopup="true"
              aria-expanded={activeDropdown === 'menus'}
              onClick={(event) => handleDropdownTriggerClick(event, 'menus')}
            >
              {'Menus'}
              <span className="dropdown-chevron" aria-hidden="true" />
            </Link>
            <div className="dropdown-panel">
              {menuLinks.map((item) =>
                item.children?.length ? (
                  <div className="dropdown-group" key={item.to}>
                    <Link className="dropdown-group-link" to={item.to} onClick={closeDropdown}>
                      {item.label}
                    </Link>
                    <div className="dropdown-submenu">
                      {item.children.map((child) => (
                        <Link key={child.to} to={child.to} onClick={closeDropdown}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link key={item.to} to={item.to} onClick={closeDropdown}>
                    {item.label}
                  </Link>
                ),
              )}
            </div>
          </div>

          <div
            className={['menu-dropdown', activeDropdown === 'servicos' ? 'is-open' : '']
              .filter(Boolean)
              .join(' ')}
            ref={serviceDropdownRef}
          >
            <Link
              className="dropdown-trigger"
              to="/#servicos-complementares"
              aria-haspopup="true"
              aria-expanded={activeDropdown === 'servicos'}
              onClick={(event) => handleDropdownTriggerClick(event, 'servicos')}
            >
              {'Servi\u00e7os'}
              <span className="dropdown-chevron" aria-hidden="true" />
            </Link>
            <div className="dropdown-panel">
              {serviceLinks.map((item) => (
                <Link key={item.to} to={item.to} onClick={closeDropdown}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link className="navbar-contact" to="/#contato" onClick={closeDropdown}>
            Contato
          </Link>

          <a
            className="navbar-instagram"
            href="https://www.instagram.com/lagalettefestas/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram La Galette Buffet"
            title="Instagram"
            onClick={closeDropdown}
          >
            <svg
              className="navbar-instagram-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M7.8 2h8.4A5.81 5.81 0 0 1 22 7.8v8.4a5.81 5.81 0 0 1-5.8 5.8H7.8A5.81 5.81 0 0 1 2 16.2V7.8A5.81 5.81 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm4.2 3.4a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2Zm0 2a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2Zm4.85-2.75a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  )
}
