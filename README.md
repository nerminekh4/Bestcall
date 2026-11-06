# BestCall — site vitrine

Nouvelle version du site [bestcall.pt](https://bestcall.pt), en 5 langues (FR, PT, EN, ES, DE).

## Stack

- [Astro](https://astro.build) 5 : site statique, rapide, sans base de données
- CSS maison (`src/styles/global.css`), polices hébergées localement (Manrope, Inter, Caveat)
- Formulaires (devis, candidature avec CV) : Netlify Forms
- Hébergement prévu : Netlify (déploiement automatique à chaque push sur `main`)

## Modifier les textes

Tous les textes sont dans `src/i18n/` : un fichier par langue (`fr.ts`, `pt.ts`, `en.ts`, `es.ts`, `de.ts`).
Le code des pages ne contient aucun texte. Modifier une phrase = modifier ce fichier, rien d'autre.

Dans les textes, `{services}`, `{why}`, `{compare}`, `{jobs}`, `{quote}`, `{legal}` deviennent
automatiquement le lien vers la bonne page dans la bonne langue.

## Structure

```
public/            images, logos, favicon
src/i18n/          textes par langue + adresses des pages (routes.ts)
src/components/    en-tête, pied de page, FAQ, formulaires, icônes, drapeaux
src/views/         une vue par page (Home, Services, Why, Compare, Jobs, Quote, Legal)
src/pages/         une seule route qui génère les 35 pages
src/styles/        design (couleurs, typo, mise en page)
```

## Lancer en local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère le site dans dist/
```

## Mise en ligne (Netlify)

1. Netlify → Add new site → Import from GitHub → choisir ce repo (réglages lus dans `netlify.toml`).
2. Activer la détection des formulaires (Forms) et ajouter une notification e-mail vers contacto@bestcall.pt.
3. Brancher le domaine bestcall.pt.
4. Mettre à jour l'hébergeur dans les mentions légales (actuellement GANDI).

## À faire

- Textes définitifs avec Marta (les textes actuels sont repris du site WordPress)
- Photos HD et authentiques de l'équipe (les images actuelles sont provisoires)
- Mentions légales : nouvel hébergeur après la mise en ligne
