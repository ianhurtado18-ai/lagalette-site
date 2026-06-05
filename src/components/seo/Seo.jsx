import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const siteUrl = 'https://www.lagalette.com.br'
const siteName = 'La Galette Buffet'
const defaultImage = `${siteUrl}/gallery/covers/menus-tradicionais.png`

const routeSeo = {
  '/': {
    title: 'La Galette Buffet | Buffet para eventos em Sao Paulo',
    description:
      'La Galette Buffet realiza eventos sociais e corporativos em Sao Paulo com menus personalizados, cozinha artesanal e atendimento cuidadoso.',
  },
  '/tradicionais': {
    title: 'Menus Tradicionais | La Galette Buffet',
    description:
      'Menus tradicionais com crepes, massas e risottos preparados para eventos sociais e corporativos em Sao Paulo.',
  },
  '/brasileiros': {
    title: 'Menus Brasileiros | La Galette Buffet',
    description:
      'Buffets brasileiros para eventos, incluindo feijoada, churrasco, boteco e outras opcoes tradicionais.',
  },
  '/internacionais': {
    title: 'Menus Internacionais | La Galette Buffet',
    description:
      'Menus internacionais para eventos com inspiracoes francesa, italiana, espanhola e mediterranea.',
  },
  '/finger-food': {
    title: 'Finger Foods e Ilhas Gastronomicas | La Galette Buffet',
    description:
      'Finger foods, cocktails volantes e ilhas gastronomicas para eventos elegantes e personalizados.',
  },
  '/brunchs': {
    title: 'Brunch, Breakfast e Tea Time | La Galette Buffet',
    description:
      'Menus de brunch, breakfast e tea time para eventos diurnos, sociais e corporativos.',
  },
  '/kids-teens': {
    title: 'Kids & Teens | La Galette Buffet',
    description:
      'Buffet para festas infantis e teens com menus pensados para criancas, adolescentes e convidados.',
  },
  '/servicos-complementares': {
    title: 'Servicos Complementares | La Galette Buffet',
    description:
      'Bolos, doces, bebidas e servicos complementares para personalizar eventos com a La Galette Buffet.',
  },
  '/corporativo': {
    title: 'Buffet Corporativo | La Galette Buffet',
    description:
      'Buffet corporativo para coffee breaks, almocos, happy hours, cocktails e eventos empresariais.',
  },
  '/personalizado': {
    title: 'Menus Personalizados | La Galette Buffet',
    description:
      'Menus personalizados para eventos sociais e corporativos, adaptados ao estilo e perfil de cada celebracao.',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CateringService',
  name: siteName,
  url: siteUrl,
  image: defaultImage,
  email: 'festa@lagalette.com.br',
  telephone: '+55 11 5685-7257',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sao Paulo',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Sao Paulo',
  },
  sameAs: ['https://www.instagram.com/lagalettefestas/'],
}

function ensureMeta(selector, createElement) {
  const existing = document.head.querySelector(selector)

  if (existing) {
    return existing
  }

  const element = createElement()
  document.head.appendChild(element)

  return element
}

function setMeta(name, content) {
  const element = ensureMeta(`meta[name="${name}"]`, () => {
    const meta = document.createElement('meta')
    meta.setAttribute('name', name)
    return meta
  })

  element.setAttribute('content', content)
}

function setProperty(property, content) {
  const element = ensureMeta(`meta[property="${property}"]`, () => {
    const meta = document.createElement('meta')
    meta.setAttribute('property', property)
    return meta
  })

  element.setAttribute('content', content)
}

function setLink(rel, href) {
  const element = ensureMeta(`link[rel="${rel}"]`, () => {
    const link = document.createElement('link')
    link.setAttribute('rel', rel)
    return link
  })

  element.setAttribute('href', href)
}

export function Seo() {
  const location = useLocation()
  const pathname = location.pathname.replace(/\/+$/, '') || '/'
  const metadata = routeSeo[pathname] ?? routeSeo['/']
  const canonicalUrl = `${siteUrl}${pathname === '/' ? '' : pathname}`

  useEffect(() => {
    document.documentElement.setAttribute('lang', 'pt-BR')
    document.title = metadata.title

    setMeta('description', metadata.description)
    setMeta('robots', 'index, follow')
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', metadata.title)
    setMeta('twitter:description', metadata.description)
    setMeta('twitter:image', defaultImage)

    setProperty('og:site_name', siteName)
    setProperty('og:type', 'website')
    setProperty('og:title', metadata.title)
    setProperty('og:description', metadata.description)
    setProperty('og:url', canonicalUrl)
    setProperty('og:image', defaultImage)
    setProperty('og:locale', 'pt_BR')

    setLink('canonical', canonicalUrl)

    const script = ensureMeta('script[type="application/ld+json"][data-seo="local-business"]', () => {
      const jsonLd = document.createElement('script')
      jsonLd.setAttribute('type', 'application/ld+json')
      jsonLd.setAttribute('data-seo', 'local-business')
      return jsonLd
    })
    script.textContent = JSON.stringify(structuredData)
  }, [canonicalUrl, metadata.description, metadata.title])

  return null
}
