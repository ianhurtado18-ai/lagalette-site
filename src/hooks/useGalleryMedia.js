import { useEffect, useMemo, useState } from 'react'
import {
  getGalleryManifestItems,
  normalizeGalleryMedia,
  resolveGalleryMedia,
} from '../utils/galleryMedia'

export function useGalleryMedia(source) {
  const fallbackMedia = useMemo(
    () => (source ?? []).map(normalizeGalleryMedia),
    [source],
  )
  const [loadedGallery, setLoadedGallery] = useState(null)
  const manifestUrl = source?.manifestUrl
  const folder = source?.folder

  useEffect(() => {
    let isCurrent = true

    if (!manifestUrl || !folder) {
      return () => {
        isCurrent = false
      }
    }

    fetch(manifestUrl)
      .then((response) => (response.ok ? response.json() : null))
      .then((manifest) => {
        if (!isCurrent || !manifest) {
          return
        }

        const manifestMedia = getGalleryManifestItems(manifest)

        if (!manifestMedia.length) {
          return
        }

        setLoadedGallery({
          manifestUrl,
          media: manifestMedia
            .map((item) => resolveGalleryMedia(folder, item))
            .map(normalizeGalleryMedia),
        })
      })
      .catch(() => {})

    return () => {
      isCurrent = false
    }
  }, [folder, manifestUrl])

  return loadedGallery?.manifestUrl === manifestUrl ? loadedGallery.media : fallbackMedia
}
