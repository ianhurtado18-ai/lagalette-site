import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

const animatedHomeSectionIds = [
  'hero',
  'sobre-nos',
  'menus',
  'servicos-complementares',
  'eles-confiam-na-gente',
  'contato',
]

export function ScrollToHash() {
  const location = useLocation()

  useLayoutEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }

    const id = decodeURIComponent(location.hash.replace('#', ''))
    const timeoutIds = []
    const maxAttempts = 10
    let frameId

    function scrollToElement(attempt = 1) {
      const element = document.getElementById(id)

      if (element) {
        element.scrollIntoView({
          behavior: animatedHomeSectionIds.includes(id) ? 'smooth' : 'auto',
          block: 'start',
        })
      }

      if (attempt < maxAttempts) {
        const timeoutId = window.setTimeout(() => {
          scrollToElement(attempt + 1)
        }, 50)

        timeoutIds.push(timeoutId)
      }
    }

    frameId = window.requestAnimationFrame(() => {
      scrollToElement()
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId))
    }
  }, [location.key, location.pathname, location.hash])

  return null
}
