"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { lessons } from "../../../../data/lessons";

export default function LessonPage() {
  const params = useParams();

  const course = params.course as string;
  const level = params.level as string;

  const lesson = lessons?.[course as keyof typeof lessons]?.[
    level as keyof (typeof lessons)[keyof typeof lessons]
  ];

  if (!lesson) {
    return (
      <main className="lesson-page">
        <div className="lesson-container">
          <h2>Leçon introuvable</h2>
          <Link href="/" className="lesson-button">
            Retour accueil
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="lesson-page">
      <header className="topbar">
        <button className="icon-button">☰</button>

        <div className="brand-wrapper">
          <img src="/wiki.png" alt="Logo Wikilearn" className="brand-logo" />
          <h1 className="brand">WIKILEARN</h1>
        </div>

        <div className="topbar-spacer" />
      </header>

      <section className="lesson-container">
        <h2 className="lesson-title">{lesson.title}</h2>

        <pre className="lesson-text">{lesson.content}</pre>

        <Link href={`/quiz/${course}/${level}`} className="lesson-button">
          Passer au quiz
        </Link>
      </section>
    </main>
  );
}