# La Galette Buffet - Project Rules

## Direction Artistique

Le site La Galette Buffet doit rester dans une direction visuelle :

- elegante
- chaleureuse
- premium discrete
- editoriale
- aeree
- tres lisible

Chaque evolution doit renforcer cette direction sans surcharger les pages.

## Palette

Utiliser une palette chaude, sobre et coherente :

- fond creme / blanc casse
- terracotta
- brun chaud
- brun fonce

Eviter les palettes trop froides, trop contrastees, trop colorees ou trop decoratives.

## UI

Les interfaces doivent rester simples, lisibles et respirantes :

- boutons pill
- navbar pill
- cards arrondies
- ombres tres douces
- grandes respirations entre sections
- ne jamais surcharger les pages

Favoriser des compositions editoriales, claires, avec peu d'elements visibles a la fois.

## Typographie

- Les titres doivent utiliser une serif elegante.
- Les textes courants doivent rester simples, lisibles et confortables.
- La hierarchie typographique doit etre claire, sans effets excessifs.

## Architecture

- Conserver toutes les routes existantes.
- Conserver tous les ids et anchors existants.
- Ne modifier qu'un composant ou une section a la fois.
- Respecter la structure actuelle :
  - `src/components/layout/`
  - `src/components/ui/`
  - `src/components/sections/`
  - `src/pages/`
  - `src/styles/`
  - `src/assets/`
- Toujours expliquer les fichiers modifies en fin d'intervention.

## Validation

Avant de considerer une intervention terminee, lancer :

```powershell
npm.cmd run build
npm.cmd run lint
```

Si une commande echoue a cause de l'environnement, relancer avec les permissions necessaires et expliquer clairement le resultat.
