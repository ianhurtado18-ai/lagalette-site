# Gestion des galeries

Chaque dossier de galerie peut contenir un fichier `gallery.json`.

Pour ajouter une photo :

```json
{
  "media": [
    "photo-1.jpg",
    "photo-2.png"
  ]
}
```

Pour ajouter une vidéo avec une image d'aperçu :

```json
{
  "media": [
    {
      "type": "video",
      "src": "video-1.mp4",
      "poster": "video-1-poster.jpg"
    }
  ]
}
```

Les fichiers indiqués doivent être dans le même dossier que le `gallery.json`.
