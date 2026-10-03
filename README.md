# Chez nous, simplement — prototype de landing page

Prototype statique et responsive de la landing page : **« Désencombrer une pièce sans se décourager : la checklist gratuite à imprimer »**.

## Fonctionnalités de démonstration

- Landing page mobile-first en français canadien.
- Deux formulaires avec validation d’adresse courriel et consentement obligatoire.
- Succès d’inscription simulé : aucune adresse n’est envoyée à un service externe.
- Les inscriptions de démo sont conservées localement dans `localStorage` du navigateur.
- Aperçu interactif du PDF/freebie dans une modale.
- Menu mobile, défilement fluide, animations légères et panneau « Mode démo ».

## Lancer localement

Aucune dépendance ni installation n’est nécessaire.

1. Décompressez le dossier.
2. Ouvrez `index.html` dans votre navigateur.

## Déployer avec GitHub Pages

1. Créez un nouveau dépôt GitHub, par exemple `chez-nous-simplement`.
2. Uploadez les fichiers `index.html`, `styles.css`, `script.js` et ce README à la racine du dépôt.
3. Dans GitHub : **Settings → Pages**.
4. Sous **Build and deployment**, choisissez **Deploy from a branch**.
5. Sélectionnez la branche `main` et le dossier `/ (root)`, puis sauvegardez.
6. GitHub fournira l’URL de prévisualisation après le déploiement.

## Avant le lancement réel

Ce prototype ne collecte pas réellement les leads. Avant une campagne Pinterest Ads, remplacez le comportement de démonstration par :

- Un fournisseur email (Brevo, MailerLite, ConvertKit, etc.).
- Un stockage réel de la preuve de consentement.
- La livraison automatique du PDF.
- Des événements GA4/GTM et Pinterest Tag : `page_view`, `generate_lead`, `download_lead_magnet`.
- Une politique de confidentialité et des coordonnées réelles.
- Les URL UTM de vos créations Pinterest.

Les images chargées dans le prototype proviennent d’Unsplash et servent uniquement à simuler l’interface. Vérifiez les licences et remplacez-les par vos images sous licence ou vos visuels originaux avant la publication commerciale.
