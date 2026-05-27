export function SectionTitle({
  as: Heading = 'h2',
  className = '',
  description,
  descriptionLines,
  kicker,
  title,
  titleLines,
}) {
  const renderedTitle = titleLines?.length
    ? titleLines.map((line, index) => (
        <span className="section-title-line" key={`${line}-${index}`}>
          {line}
        </span>
      ))
    : title
  const renderedDescription = descriptionLines?.length
    ? descriptionLines.map((line, index) => (
        <span className="section-title-line" key={`${line}-${index}`}>
          {line}
        </span>
      ))
    : description

  return (
    <div className={['section-title', className].filter(Boolean).join(' ')}>
      {kicker && <p className="eyebrow">{kicker}</p>}
      <Heading>{renderedTitle}</Heading>
      {renderedDescription && <p>{renderedDescription}</p>}
    </div>
  )
}
