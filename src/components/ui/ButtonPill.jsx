import { Link } from 'react-router-dom'

export function ButtonPill({
  children,
  className = '',
  href,
  to,
  type = 'button',
  ...props
}) {
  const classes = ['button-pill', className].filter(Boolean).join(' ')

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  )
}
