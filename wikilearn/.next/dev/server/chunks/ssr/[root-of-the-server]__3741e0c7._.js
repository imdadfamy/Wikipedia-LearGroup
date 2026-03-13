module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Documents/Wikipedia-LearGroup/wikilearn/data/quizzes.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "quizzes",
    ()=>quizzes
]);
const quizzes = {
    html: {
        debutant: {
            title: "Les balises HTML",
            questions: [
                {
                    question: "Quelle balise crée un paragraphe ?",
                    options: [
                        "<p>",
                        "<div>",
                        "<span>",
                        "<text>"
                    ],
                    answer: "<p>"
                },
                {
                    question: "Quelle balise crée un titre principal ?",
                    options: [
                        "<h1>",
                        "<title>",
                        "<header>",
                        "<head>"
                    ],
                    answer: "<h1>"
                },
                {
                    question: "Quelle balise permet d'insérer une image ?",
                    options: [
                        "<img>",
                        "<picture>",
                        "<image>",
                        "<src>"
                    ],
                    answer: "<img>"
                },
                {
                    question: "Quelle balise crée un lien ?",
                    options: [
                        "<link>",
                        "<a>",
                        "<href>",
                        "<url>"
                    ],
                    answer: "<a>"
                },
                {
                    question: "Quelle balise crée une liste non ordonnée ?",
                    options: [
                        "<ul>",
                        "<ol>",
                        "<li>",
                        "<list>"
                    ],
                    answer: "<ul>"
                },
                {
                    question: "Quelle balise représente un élément de liste ?",
                    options: [
                        "<li>",
                        "<ul>",
                        "<ol>",
                        "<item>"
                    ],
                    answer: "<li>"
                },
                {
                    question: "Quelle balise crée une division ?",
                    options: [
                        "<div>",
                        "<section>",
                        "<block>",
                        "<span>"
                    ],
                    answer: "<div>"
                },
                {
                    question: "Quelle balise contient le contenu principal d'une page ?",
                    options: [
                        "<body>",
                        "<html>",
                        "<head>",
                        "<main>"
                    ],
                    answer: "<body>"
                },
                {
                    question: "Quelle balise contient les métadonnées ?",
                    options: [
                        "<meta>",
                        "<head>",
                        "<header>",
                        "<data>"
                    ],
                    answer: "<head>"
                },
                {
                    question: "Quelle balise crée un saut de ligne ?",
                    options: [
                        "<br>",
                        "<break>",
                        "<lb>",
                        "<newline>"
                    ],
                    answer: "<br>"
                }
            ]
        },
        intermediaire: {
            title: "Les liens hypertextes",
            questions: [
                {
                    question: "Quel attribut définit l'adresse du lien ?",
                    options: [
                        "href",
                        "src",
                        "link",
                        "url"
                    ],
                    answer: "href"
                },
                {
                    question: "Quelle balise crée un lien ?",
                    options: [
                        "<a>",
                        "<link>",
                        "<href>",
                        "<url>"
                    ],
                    answer: "<a>"
                },
                {
                    question: "Quel attribut ouvre un lien dans un nouvel onglet ?",
                    options: [
                        "target",
                        "blank",
                        "newtab",
                        "open"
                    ],
                    answer: "target"
                },
                {
                    question: "Quelle valeur de target ouvre un nouvel onglet ?",
                    options: [
                        "_blank",
                        "_new",
                        "_tab",
                        "_open"
                    ],
                    answer: "_blank"
                },
                {
                    question: "Quel attribut définit le texte alternatif d'un lien image ?",
                    options: [
                        "alt",
                        "text",
                        "label",
                        "desc"
                    ],
                    answer: "alt"
                },
                {
                    question: "Quel attribut permet de créer une ancre dans la page ?",
                    options: [
                        "id",
                        "name",
                        "href",
                        "anchor"
                    ],
                    answer: "id"
                },
                {
                    question: "Quel symbole est utilisé pour les ancres ?",
                    options: [
                        "#",
                        "@",
                        "&",
                        "%"
                    ],
                    answer: "#"
                },
                {
                    question: "Quel attribut permet de télécharger un fichier ?",
                    options: [
                        "download",
                        "file",
                        "save",
                        "export"
                    ],
                    answer: "download"
                },
                {
                    question: "Quel attribut donne un titre au lien ?",
                    options: [
                        "title",
                        "name",
                        "text",
                        "alt"
                    ],
                    answer: "title"
                },
                {
                    question: "Quelle balise permet de créer un lien interne ?",
                    options: [
                        "<a>",
                        "<link>",
                        "<href>",
                        "<nav>"
                    ],
                    answer: "<a>"
                }
            ]
        },
        avance: {
            title: "Attribut class et id",
            questions: [
                {
                    question: "Quel attribut identifie un élément unique ?",
                    options: [
                        "id",
                        "class",
                        "name",
                        "key"
                    ],
                    answer: "id"
                },
                {
                    question: "Quel attribut peut être utilisé plusieurs fois ?",
                    options: [
                        "class",
                        "id",
                        "name",
                        "unique"
                    ],
                    answer: "class"
                },
                {
                    question: "Comment sélectionner un id en CSS ?",
                    options: [
                        "#",
                        ".",
                        "@",
                        "$"
                    ],
                    answer: "#"
                },
                {
                    question: "Comment sélectionner une classe en CSS ?",
                    options: [
                        ".",
                        "#",
                        "@",
                        "&"
                    ],
                    answer: "."
                },
                {
                    question: "Un id peut être utilisé combien de fois ?",
                    options: [
                        "1",
                        "2",
                        "illimité",
                        "10"
                    ],
                    answer: "1"
                },
                {
                    question: "Combien de classes peut avoir un élément ?",
                    options: [
                        "plusieurs",
                        "1",
                        "2",
                        "3"
                    ],
                    answer: "plusieurs"
                },
                {
                    question: "Quelle syntaxe est correcte ?",
                    options: [
                        'class="box"',
                        'id="box"',
                        'class=box',
                        'id=box'
                    ],
                    answer: 'class="box"'
                },
                {
                    question: "Quelle priorité est plus forte en CSS ?",
                    options: [
                        "id",
                        "class",
                        "tag",
                        "body"
                    ],
                    answer: "id"
                },
                {
                    question: "Quelle balise utilise souvent id et class ?",
                    options: [
                        "<div>",
                        "<img>",
                        "<br>",
                        "<meta>"
                    ],
                    answer: "<div>"
                },
                {
                    question: "Quel attribut sert à styliser plusieurs éléments ?",
                    options: [
                        "class",
                        "id",
                        "name",
                        "key"
                    ],
                    answer: "class"
                }
            ]
        }
    },
    css: {
        debutant: {
            title: "Introduction au CSS",
            questions: [
                {
                    question: "Que signifie CSS ?",
                    options: [
                        "Cascading Style Sheets",
                        "Computer Style System",
                        "Creative Style Sheets",
                        "Color Style System"
                    ],
                    answer: "Cascading Style Sheets"
                },
                {
                    question: "Quel fichier contient du CSS ?",
                    options: [
                        "style.css",
                        "index.html",
                        "script.js",
                        "page.php"
                    ],
                    answer: "style.css"
                },
                {
                    question: "Quelle propriété change la couleur du texte ?",
                    options: [
                        "color",
                        "text-color",
                        "font-color",
                        "style"
                    ],
                    answer: "color"
                },
                {
                    question: "Quelle propriété change la taille du texte ?",
                    options: [
                        "font-size",
                        "text-size",
                        "size",
                        "font-style"
                    ],
                    answer: "font-size"
                },
                {
                    question: "Quelle propriété change la couleur de fond ?",
                    options: [
                        "background",
                        "background-color",
                        "bgcolor",
                        "color"
                    ],
                    answer: "background-color"
                },
                {
                    question: "Quel symbole commence une classe en CSS ?",
                    options: [
                        ".",
                        "#",
                        "@",
                        "$"
                    ],
                    answer: "."
                },
                {
                    question: "Quel symbole sélectionne un id ?",
                    options: [
                        "#",
                        ".",
                        "@",
                        "&"
                    ],
                    answer: "#"
                },
                {
                    question: "Quelle propriété centre du texte ?",
                    options: [
                        "text-align",
                        "align",
                        "center",
                        "text-center"
                    ],
                    answer: "text-align"
                },
                {
                    question: "Quelle propriété change la police ?",
                    options: [
                        "font-family",
                        "font",
                        "text-font",
                        "family"
                    ],
                    answer: "font-family"
                },
                {
                    question: "Quelle propriété ajoute un espace intérieur ?",
                    options: [
                        "padding",
                        "margin",
                        "space",
                        "gap"
                    ],
                    answer: "padding"
                }
            ]
        },
        intermediaire: {
            title: "Les couleurs CSS",
            questions: [
                {
                    question: "Quel mot définit la couleur rouge ?",
                    options: [
                        "red",
                        "rouge",
                        "r",
                        "#red"
                    ],
                    answer: "red"
                },
                {
                    question: "Quelle notation représente une couleur hex ?",
                    options: [
                        "#ffffff",
                        "rgb()",
                        "hsl()",
                        "color()"
                    ],
                    answer: "#ffffff"
                },
                {
                    question: "Quelle fonction définit une couleur RGB ?",
                    options: [
                        "rgb()",
                        "rgba()",
                        "hex()",
                        "color()"
                    ],
                    answer: "rgb()"
                },
                {
                    question: "Quel paramètre ajoute la transparence ?",
                    options: [
                        "rgba()",
                        "rgb()",
                        "hex()",
                        "color"
                    ],
                    answer: "rgba()"
                },
                {
                    question: "Combien de valeurs dans rgb ?",
                    options: [
                        "3",
                        "2",
                        "4",
                        "5"
                    ],
                    answer: "3"
                },
                {
                    question: "Quelle couleur est #000000 ?",
                    options: [
                        "noir",
                        "blanc",
                        "rouge",
                        "bleu"
                    ],
                    answer: "noir"
                },
                {
                    question: "Quelle couleur est #ffffff ?",
                    options: [
                        "blanc",
                        "noir",
                        "bleu",
                        "vert"
                    ],
                    answer: "blanc"
                },
                {
                    question: "Quelle propriété applique la couleur au texte ?",
                    options: [
                        "color",
                        "background",
                        "text",
                        "font"
                    ],
                    answer: "color"
                },
                {
                    question: "Quelle propriété applique la couleur au fond ?",
                    options: [
                        "background-color",
                        "bgcolor",
                        "color",
                        "background"
                    ],
                    answer: "background-color"
                },
                {
                    question: "Quelle fonction définit HSL ?",
                    options: [
                        "hsl()",
                        "rgb()",
                        "hex()",
                        "color()"
                    ],
                    answer: "hsl()"
                }
            ]
        },
        avance: {
            title: "Polices et tailles",
            questions: [
                {
                    question: "Quelle propriété change la police ?",
                    options: [
                        "font-family",
                        "font-size",
                        "font-style",
                        "text"
                    ],
                    answer: "font-family"
                },
                {
                    question: "Quelle propriété change la taille ?",
                    options: [
                        "font-size",
                        "text-size",
                        "size",
                        "font"
                    ],
                    answer: "font-size"
                },
                {
                    question: "Quelle unité représente les pixels ?",
                    options: [
                        "px",
                        "em",
                        "%",
                        "rem"
                    ],
                    answer: "px"
                },
                {
                    question: "Quelle unité dépend de la taille parent ?",
                    options: [
                        "em",
                        "px",
                        "%",
                        "vh"
                    ],
                    answer: "em"
                },
                {
                    question: "Quelle unité dépend du root ?",
                    options: [
                        "rem",
                        "px",
                        "%",
                        "vh"
                    ],
                    answer: "rem"
                },
                {
                    question: "Quelle propriété met le texte en gras ?",
                    options: [
                        "font-weight",
                        "bold",
                        "text-weight",
                        "font-bold"
                    ],
                    answer: "font-weight"
                },
                {
                    question: "Quelle propriété met le texte en italique ?",
                    options: [
                        "font-style",
                        "italic",
                        "text-style",
                        "font-italic"
                    ],
                    answer: "font-style"
                },
                {
                    question: "Quelle propriété espace les lettres ?",
                    options: [
                        "letter-spacing",
                        "word-spacing",
                        "spacing",
                        "text-gap"
                    ],
                    answer: "letter-spacing"
                },
                {
                    question: "Quelle propriété espace les mots ?",
                    options: [
                        "word-spacing",
                        "letter-spacing",
                        "spacing",
                        "gap"
                    ],
                    answer: "word-spacing"
                },
                {
                    question: "Quelle propriété change la hauteur de ligne ?",
                    options: [
                        "line-height",
                        "height",
                        "text-height",
                        "spacing"
                    ],
                    answer: "line-height"
                }
            ]
        }
    },
    javascript: {
        debutant: {
            title: "Variables et bases",
            questions: [
                {
                    question: "Quel mot crée une variable moderne ?",
                    options: [
                        "let",
                        "var",
                        "const",
                        "int"
                    ],
                    answer: "let"
                },
                {
                    question: "Quelle variable ne change jamais ?",
                    options: [
                        "const",
                        "let",
                        "var",
                        "static"
                    ],
                    answer: "const"
                },
                {
                    question: "Quelle fonction affiche dans la console ?",
                    options: [
                        "console.log()",
                        "print()",
                        "log()",
                        "display()"
                    ],
                    answer: "console.log()"
                },
                {
                    question: "Quel symbole termine une instruction ?",
                    options: [
                        ";",
                        ".",
                        ":",
                        ","
                    ],
                    answer: ";"
                },
                {
                    question: "Quel mot clé crée une fonction ?",
                    options: [
                        "function",
                        "def",
                        "method",
                        "func"
                    ],
                    answer: "function"
                },
                {
                    question: "Quelle structure teste une condition ?",
                    options: [
                        "if",
                        "for",
                        "while",
                        "loop"
                    ],
                    answer: "if"
                },
                {
                    question: "Quel opérateur signifie égal ?",
                    options: [
                        "==",
                        "=",
                        "===",
                        "!="
                    ],
                    answer: "==="
                },
                {
                    question: "Quel type représente du texte ?",
                    options: [
                        "string",
                        "text",
                        "word",
                        "char"
                    ],
                    answer: "string"
                },
                {
                    question: "Quel type représente un nombre ?",
                    options: [
                        "number",
                        "int",
                        "float",
                        "num"
                    ],
                    answer: "number"
                },
                {
                    question: "Quel mot affiche une alerte ?",
                    options: [
                        "alert()",
                        "message()",
                        "popup()",
                        "warn()"
                    ],
                    answer: "alert()"
                }
            ]
        },
        intermediaire: {
            title: "Les fonctions",
            questions: [
                {
                    question: "Comment appeler une fonction ?",
                    options: [
                        "nom()",
                        "call()",
                        "run()",
                        "execute()"
                    ],
                    answer: "nom()"
                },
                {
                    question: "Quel mot retourne une valeur ?",
                    options: [
                        "return",
                        "send",
                        "give",
                        "output"
                    ],
                    answer: "return"
                },
                {
                    question: "Comment passer une donnée à une fonction ?",
                    options: [
                        "paramètre",
                        "variable",
                        "option",
                        "value"
                    ],
                    answer: "paramètre"
                },
                {
                    question: "Quelle syntaxe crée une fonction fléchée ?",
                    options: [
                        "=>",
                        "->",
                        "==>",
                        "<="
                    ],
                    answer: "=>"
                },
                {
                    question: "Comment écrire une fonction fléchée ?",
                    options: [
                        "() => {}",
                        "function => {}",
                        "=>()",
                        "{} =>"
                    ],
                    answer: "() => {}"
                },
                {
                    question: "Que fait une fonction ?",
                    options: [
                        "exécute du code",
                        "crée une page",
                        "compile du code",
                        "charge un fichier"
                    ],
                    answer: "exécute du code"
                },
                {
                    question: "Une fonction peut-elle retourner une valeur ?",
                    options: [
                        "oui",
                        "non",
                        "parfois",
                        "jamais"
                    ],
                    answer: "oui"
                },
                {
                    question: "Une fonction peut avoir combien de paramètres ?",
                    options: [
                        "plusieurs",
                        "1",
                        "2",
                        "3"
                    ],
                    answer: "plusieurs"
                },
                {
                    question: "Quel mot définit une fonction ?",
                    options: [
                        "function",
                        "method",
                        "def",
                        "func"
                    ],
                    answer: "function"
                },
                {
                    question: "Une fonction peut-elle appeler une autre fonction ?",
                    options: [
                        "oui",
                        "non",
                        "rarement",
                        "jamais"
                    ],
                    answer: "oui"
                }
            ]
        },
        avance: {
            title: "Manipulation du DOM",
            questions: [
                {
                    question: "Quel objet représente la page ?",
                    options: [
                        "document",
                        "window",
                        "page",
                        "html"
                    ],
                    answer: "document"
                },
                {
                    question: "Quelle méthode sélectionne un id ?",
                    options: [
                        "getElementById",
                        "querySelector",
                        "getElement",
                        "selectId"
                    ],
                    answer: "getElementById"
                },
                {
                    question: "Quelle méthode sélectionne une classe ?",
                    options: [
                        "getElementsByClassName",
                        "querySelector",
                        "selectClass",
                        "getClass"
                    ],
                    answer: "getElementsByClassName"
                },
                {
                    question: "Quelle méthode sélectionne avec CSS ?",
                    options: [
                        "querySelector",
                        "getElement",
                        "select",
                        "cssSelect"
                    ],
                    answer: "querySelector"
                },
                {
                    question: "Quelle propriété change le texte ?",
                    options: [
                        "innerText",
                        "textContent",
                        "value",
                        "data"
                    ],
                    answer: "innerText"
                },
                {
                    question: "Quelle propriété change le HTML ?",
                    options: [
                        "innerHTML",
                        "textHTML",
                        "htmlContent",
                        "setHTML"
                    ],
                    answer: "innerHTML"
                },
                {
                    question: "Quelle méthode ajoute une classe ?",
                    options: [
                        "classList.add",
                        "addClass",
                        "class.add",
                        "pushClass"
                    ],
                    answer: "classList.add"
                },
                {
                    question: "Quelle méthode supprime une classe ?",
                    options: [
                        "classList.remove",
                        "deleteClass",
                        "removeClass",
                        "class.delete"
                    ],
                    answer: "classList.remove"
                },
                {
                    question: "Quel événement détecte un clic ?",
                    options: [
                        "click",
                        "hover",
                        "press",
                        "tap"
                    ],
                    answer: "click"
                },
                {
                    question: "Quelle méthode ajoute un événement ?",
                    options: [
                        "addEventListener",
                        "addEvent",
                        "listen",
                        "eventAdd"
                    ],
                    answer: "addEventListener"
                }
            ]
        }
    }
};
}),
"[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuizPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Wikipedia-LearGroup/wikilearn/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Wikipedia-LearGroup/wikilearn/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Wikipedia-LearGroup/wikilearn/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Wikipedia-LearGroup/wikilearn/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$data$2f$quizzes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Wikipedia-LearGroup/wikilearn/data/quizzes.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function QuizPage() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const course = params.course;
    const level = params.level;
    const quiz = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$data$2f$quizzes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["quizzes"][course]?.[level];
    const [currentQuestion, setCurrentQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedAnswer, setSelectedAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [xp, setXp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isAnswered, setIsAnswered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isFinished, setIsFinished] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(10);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!quiz || isAnswered || isFinished) return;
        if (timeLeft === 0) {
            setFeedback("Temps écoulé ! Question ratée.");
            setIsAnswered(true);
            return;
        }
        const timer = setTimeout(()=>{
            setTimeLeft((prev)=>prev - 1);
        }, 1000);
        return ()=>clearTimeout(timer);
    }, [
        timeLeft,
        isAnswered,
        isFinished,
        quiz
    ]);
    if (!quiz) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "quiz-page",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "quiz-topbar",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "brand",
                        children: "WIKILEARN"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "quiz-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Cours introuvable"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "next-button",
                            children: "Retour accueil"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this);
    }
    const questions = quiz.questions;
    const question = questions[currentQuestion];
    const progressPercent = (currentQuestion + 1) / questions.length * 100;
    const handleValidate = ()=>{
        if (!selectedAnswer || isAnswered) return;
        const isCorrect = selectedAnswer === question.answer;
        if (isCorrect) {
            setScore((prev)=>prev + 1);
            setXp((prev)=>prev + 10);
            setFeedback("Bonne réponse ! +10 XP");
        } else {
            setFeedback(`Mauvaise réponse. Bonne réponse : ${question.answer}`);
        }
        setIsAnswered(true);
    };
    const handleNext = ()=>{
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion((prev)=>prev + 1);
            setSelectedAnswer("");
            setIsAnswered(false);
            setFeedback("");
            setTimeLeft(10);
        } else {
            setIsFinished(true);
        }
    };
    if (isFinished) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "quiz-page",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "quiz-topbar",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "brand",
                        children: "WIKILEARN"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "quiz-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "quiz-header__row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Quiz terminé"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        xp,
                                        " XP"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "progress-bar",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "progress-bar__fill",
                                style: {
                                    width: "100%"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "quiz-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "question-box",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: quiz.title
                            }, void 0, false, {
                                fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "quiz-result",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Score : ",
                                        score,
                                        " / ",
                                        questions.length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "XP gagné : ",
                                        xp
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "next-button",
                            children: "Retour à l’accueil"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
            lineNumber: 95,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "quiz-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "quiz-topbar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "brand",
                    children: "WIKILEARN"
                }, void 0, false, {
                    fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "quiz-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "quiz-header__row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Question ",
                                    currentQuestion + 1,
                                    " sur ",
                                    questions.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    xp,
                                    " XP"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "progress-bar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "progress-bar__fill",
                            style: {
                                width: `${progressPercent}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "timer-box",
                        children: [
                            "Temps restant : ",
                            timeLeft,
                            "s"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "quiz-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "question-box",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: question.question
                        }, void 0, false, {
                            fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "answers-list",
                        children: question.options.map((option)=>{
                            const isSelected = selectedAnswer === option;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `answer-button ${isSelected ? "answer-button--selected" : ""}`,
                                onClick: ()=>setSelectedAnswer(option),
                                disabled: isAnswered,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: option
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                                        lineNumber: 171,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "answer-circle"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                                        lineNumber: 172,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, option, true, {
                                fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                                lineNumber: 165,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    feedback && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "quiz-feedback",
                        children: feedback
                    }, void 0, false, {
                        fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                        lineNumber: 178,
                        columnNumber: 22
                    }, this),
                    !isAnswered ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "next-button",
                        onClick: handleValidate,
                        children: "Valider"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                        lineNumber: 181,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "next-button",
                        onClick: handleNext,
                        children: "Suivant"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3741e0c7._.js.map