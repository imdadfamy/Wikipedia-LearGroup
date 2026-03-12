import Link from "next/link";

export default function HtmlPage() {
  return (
    <main className="html-course-page">
      <header className="topbar">
        <button className="icon-button" aria-label="Menu">
          ☰
        </button>

        <div className="brand-wrapper">
          <img src="/wiki.png" alt="Logo Wikilearn" className="brand-logo" />
          <h1 className="brand">WIKILEARN</h1>
        </div>

        <button className="icon-button" aria-label="Recherche">
          ⌕
        </button>
      </header>

      <section className="course-hero">
        <div className="course-pill">HTML</div>

        <div className="course-banner">
          Apprenez HTML et progressez du niveau débutant au niveau avancé.
          Commencez dès aujourd&apos;hui !
        </div>
      </section>

      <section className="lesson-grid">
        <article className="lesson-card html-card">
          <img
            src="/html-lesson-1.png"
            alt="Balises de premier niveau"
            className="lesson-card__image"
          />

          <div className="lesson-card__meta">
            <p className="lesson-card__name">Les balises</p>
            <span className="lesson-card__level">Débutant</span>
          </div>

          <Link href="/html/debutant" className="lesson-card__button">
            Apprendre HTML
          </Link>
        </article>

        <article className="lesson-card html-card">
          <img
            src="/html-lesson-2.png"
            alt="Formulaires"
            className="lesson-card__image"
          />

          <div className="lesson-card__meta">
            <p className="lesson-card__name">Les liens hypertexte</p>
            <span className="lesson-card__level">Intermédiaire</span>
          </div>

          <Link href="/html/intermediaire" className="lesson-card__button">
            Apprendre HTML
          </Link>
        </article>

        <article className="lesson-card html-card">
          <img
            src="/html-lesson-3.png"
            alt="Attributs class et id"
            className="lesson-card__image"
          />

          <div className="lesson-card__meta">
            <p className="lesson-card__name">Attributs class et id</p>
            <span className="lesson-card__level">Avancé</span>
          </div>

          <Link href="/html/avance" className="lesson-card__button">
            Apprendre HTML
          </Link>
        </article>
      </section>
    </main>
  );
}