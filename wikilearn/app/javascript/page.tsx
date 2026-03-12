export default function JavascriptPage() {
  return (
    <main className="html-course-page">

      <header className="topbar">
        <button className="icon-button">☰</button>
        <h1 className="brand">WIKILEARN</h1>
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
          <img src="/js1.png" className="lesson-card__image" />

          <div className="lesson-card__meta">
            <p className="lesson-card__name">Variables et types</p>
            <span className="lesson-card__level">Débutant</span>
          </div>

          <button className="lesson-card__button">
            Apprendre
          </button>
        </article>

        <article className="lesson-card js-card">
          <img src="/js2.png" className="lesson-card__image" />

          <div className="lesson-card__meta">
            <p className="lesson-card__name">Fonctions</p>
            <span className="lesson-card__level">Intermédiaire</span>
          </div>

          <button className="lesson-card__button">
            Apprendre
          </button>
        </article>

        <article className="lesson-card js-card">
          <img src="/js3.png" className="lesson-card__image" />

          <div className="lesson-card__meta">
            <p className="lesson-card__name">DOM et événements</p>
            <span className="lesson-card__level">Avancé</span>
          </div>

          <button className="lesson-card__button">
            Apprendre
          </button>
        </article>

      </section>

    </main>
  );
}