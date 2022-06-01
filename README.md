# Projet de validation pour cours JavaScript 2
Séverine Bochatay, Adrien Coulon, Grégoire Gavin
 
# Idée projet : outil pour organiser les tâches ménagères dans une coloc

## Liste des collaborateurs
Séverine BOCHATAY, Adrien COULON, Grégoire GAVIN

## Descriptif du projet
Créer une application qui permettent aux différents colocataires d'enregistrer de manière ludique les tâches ménagères effectuées dans l'appartement.

## Analyse concurentielle, état de l'art
Il n'existe à notre connaissance aucune application qui propose exactement ce que nous souhaitons faire. L'application Trello permet de collaborer sur un projet, en le divisant en tâche, et est souvent citée comme un moyen de gérer les tâches dans une colocation (https://thecolivers.com/5-applications-pour-gerer-sa-colocation/). Toutefois, celle-ci n'a pas été développée dans l'idée précise de répartir des tâches ménagères. Il manque également tout l'aspect ludique que nous souhaitons ajouter à notre plateforme (nombre de points par tâches, classement, ...).
L'idée nous vient d'abord d'un besoin personnel. Nous avons constaté l'inefficacité de simplement mettre en place un calendrier des tâches rigides et nous proposons donc une application qui permette un suivi des tâches, ainsi qu'une certains fléxibilité dans leur réalisation. Nous nous inspirons dans une certaine mesure de tricount qui permet de suivre l'état des comptes dans un groupe, mais nous remplaçons les dépenses par des tâches ménagères et les montant par un nombres de point.

## Analyse de faisabilité
Au vu des différentes recherches que nous avons faites quant aux potentialités de Meteor, il nous semble que notre projet est tout à fait réalisable.

## Analyse fonctionnelle
**User story**
En tant qu'utilisatrice/utilisateur, je peux : 
- Créer un compte
- Créer une Colocation
- Rejoindre une Colocation
- Créer des tâches dans une Colocation rejointe
- Voir les tâches
- M'attribuer des tâches
- Marquer des tâches comme accomplies
- Gagner des points selon les tâches accomplies
- Voir mon profil et mes points
- Voir le profil et les points des autres colocs
- Basculer l'affichage en dark mode
- Réinitialiser mon mot de passe
- ...

**Classes/Objets**

Profil :
- non*
- password*

Colocation :
- nom*
- mot de passe*
- membres (nom et score)*

Tâche :
- ID*
- nom*
- date de création*
- attribution (nom du coloc qui s'est attribué la tâche)
- date de réalisation (quand tâche marquée comme accomplie)

**Pages**
 - Page "Dashboard", avec les tâches ouvertes, par pièce, et la possibilité d'en créer des nouvelles.
 - Page "Leaderboard", avec les noms des différents utilisateurs et le score.
 - Page "Login"

**Idées ressources / outils** 
- [Tutorial pour créer une todo (Meteor + React simple)](https://react-tutorial.meteor.com/simple-todos/)
- [Tailwind CSS](https://tailwindcss.com/) ou [Primer Design System](https://primer.style/) ou [Bootstrap](https://getbootstrap.com/) mais bof
- [Figma](https://www.figma.com/)
- ...

**Questions**
 - Est-ce que les utilisateurs peuvent attribuer des tâches aux autres ?
 - Que fait-on avec les points ? Ca pourrait être une règle définie à l'avance par les colocs : au bout de "XX" points, on paie une bouffe ou on fait un kdo.
 - Est-ce qu'il y a une notion de date, de calendrier ou de délai ?
 - Comment rejoint-on une coloc ? (lien unique, mot de passe, etc)
 - ...

**Etat au 31.05.2022**

Nous n'avons pas réussi à créer toutes les fonctionnalités que nous voulions. 
En effet, nous avons décidé de fixer le score attribué à chaque tâche à 1. Les utilisateurs n'ont donc pas la possibilité de choisir eux-mêmes le nombre de poins.
Il n'y a pas non plus de moyen de faire augmenter le nombre de point reçu par tâche si cella-là n'a pas été effectué depuis longtemps.
Dans la page leaderboard, nous rencontrons encore des problèmes pour afficher le nom des utilisateurs et leur score, mais dans l'ensemble nous somme satisfaits de l'application que nous avons créé.
