export function SectionTitle({
  as: Heading = 'h2',
  className = '',
  description,
  kicker,
  title,
}) {
  return (
    <div className={['section-title', className].filter(Boolean).join(' ')}>
      {kicker && <p className="eyebrow">{kicker}</p>}
      <Heading>{title}</Heading>
      {description && <p>{description}</p>}
    </div>
  )
}
