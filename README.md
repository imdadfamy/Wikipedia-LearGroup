Wikilearn

Objectif du projet

Le but du projet était de concevoir un MVP (Minimum Viable Product) d’une plateforme éducative permettant :

d’apprendre les bases du développement web

de tester ses connaissances avec des quiz

de suivre sa progression

d’intégrer des éléments de gamification

Technologies utilisées

Le projet a été développé avec les technologies suivantes :

Next.js (React)

TypeScript

CSS

Git / GitHub

Vercel pour le déploiement

LocalStorage pour stocker les informations utilisateur

Fonctionnalités principales
Page d'accueil

La page d’accueil permet de :

accéder aux différents cours

naviguer entre HTML, CSS et JavaScript

rechercher un cours

accéder aux pages d’inscription, connexion et profil

Système de compte utilisateur

Un utilisateur peut :

créer un compte

se connecter

accéder à son profil

Les informations enregistrées sont :

prénom

nom

pseudo

email

mot de passe

Ces données sont stockées dans le localStorage pour cette version MVP.

Profil utilisateur

La page profil permet d’afficher :

le pseudo de l’utilisateur

ses informations personnelles

son XP total

un accès rapide aux cours

Système de leçons

Chaque module contient une leçon qui explique les concepts nécessaires avant le quiz.

Les leçons sont organisées par :

Cours → Niveau
HTML

Débutant : les balises HTML

Intermédiaire : les liens hypertextes

Avancé : les attributs class et id

CSS

Débutant : introduction au CSS

Intermédiaire : les couleurs

Avancé : les polices et tailles

JavaScript

Débutant : variables et bases

Intermédiaire : les fonctions

Avancé : manipulation du DOM

Quiz interactifs

Chaque niveau contient 10 questions permettant de vérifier les connaissances acquises.

Fonctionnalités :

sélection de réponse

validation

correction immédiate

progression question par question

Système d’XP

Les utilisateurs gagnent :

+10 XP par bonne réponse

L’XP est visible :

pendant le quiz

dans la page profil

Barre de progression

Une barre indique la progression dans le quiz :

Question 3 / 10
Minuteur

Chaque question possède un minuteur de 10 secondes.

Si le temps est écoulé :

la question est considérée comme incorrecte

l’utilisateur passe à la suivante

Structure du projet
app
│
├ html
├ css
├ javascript
│
├ lesson
│   └ [course]
│       └ [level]
│           └ page.tsx
│
├ quiz
│   └ [course]
│       └ [level]
│           └ page.tsx
│
├ signup
├ login
├ profile
│
components
│
data
├ quizzes.ts
└ lessons.ts
│
public
│
styles
└ globals.css
Gamification

Le projet intègre déjà plusieurs éléments de gamification :

système d’XP

progression dans les quiz

apprentissage par niveaux

Fonctionnalités imaginées mais non implémentées

Certaines fonctionnalités ont été envisagées mais n’ont pas été intégrées dans cette version MVP.

Badges

Les utilisateurs pourraient débloquer des badges :

HTML Beginner

CSS Explorer

JavaScript Master

Quiz Champion

Les badges seraient obtenus en fonction :

du nombre de quiz réussis

du nombre d’XP

de la complétion des modules.

Animations de récompense

Pour améliorer l’expérience utilisateur, il serait possible d’ajouter :

animation lors d’une bonne réponse

animation de gain d’XP

confettis à la fin d’un quiz

animation de badge débloqué

Ces animations pourraient être réalisées avec :

GSAP

Framer Motion

Classement des utilisateurs

Un système de classement pourrait afficher :

1. Alex — 1200 XP
2. Emma — 950 XP
3. Lucas — 820 XP

Cela permettrait de motiver les utilisateurs.

Progression globale

Une page pourrait afficher la progression globale :

HTML : 70 %
CSS : 40 %
JavaScript : 20 %
Système de streak

Un système de streak d’apprentissage pourrait encourager les utilisateurs à apprendre chaque jour.

Exemple :

5 jours d’apprentissage consécutifs
Déploiement

Le projet est déployé avec :

Vercel

Chaque push sur GitHub déclenche automatiquement un nouveau déploiement grâce au CI/CD.

Auteur

Projet réalisé par :

Emmanuel Dongo
Flora konan
Ben brahim
quentin zounfa
im dade famy
