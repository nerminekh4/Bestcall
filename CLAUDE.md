# Contexte projet — BestCall

Refonte du site bestcall.pt (centre d'appel multilingue au Portugal, fondatrice et directrice : Marta).
Objectif : site moderne, dynamique et authentique ; tout ce qui est affiché doit être 100 % vrai.

- Stack : Astro 5 statique, CSS maison, Netlify (forms + hébergement). Voir README.md.
- Textes : `src/i18n/<langue>.ts` uniquement. FR = référence ; PT reprend les textes du site PT actuel quand ils existent ; EN/ES/DE traduits du FR.
- Les textes actuels sont provisoires (copie du site WordPress). Ils seront réécrits avec le verbatim de Marta : ne rien inventer (chiffres, clients, témoignages, promesses).
- URLs FR et PT identiques au site actuel (référencement) : ne pas les changer sans redirections.
- Design : bleu nuit #1B2C54, or #D4A017, crème #FAF7F1 ; Manrope (titres), Inter (texte), Caveat (accent). Signature : onde sonore + bande des langues.
- Pousser chaque modification sur `main` du repo nerminekh4/Bestcall.

Points ouverts : photos HD/authentiques, hébergeur des mentions légales à mettre à jour, liens vers les articles de blog du comparatif (non repris).
