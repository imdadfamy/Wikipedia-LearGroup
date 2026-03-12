export default function CssAvancePage() {
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
          src="\css-course-cove.png"
          alt="Cours CSS avancé"
          className="lesson-start-image"
        />

        <button className="lesson-start-button">Cours</button>
      </section>
    </main>
  );
}