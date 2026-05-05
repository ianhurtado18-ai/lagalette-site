import { SectionTitle } from '../components/ui/SectionTitle'

export function SimplePage({ page }) {
  return (
    <article className="page">
      <header className="page-header">
        <SectionTitle
          as="h1"
          kicker={page.kicker}
          title={page.title}
          description={page.description}
        />
      </header>
    </article>
  )
}
