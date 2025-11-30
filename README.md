 Calculatrice JavaScript------

Une calculatrice simple et fonctionnelle codée en HTML / CSS / JavaScript, inspirée des interfaces Google, Windows et Apple.
Ce projet est idéal pour pratiquer : DOM, gestion des événements, logique applicative et manipulation de chaînes.

 Fonctionnalités------
 Affichage et interactions

Affichage des chiffres et symboles tapés dans l’écran principal.

Affichage du calcul complet en plus petit au-dessus du résultat (comme sur Google).

 Opérations------

Calcul des expressions lorsque l’utilisateur appuie sur le bouton "=".

Gestion complète des opérations : +, -, *, /.

Support des nombres décimaux via la touche ".".

 Gestion des états------

Possibilité d’enchaîner les calculs :

si un résultat est affiché et que l’utilisateur appuie sur un chiffre ou symbole, l’ancien calcul est réinitialisé automatiquement.

Bouton "CE" : supprime le dernier caractère (backspace).

Bouton "C" : réinitialise totalement la calculatrice (reset complet).

 Contraintes et sécurités--------

Impossible de terminer une expression par un symbole (+, -, *, /).

Impossible de terminer une expression par un ".".

Empêche les doublons de symboles (ex: 5++3).

Empêche plusieurs décimales dans un même nombre.

 Structure du projet
/project-root
│
├── index.html
├── style.css
└── script.js


index.html → structure de la calculatrice

style.css → mise en forme de l’interface

script.js → logique de fonctionnement

 Logique JavaScript (résumé)----------

Le script gère :

la mise à jour de l'écran principal

la validation des inputs

l'exécution des calculs avec eval() ou une fonction maison

l’affichage du calcul en cours

la gestion du mode "post-résultat" (reset automatique si un nouveau calcul démarre)

 Aperçu visuel (optionnel)---------

Tu peux ajouter ici des images ou une capture d’écran une fois l’interface terminée.

 Objectifs pédagogiques------------

Ce projet te permettra de travailler :

la manipulation du DOM

les événements (click, touches…)

la gestion des états dans une interface interactive

la validation d’entrées utilisateurs

la conception d’une mini-application complète

 Améliorations possibles-------

Mode sombre / clair

Mode scientifique avec plus d’opérations

Gestion du clavier physique

Historique des calculs

Animations CSS
