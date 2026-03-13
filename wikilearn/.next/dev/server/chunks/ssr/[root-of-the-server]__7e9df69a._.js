module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

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
                        "<div>",
                        "<p>",
                        "<span>"
                    ],
                    answer: "<p>"
                },
                {
                    question: "Quelle balise affiche une image ?",
                    options: [
                        "<img>",
                        "<image>",
                        "<picture>"
                    ],
                    answer: "<img>"
                }
            ]
        },
        intermediaire: {
            title: "Les liens hypertextes",
            questions: [
                {
                    question: "Quelle balise crée un lien ?",
                    options: [
                        "<link>",
                        "<a>",
                        "<href>"
                    ],
                    answer: "<a>"
                }
            ]
        },
        avance: {
            title: "Class et ID",
            questions: [
                {
                    question: "Quel attribut est unique ?",
                    options: [
                        "class",
                        "id",
                        "style"
                    ],
                    answer: "id"
                }
            ]
        }
    },
    css: {
        debutant: {
            title: "Introduction CSS",
            questions: [
                {
                    question: "Que signifie CSS ?",
                    options: [
                        "Cascading Style Sheets",
                        "Creative Style System",
                        "Color Sheet System"
                    ],
                    answer: "Cascading Style Sheets"
                }
            ]
        },
        intermediaire: {
            title: "Les couleurs",
            questions: [
                {
                    question: "Quelle propriété change la couleur du texte ?",
                    options: [
                        "text-color",
                        "color",
                        "font-color"
                    ],
                    answer: "color"
                }
            ]
        },
        avance: {
            title: "Polices et tailles",
            questions: [
                {
                    question: "Quelle propriété change la taille du texte ?",
                    options: [
                        "text-size",
                        "font-size",
                        "size"
                    ],
                    answer: "font-size"
                }
            ]
        }
    },
    javascript: {
        debutant: {
            title: "Variables",
            questions: [
                {
                    question: "Quel mot clé déclare une variable moderne ?",
                    options: [
                        "var",
                        "let",
                        "int"
                    ],
                    answer: "let"
                }
            ]
        },
        intermediaire: {
            title: "Fonctions",
            questions: [
                {
                    question: "Quel mot clé crée une fonction ?",
                    options: [
                        "function",
                        "method",
                        "def"
                    ],
                    answer: "function"
                }
            ]
        },
        avance: {
            title: "DOM",
            questions: [
                {
                    question: "Quelle méthode sélectionne un élément par ID ?",
                    options: [
                        "getElementById",
                        "querySelector",
                        "selectId"
                    ],
                    answer: "getElementById"
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$data$2f$quizzes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Wikipedia-LearGroup/wikilearn/data/quizzes.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function QuizPage({ params }) {
    const course = params.course;
    const level = params.level;
    const quiz = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$data$2f$quizzes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["quizzes"][course]) return null;
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$data$2f$quizzes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["quizzes"][course][level];
    }, [
        course,
        level
    ]);
    const [currentQuestion, setCurrentQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedAnswer, setSelectedAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [xp, setXp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isAnswered, setIsAnswered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isFinished, setIsFinished] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
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
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "quiz-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Cours introuvable"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "next-button",
                            children: "Retour accueil"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
            lineNumber: 33,
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
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                    lineNumber: 81,
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
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        xp,
                                        " XP"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                            lineNumber: 86,
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
                                lineNumber: 91,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                    lineNumber: 85,
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
                                lineNumber: 97,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                            lineNumber: 96,
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
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "XP gagné : ",
                                        xp
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "next-button",
                            children: "Retour à l’accueil"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
            lineNumber: 80,
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
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                lineNumber: 117,
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
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    xp,
                                    " XP"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                        lineNumber: 122,
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
                            lineNumber: 130,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                lineNumber: 121,
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
                            lineNumber: 139,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                        lineNumber: 138,
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
                                        lineNumber: 153,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "answer-circle"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                                        lineNumber: 154,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, option, true, {
                                fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                                lineNumber: 147,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    feedback && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "quiz-feedback",
                        children: feedback
                    }, void 0, false, {
                        fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                        lineNumber: 160,
                        columnNumber: 22
                    }, this),
                    !isAnswered ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "next-button",
                        onClick: handleValidate,
                        children: "Valider"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Wikipedia$2d$LearGroup$2f$wikilearn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "next-button",
                        onClick: handleNext,
                        children: "Suivant"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Wikipedia-LearGroup/wikilearn/app/quiz/[course]/[level]/page.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7e9df69a._.js.map