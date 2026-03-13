import Link from "next/link";

export default function Home() {
  return (
    <main className="home-page">
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

      <section className="search-section">
        <input
          type="text"
          placeholder="Rechercher un cours"
          className="search-input"
        />
      </section>

      <section className="home-cards">
        <Link href="/html" className="course-card course-card--html">
          <img src="/html.png" alt="HTML" className="course-card__image" />
          <h2 className="course-card__title">HTML</h2>
        </Link>

        <Link href="/css" className="course-card course-card--css">
          <img src="/css.png" alt="CSS" className="course-card__image" />
          <h2 className="course-card__title">CSS</h2>
        </Link>

        <Link href="/javascript" className="course-card course-card--js">
          <img src="/js.png" alt="JavaScript" className="course-card__image" />
          <h2 className="course-card__title">JAVASCRIPT</h2>
        </Link>
      </section>
    </main>
  );
}