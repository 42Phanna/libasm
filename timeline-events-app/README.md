# Timeline Events App

Une application web moderne de frises chronologiques interactives avec React et Vite.

## Fonctionnalités

- **Frises chronologiques interactives** : Visualisation élégante des événements historiques
- **Cartes retournables** : Cliquez sur un événement pour voir plus de détails avec un effet de flip 3D
- **Sélecteur de frises** : Menu déroulant pour basculer entre différentes frises chronologiques
- **Design responsive** : Fonctionne parfaitement sur mobile, tablette et desktop
- **Animations fluides** : Transitions CSS modernes pour une expérience utilisateur agréable

## Frises disponibles

1. **Les Carolingiens** : De Pépin le Bref à la fin de la dynastie (751-987)
2. **Empire Ottoman** : De la fondation à la République turque (1299-1923)

## Technologies utilisées

- **React 18** : Bibliothèque UI moderne
- **Vite** : Build tool ultra-rapide
- **CSS3** : Animations et transitions modernes
- **JavaScript ES6+** : Code moderne et performant

## Installation et lancement

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser la version de production
npm run preview
```

## Structure du projet

```
timeline-events-app/
├── src/
│   ├── components/
│   │   ├── EventCard.jsx          # Carte d'événement avec effet flip
│   │   ├── EventCard.css
│   │   ├── Timeline.jsx            # Composant de frise chronologique
│   │   ├── Timeline.css
│   │   ├── TimelineSelector.jsx   # Menu de sélection
│   │   └── TimelineSelector.css
│   ├── data/
│   │   └── timelines.js           # Données des frises
│   ├── App.jsx                    # Composant principal
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
└── README.md
```

## Utilisation

1. Utilisez le menu déroulant en haut à droite pour choisir une frise chronologique
2. Cliquez sur une carte d'événement pour voir les détails complets
3. Cliquez à nouveau pour revenir à la vue normale

## Personnalisation

Pour ajouter une nouvelle frise chronologique, éditez le fichier `src/data/timelines.js`

## Licence

Projet créé à des fins éducatives.
