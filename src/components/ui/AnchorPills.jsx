export function AnchorPills({ className = '', items, label = 'Sections' }) {
  return (
    <nav
      className={['anchor-pills', className].filter(Boolean).join(' ')}
      aria-label={label}
    >
      {items.map((item) => (
        <a href={`#${item.id}`} key={item.id}>
          {item.title}
        </a>
      ))}
    </nav>
  )
}
