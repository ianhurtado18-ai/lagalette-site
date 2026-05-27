import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoHorizontal from '../../assets/logo-lagalette-brand.png'
import { menuLinks, serviceLinks } from '../../siteData'

export function Navbar() {
  const menuDropdownRef = useRef(null)
  const serviceDropdownRef = useRef(null)
  const location = useLocation()

  function closeDropdown() {
    if (
      menuDropdownRef.current?.contains(document.activeElement) ||
      serviceDropdownRef.current?.contains(document.activeElement)
    ) {
      document.activeElement.blur()
    }
  }

  useEffect(() => {
    closeDropdown()
  }, [location.pathname, location.hash])

  return (
    <header className="site-header navbar-shell">
      <nav className="navbar navbar-inner" aria-label="Navegação principal">
        <Link className="brand navbar-logo" to="/#hero">
          <img src={logoHorizontal} alt="La Galette Buffet" />
        </Link>

        <div className="nav-links navbar-links">
          <Link to="/#sobre-nos">{'Sobre N\u00f3s'}</Link>

          <div className="menu-dropdown" ref={menuDropdownRef}>
            <Link
              className="dropdown-trigger"
              to="/#menus"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {'Menus'}
              <span className="dropdown-chevron" aria-hidden="true" />
            </Link>
            <div className="dropdown-panel">
              {menuLinks.map((item) => (
                <Link key={item.to} to={item.to} onClick={closeDropdown}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="menu-dropdown" ref={serviceDropdownRef}>
            <Link
              className="dropdown-trigger"
              to="/#servicos-complementares"
              aria-haspopup="true"
              aria-expanded="false"
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

          <Link className="navbar-contact" to="/#contato">
            Contato
          </Link>
        </div>
      </nav>
    </header>
  )
}
