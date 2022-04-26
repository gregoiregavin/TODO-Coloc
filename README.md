# todo-coloc
 
# Idée projet : outil pour organiser les tâches ménagères dans une coloc

A ajouter : 
~~     Liste des collaborateurs ~~
~~     Descriptif du projet ~~
~~     Analyse concurentielle, état de l'art ~~
    - Analyse de faisabilité
    - Analyse fonctionelle
        - Technologies utilisées
        - Fonctionnalités planifiées/implémentées
        - Meta : Commencer à **penser à la gestion du projet et à la répartition des tâches** (tâches par composants et non par domaines)
    - Concept UI/UX, wireframes
    - Description du MVP

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
- e-mail*
- password*
- nom*
- photo

Colocation :
- nom*
- adresse*
- mot de passe*

Tâche :
- ID*
- nom*
- description
- temps requis*: long/moyen/court (on gagne plus de points avec une tâche longue qu'avec une courte)
- date de création*
- attribution (nom du coloc qui s'est attribué la tâche)
- date de réalisation (quand tâche marquée comme accomplie)
- délai ?
- certaines tâches hebdomadaires ? répétition ?

**Pages**
 - Page "Ma coloc", avec les tâches ouvertes, en cours
 - Page "Profil", avec les points, les tâches attribuées, la photo, etc.
 - Page "Création de tâche"
 - Page "login"
 - Page calendrier ?

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
