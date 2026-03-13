import Link from "next/link";

export default function HtmlDebutantPage() {
  return (
    <main className="lesson-start-page">
      <header className="topbar">
        <button className="icon-button" aria-label="Menu">
          ☰
        </button>

        <div className="brand-wrapper">
          <img src="/wiki.png" alt="Logo Wikilearn" className="brand-logo" />
          <h1 className="brand">WIKILEARN</h1>
        </div>

        <div className="topbar-spacer" />
      </header>

      <section className="lesson-start-header" />

      <section className="lesson-start-content">
        <img
          src="/html-course-cover.png"
          alt="Cours HTML débutant"
          className="lesson-start-image"
        />

        <Link href="/quiz/html/debutant" className="lesson-start-button">
          Cours
        </Link>
      </section>
    </main>
  );
}