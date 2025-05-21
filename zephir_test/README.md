# Scanner d'Illustrations AR

Cette application web permet de créer une expérience de réalité augmentée à partir d'illustrations traditionnelles sur papier. Lorsque l'application détecte des marqueurs spécifiques dans l'illustration, elle affiche des animations ou des illustrations numériques correspondantes.

## Prérequis

- Un navigateur web moderne (Chrome, Firefox, Safari)
- Une caméra (webcam ou caméra de tablette/smartphone)
- Une connexion Internet
- Les illustrations avec les marqueurs imprimés

## Installation

1. Clonez ce dépôt ou téléchargez les fichiers
2. Hébergez les fichiers sur un serveur web (vous pouvez utiliser un serveur local comme Live Server pour VS Code)
3. Accédez à l'application via HTTPS (requis pour l'accès à la caméra)

## Utilisation

1. Imprimez les marqueurs fournis dans le dossier `patterns/`
2. Ouvrez l'application dans votre navigateur
3. Autorisez l'accès à la caméra lorsque demandé
4. Pointez votre caméra vers l'illustration contenant les marqueurs
5. Observez les animations et contenus numériques apparaître en réalité augmentée

## Personnalisation

Pour ajouter vos propres marqueurs et contenus :

1. Créez vos marqueurs personnalisés sur [AR.js Marker Training](https://ar-js-org.github.io/AR.js-Docs/marker-based/#custom-marker)
2. Téléchargez le fichier .patt généré et placez-le dans le dossier `patterns/`
3. Modifiez le fichier `index.html` pour ajouter votre nouveau marqueur
4. Utilisez la fonction `loadCustomContent()` dans `app.js` pour charger votre contenu personnalisé

## Technologies utilisées

- HTML5
- CSS3
- JavaScript
- AR.js
- A-Frame

## Licence

Ce projet est sous licence MIT. 