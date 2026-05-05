import { Link } from 'react-router-dom'
import logoHorizontal from '../../assets/logo-lagalette-brand.png'
import { menuLinks } from '../../siteData'

export function Navbar() {
  return (
    <header className="site-header navbar-shell">
      <nav className="navbar navbar-inner" aria-label="Navegação principal">
        <Link className="brand navbar-logo" to="/#hero">
          <img src={logoHorizontal} alt="La Galette Buffet" />
        </Link>

        <div className="nav-links navbar-links">
          <Link to="/#sobre-nos">{'Sobre N\u00f3s'}</Link>

          <div className="menu-dropdown">
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
                <Link key={item.to} to={item.to}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/#servicos-complementares">{'Servi\u00e7os'}</Link>
          <Link className="navbar-contact" to="/#contato">
            Contato
          </Link>
        </div>
      </nav>
    </header>
  )
}
