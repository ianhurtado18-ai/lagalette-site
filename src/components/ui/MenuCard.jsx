import { Link } from 'react-router-dom'

function MenuCardIcon({ icon }) {
  if (!icon) {
    return <span className="menu-card-icon" aria-hidden="true" />
  }

  return (
    <span className="menu-card-icon menu-card-icon-image" aria-hidden="true">
      <img src={`/menu-icons/${icon}.png`} alt="" />
    </span>
  )
}

export function MenuCard({ description, icon, image, title, to }) {
  return (
    <Link className="menu-card" to={to}>
      <img
        className="menu-card-image"
        src={image || '/gallery/cover.jpg'}
        alt=""
        aria-hidden="true"
      />
      <div className="menu-card-body">
        <MenuCardIcon icon={icon} />
        <span className="menu-card-title">{title}</span>
        <small>{description}</small>
        <span className="menu-card-link">
          Ver op&#231;&#245;es
          <span className="menu-card-link-arrow" aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}
