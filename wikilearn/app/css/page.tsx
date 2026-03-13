import Link from "next/link";

export default function CssPage() {
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
        <div className="course-pill">CSS</div>

        <div className="course-banner">
          Apprenez le CSS et progressez du niveau débutant au niveau avancé.
          Commencez dès aujourd&apos;hui !
        </div>
      </section>

      <section className="lesson-grid">
        <article className="lesson-card css-card">
          <img
            src="/css1.png"
            alt="Balises de premier niveau"
            className="lesson-card__image"
          />

          <div className="lesson-card__meta">
            <p className="lesson-card__name">Introduction au css</p>
            <span className="lesson-card__level">Débutant</span>
          </div>

          <Link href="/css/debutant" className="lesson-card__button">
            Apprendre CSS
          </Link>
        </article>

        <article className="lesson-card css-card">
          <img
            src="/css2.png"
            alt="Formulaires"
            className="lesson-card__image"
          />

          <div className="lesson-card__meta">
            <p className="lesson-card__name">Les couleurs en css</p>
            <span className="lesson-card__level">Intermédiaire</span>
          </div>

          <Link href="/css/intermediaire" className="lesson-card__button">
            Apprendre CSS
          </Link>
        </article>

        <article className="lesson-card css-card">
          <img
            src="/css3.png"
            alt="Attributs universels class et id"
            className="lesson-card__image"
          />

          <div className="lesson-card__meta">
            <p className="lesson-card__name">Les polices et taille</p>
            <span className="lesson-card__level">Avancé</span>
          </div>

          <Link href="/css/avance" className="lesson-card__button">
            Apprendre CSS
          </Link>
        </article>
      </section>
    </main>
  );
}