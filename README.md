# GestionProjets

Mini-application Angular de gestion de projets permettant d'afficher une liste de projets, consulter le détail d'un projet et en ajouter de nouveaux.

## Stack

- Angular 21
- Routing Angular
- Services Angular (source unique de vérité)

## Structure du projet

```
src/app/
├── pages/
│   ├── liste-projets/
│   ├── detail-projet/
│   └── ajouter-projet/
├── services/
│   └── projet.service.ts
├── app.routes.ts
└── app.component.html
```

## Routes

| URL | Page |
|---|---|
| `/` | Liste des projets |
| `/projet/:id` | Détail d'un projet |
| `/ajouter` | Ajouter un projet |

## Lancer le projet

```bash
ng serve
```

Ouvrez ensuite `http://localhost:4200/` dans votre navigateur.

## Build

```bash
ng build
```

Les fichiers compilés seront placés dans le répertoire `dist/`.

## Tests

```bash
ng test
```

## Architecture — Règles importantes

- Toutes les données transitent exclusivement par `ProjetService`
- Les composants ne contiennent aucune logique métier
- Aucune donnée n'est stockée directement dans les composants