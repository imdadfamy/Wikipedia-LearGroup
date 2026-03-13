import Link from "next/link";

export default function JavascriptPage() {
  return (
    <main className="html-course-page">
      <header className="topbar">
        <button className="icon-button">☰</button>

        <div className="brand-wrapper">
          <img src="/wiki.png" alt="logo" className="brand-logo"/>
          <h1 className="brand">WIKILEARN</h1>
        </div>

        <button className="icon-button">⌕</button>
      </header>

      <section className="course-hero">
        <div className="course-pill">JAVASCRIPT</div>

        <div className="course-banner">
          Apprenez JavaScript et progressez du niveau débutant au niveau avancé.
          Commencez dès aujourd&apos;hui !
        </div>
      </section>

      <section className="lesson-grid">

        <article className="lesson-card js-card">
          <img src="/js1.png" className="lesson-card__image"/>

          <div className="lesson-card__meta">
            <p>Variables et bases</p>
            <span>Débutant</span>
          </div>

          <Link href="/javascript/debutant" className="lesson-card__button">
            Apprendre
          </Link>
        </article>


        <article className="lesson-card js-card">
          <img src="/js2.png" className="lesson-card__image"/>

          <div className="lesson-card__meta">
            <p>Fonctions</p>
            <span>Intermédiaire</span>
          </div>

          <Link href="/javascript/intermediaire" className="lesson-card__button">
            Apprendre
          </Link>
        </article>


        <article className="lesson-card js-card">
          <img src="/js3.png" className="lesson-card__image"/>

          <div className="lesson-card__meta">
            <p>Manipulation du DOM</p>
            <span>Avancé</span>
          </div>

          <Link href="/javascript/avance" className="lesson-card__button">
            Apprendre
          </Link>
        </article>

      </section>
    </main>
  );
}