export default function HtmlPage() {
  return (
    <main className="html-course-page">

      <header className="topbar">
        <button className="icon-button">☰</button>
        <h1 className="brand">WIKILEARN</h1>
        <button className="icon-button">⌕</button>
      </header>

      <section className="course-hero">

        <div className="course-pill">
          HTML
        </div>

        <div className="course-banner">
          Apprenez HTML et progressez du niveau débutant au niveau avancé.
          Commencez dès aujourd&apos;hui !
        </div>

      </section>

      <section className="lesson-grid">

        <article className="lesson-card html-card">
          <img src="/html-lesson-1.png" className="lesson-card__image" />
          <p>Balises de premier niveau</p>
           <span className="lesson-card__level">Débutant</span>
          <button className="lesson-card__button">Apprendre HTML</button>
        </article>

        <article className="lesson-card html-card">
          <img src="/html-lesson-2.png" className="lesson-card__image" />
          <p>Les liens hypertexte</p>
          <span className="lesson-card__level">Intermédiaire</span>
          <button className="lesson-card__button">Apprendre HTML</button>
        </article>

        <article className="lesson-card html-card">
          <img src="/html-lesson-3.png" className="lesson-card__image" />
          <p>Attributs class et id</p>
           <span className="lesson-card__level">Avancé</span>
          <button className="lesson-card__button">Apprendre HTML</button>
        </article>

      </section>

    </main>
  );
}