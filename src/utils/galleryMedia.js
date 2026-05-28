export function normalizeGalleryMedia(media) {
  if (typeof media === 'string') {
    return {
      type: 'image',
      src: media,
      preview: media,
    }
  }

  return {
    type: media.type ?? 'image',
    src: media.src,
    preview: media.poster ?? media.preview ?? media.src,
    poster: media.poster,
  }
}

export function getGalleryManifestItems(manifest) {
  if (Array.isArray(manifest)) {
    return manifest
  }

  return manifest?.media ?? []
}

export function resolveGalleryMedia(folder, entry) {
  if (typeof entry === 'string') {
    return `/gallery/${folder}/${entry}`
  }

  return {
    ...entry,
    src: `/gallery/${folder}/${entry.src}`,
    poster: entry.poster ? `/gallery/${folder}/${entry.poster}` : undefined,
    preview: entry.preview ? `/gallery/${folder}/${entry.preview}` : undefined,
  }
}
