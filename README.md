# Manga Memory Card Game

Un jeu de mémoire simple et amusant où les joueurs doivent cliquer sur chaque carte une seule fois sans répéter ! Ce jeu utilise des images d'anime tirées de l'API Kitsu et propose une interface responsive grâce à Tailwind CSS.

## Table des matières

- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Contribution](#contribution)
- [Licence](#licence)

---

## Aperçu

Manga Memory Card Game est un jeu de mémoire interactif construit avec React. Le but est simple : cliquer sur chaque carte sans en sélectionner une deux fois. Chaque clic réussi augmente votre score actuel. Si une carte est cliquée deux fois, la partie est terminée et le score est réinitialisé. Le meilleur score est enregistré pour défier les joueurs à battre leur record !

![alt text](screenshot.png)

## Fonctionnalités

- **Images d'anime aléatoires** : Utilisation de l'API Kitsu pour afficher des images de différentes séries d'anime.
- **Suivi des scores** : Le score actuel et le meilleur score sont affichés et mis à jour dynamiquement.
- **Fin de partie** : La partie se termine si une carte est cliquée deux fois, et un message de fin de partie est affiché.
- **Mélange des cartes** : Les cartes sont mélangées à chaque clic pour augmenter la difficulté.
- **Design responsive** : Conception en utilisant Tailwind CSS pour une expérience utilisateur fluide sur tous les appareils.

---

## Technologies utilisées

- **React** : Bibliothèque JavaScript pour créer des interfaces utilisateur.
- **Kitsu API** : API pour récupérer des informations sur les animes et obtenir des images.
- **Tailwind CSS** : Framework CSS utilitaire pour créer des designs responsives.
- **JavaScript** : Langage principal utilisé pour la logique du jeu.

---

## Installation

Pour exécuter ce projet en local, suivez les étapes ci-dessous :

1. **Clonez le repository** :

   ```bash
   git clone https://github.com/YakeDev/Manga-Memory-Game.git
   cd Manga-Memory-Game
   ```

2. **Installez les dépendances :** :

   ```bash
   npm install
   ```

3. **Lancez le serveur de développement :** :

   ```bash
   npm run dev
   ```

## Utilisation

**Règles du jeu**

1. Cliquez sur une image que vous n'avez jamais sélectionnée auparavant pour augmenter votre score.

2. Si vous cliquez sur une même image deux fois, la partie se termine et votre score est réinitialisé.

3. Battez votre record en cliquant uniquement sur des images uniques !

**Configuration du type d'anime**

4Par défaut, le jeu affiche des images de la série d'anime "Kuruko". Vous pouvez modifier le type d'anime en ajustant l'état imageType dans le composant CardGrid.

**Structure du code**

- CardGrid : Composant principal qui gère la logique du jeu et l'affichage des cartes.
- Card : Composant pour chaque carte d'anime, qui affiche l'image et gère les clics.
- Scoring : Suivi du score actuel et du meilleur score dans l'état React.

## Exemples de fichiers importants

- `CardGrid.js` : Composant qui récupère les images de l'API, gère le mélange des cartes et la détection de clics.
- `Card.js` : Composant d'affichage de chaque carte individuelle.

## Contribution

Les contributions sont les bienvenues ! Si vous avez des idées pour améliorer le jeu ou ajouter de nouvelles fonctionnalités, suivez les étapes ci-dessous pour contribuer :

1. **Forkez** le repository.
2. **Clonez** votre fork et créez une branche pour votre fonctionnalité :
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Effectuez vos modifications** et commitez-les :
   ```bash
   git commit -m "feat: add your feature description"
   ```
   4. **Poussez** la branche et ouvrez une Pull Request.

## Remerciements

Merci à Kitsu [Kitsu](https://kitsu.docs.apiary.io/#) pour leur API gratuite permettant d'accéder à une riche bibliothèque d'images d'anime !
