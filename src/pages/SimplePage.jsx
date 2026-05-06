import { FeaturePage } from './FeaturePage'
import { SectionTitle } from '../components/ui/SectionTitle'

export function SimplePage({ page }) {
  if (page.layout === 'single-feature') {
    return <FeaturePage page={page} />
  }

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
