# 42 AI Academy

Une esquisse de plateforme créée à l’initiative d’une étudiante ou d’un étudiant pour aider les élèves de 42 à découvrir l’intelligence artificielle en construisant.

> **Initiative indépendante :** ce projet n’est pas officiellement affilié à 42 et n’est ni approuvé ni sponsorisé par l’école. Il est pensé par un élève et pour les élèves. L’ambition à terme est de le rendre utile à la communauté internationale 42, qui compte plus de 50 campus dans le monde, sans présumer du soutien de ces campus.

## Aperçu

Une page web légère, responsive et sans dépendance externe, comprenant :

- un tableau de bord d’apprentissage avec progression sauvegardée dans le navigateur ;
- cinq parcours : fondamentaux de l’IA, ingénierie de prompts, grands modèles de langage, assistants de code et agents autonomes ;
- des mini-projets pratiques ;
- des repères pour utiliser l’IA avec discernement ;
- une interface en français, conçue pour pouvoir accueillir d’autres langues.

La progression est enregistrée localement avec `localStorage`. Aucune donnée n’est envoyée à un serveur.

## Lancer la démo

Aucune installation ni compilation n’est nécessaire. Clonez le dépôt puis ouvrez `index.html` dans un navigateur moderne.

Pour servir le dossier localement :

```sh
python3 -m http.server 8000
```

Ouvrez ensuite [http://localhost:8000](http://localhost:8000).

## Structure

- `index.html` — contenu et structure de l’interface
- `styles.css` — mise en page responsive et styles
- `app.js` — parcours, filtres et progression locale
- `CONTRIBUTING.md` — comment proposer une contribution
- `ROADMAP.md` — pistes de développement

## Contribuer

Les contributions sont les bienvenues : amélioration des leçons, traduction, accessibilité, exemples de projets et retours d’expérience. Consultez [CONTRIBUTING.md](CONTRIBUTING.md) pour commencer et [ROADMAP.md](ROADMAP.md) pour les prochaines étapes envisagées.

## Périmètre

Cette version est une maquette fonctionnelle côté navigateur, et non une plateforme de cours complète. Les contenus sont des points de départ à enrichir et relire collectivement. Ne saisissez pas d’informations personnelles ou de secrets dans des outils d’IA externes.

## Licence

Aucune licence open source n’est encore définie. Les droits restent réservés tant qu’une licence n’est pas ajoutée.
