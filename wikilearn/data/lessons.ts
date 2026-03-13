export const lessons = {
  html: {
    debutant: {
      title: "Les balises HTML",
      module: "balises",
      content: `
HTML sert à structurer une page web avec des balises.

1. <h1>
La balise <h1> crée un titre principal.

Exemple :
<h1>Bienvenue</h1>

2. <p>
La balise <p> crée un paragraphe.

Exemple :
<p>Bonjour tout le monde</p>

3. <img>
La balise <img> affiche une image.

Exemple :
<img src="photo.jpg" alt="Photo" />

4. <a>
La balise <a> crée un lien.

Exemple :
<a href="https://google.com">Google</a>

5. <ul>
La balise <ul> crée une liste non ordonnée.

Exemple :
<ul>
  <li>Pomme</li>
  <li>Banane</li>
</ul>

6. <li>
La balise <li> représente un élément de liste.

7. <div>
La balise <div> sert à regrouper des éléments.

Exemple :
<div>
  <p>Texte</p>
</div>

8. <body>
La balise <body> contient le contenu visible de la page.

9. <head>
La balise <head> contient les métadonnées de la page.

10. <br>
La balise <br> crée un saut de ligne.
      `,
    },

    intermediaire: {
      title: "Les liens hypertextes",
      module: "liens",
      content: `
Les liens permettent de naviguer entre les pages.

1. <a>
La balise <a> sert à créer un lien.

2. href
L'attribut href contient l'adresse du lien.

Exemple :
<a href="https://example.com">Visiter</a>

3. target
L'attribut target permet de choisir où ouvrir le lien.

4. _blank
La valeur _blank ouvre le lien dans un nouvel onglet.

Exemple :
<a href="https://example.com" target="_blank">Ouvrir</a>

5. alt
Quand un lien contient une image, alt décrit l'image.

6. id
L'attribut id permet de créer une ancre interne dans la page.

Exemple :
<h2 id="contact">Contact</h2>
<a href="#contact">Aller à Contact</a>

7. #
Le symbole # sert à pointer vers une ancre dans la page.

8. download
L'attribut download permet de télécharger un fichier.

Exemple :
<a href="fichier.pdf" download>Télécharger</a>

9. title
L'attribut title donne une info complémentaire au lien.

10. Liens internes
On utilise aussi <a> pour naviguer dans son propre site.
      `,
    },

    avance: {
      title: "Les attributs class et id",
      module: "attributs",
      content: `
Les attributs class et id servent à cibler les éléments HTML.

1. id
L'attribut id identifie un élément unique.

Exemple :
<div id="menu"></div>

2. class
L'attribut class peut être utilisé sur plusieurs éléments.

Exemple :
<p class="important">Texte</p>

3. Sélection CSS d'un id
On utilise # en CSS.

Exemple :
#menu {
  color: red;
}

4. Sélection CSS d'une classe
On utilise . en CSS.

Exemple :
.important {
  font-weight: bold;
}

5. Un id = une seule fois
Un id doit être unique dans la page.

6. Une classe = plusieurs fois
Une classe peut être partagée.

7. Syntaxe correcte
class="box" et id="menu"

8. Priorité CSS
Un id est plus spécifique qu'une classe.

9. <div>
La balise <div> utilise souvent class et id.

10. class pour styliser plusieurs éléments
On utilise class pour appliquer le même style à plusieurs blocs.
      `,
    },
  },

  css: {
    debutant: {
      title: "Introduction au CSS",
      module: "intro",
      content: `
Le CSS sert à styliser les pages HTML.

1. CSS signifie Cascading Style Sheets.

2. Le fichier CSS s'appelle souvent style.css.

3. color
La propriété color change la couleur du texte.

Exemple :
p {
  color: red;
}

4. font-size
La propriété font-size change la taille du texte.

Exemple :
p {
  font-size: 20px;
}

5. background-color
Change la couleur de fond.

6. .classe
Le point . sélectionne une classe en CSS.

7. #id
Le dièse # sélectionne un id.

8. text-align
Permet d'aligner le texte.

Exemple :
p {
  text-align: center;
}

9. font-family
Permet de changer la police.

10. padding
Ajoute de l'espace intérieur dans un bloc.
      `,
    },

    intermediaire: {
      title: "Les couleurs en CSS",
      module: "couleurs",
      content: `
Le CSS permet de gérer les couleurs de plusieurs façons.

1. red
On peut écrire une couleur avec un mot-clé.

2. #ffffff
On peut écrire une couleur en hexadécimal.

3. rgb()
On peut écrire une couleur avec rouge, vert, bleu.

Exemple :
color: rgb(255, 0, 0);

4. rgba()
Comme rgb mais avec transparence.

Exemple :
color: rgba(255, 0, 0, 0.5);

5. rgb a 3 valeurs
Rouge, vert, bleu.

6. #000000 = noir

7. #ffffff = blanc

8. color
Applique une couleur au texte.

9. background-color
Applique une couleur de fond.

10. hsl()
Autre façon d'écrire une couleur.
      `,
    },

    avance: {
      title: "Les polices et les tailles",
      module: "polices",
      content: `
Le CSS permet aussi de travailler les polices et les dimensions du texte.

1. font-family
Change la police du texte.

2. font-size
Change la taille.

3. px
Unité en pixels.

4. em
Unité relative à l'élément parent.

5. rem
Unité relative à la racine du document.

6. font-weight
Permet de mettre le texte en gras.

Exemple :
font-weight: bold;

7. font-style
Permet de mettre en italique.

8. letter-spacing
Change l'espace entre les lettres.

9. word-spacing
Change l'espace entre les mots.

10. line-height
Change la hauteur de ligne.
      `,
    },
  },

  javascript: {
    debutant: {
      title: "Variables et bases JavaScript",
      module: "variables",
      content: `
JavaScript permet d'ajouter de l'interactivité aux pages web.

1. let
Déclare une variable moderne.

Exemple :
let age = 20;

2. const
Déclare une variable qui ne change pas.

3. console.log()
Affiche une information dans la console.

4. ;
Le point-virgule termine une instruction.

5. function
Déclare une fonction.

6. if
Permet de tester une condition.

7. ===
Compare deux valeurs strictement.

8. string
Type pour le texte.

9. number
Type pour les nombres.

10. alert()
Affiche une alerte dans le navigateur.
      `,
    },

    intermediaire: {
      title: "Les fonctions JavaScript",
      module: "fonctions",
      content: `
Les fonctions permettent de regrouper du code réutilisable.

1. nom()
On appelle une fonction avec des parenthèses.

Exemple :
direBonjour();

2. return
Renvoie une valeur.

3. paramètre
Une fonction peut recevoir des paramètres.

Exemple :
function saluer(nom) {
  return "Bonjour " + nom;
}

4. =>
Syntaxe des fonctions fléchées.

5. () => {}
Exemple de fonction fléchée.

6. Une fonction exécute du code.

7. Une fonction peut retourner une valeur.

8. Une fonction peut avoir plusieurs paramètres.

9. function
Mot-clé classique pour créer une fonction.

10. Une fonction peut appeler une autre fonction.
      `,
    },

    avance: {
      title: "Manipulation du DOM",
      module: "dom",
      content: `
Le DOM représente la structure HTML de la page.

1. document
Objet principal pour manipuler la page.

2. getElementById
Sélectionne un élément par son id.

3. getElementsByClassName
Sélectionne les éléments d'une classe.

4. querySelector
Sélectionne avec une syntaxe CSS.

Exemple :
document.querySelector(".box");

5. innerText
Modifie le texte.

6. innerHTML
Modifie le HTML interne.

7. classList.add
Ajoute une classe.

8. classList.remove
Supprime une classe.

9. click
Événement de clic.

10. addEventListener
Ajoute un événement à un élément.

Exemple :
button.addEventListener("click", function() {
  alert("Bonjour");
});
      `,
    },
  },
};