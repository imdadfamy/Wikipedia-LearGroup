export default function CssPage() {
  return (
    <main className="html-course-page">
      
      <header className="topbar">
        <button className="icon-button">☰</button>
        <h1 className="brand">WIKILEARN</h1>
        <button className="icon-button">⌕</button>
      </header>

      <section className="course-hero">
        <div className="course-pill">CSS</div>

        <div className="course-banner">
          Apprenez le CSS et progressez du niveau débutant au niveau avancé.
          Commencez dès aujourd&apos;hui !
        </div>
      </section>

      <section className="lesson-grid">

        <article className="lesson-card css-card">
          <img src="/css1.png" className="lesson-card__image" />
          
          <div className="lesson-card__meta">
            <p className="lesson-card__name">Sélecteurs CSS</p>
            <span className="lesson-card__level">Débutant</span>
          </div>

          <button className="lesson-card__button">
            Apprendre CSS
          </button>
        </article>

        <article className="lesson-card css-card">
          <img src="/css2.png" className="lesson-card__image" />
          
          <div className="lesson-card__meta">
            <p className="lesson-card__name">Flexbox</p>
            <span className="lesson-card__level">Intermédiaire</span>
          </div>

          <button className="lesson-card__button">
            Apprendre CSS
          </button>
        </article>

        <article className="lesson-card css-card">
          <img src="/css3.png" className="lesson-card__image" />
          
          <div className="lesson-card__meta">
            <p className="lesson-card__name">Animations CSS</p>
            <span className="lesson-card__level">Avancé</span>
          </div>

          <button className="lesson-card__button">
            Apprendre CSS
          </button>
        </article>

      </section>
    </main>
  );
}