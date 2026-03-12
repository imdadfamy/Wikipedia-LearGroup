export default function JavascriptAvancePage() {
  return (
    <main className="lesson-start-page">

      <header className="topbar">
        <button className="icon-button">☰</button>

        <div className="brand-wrapper">
          <img src="/wiki.png" className="brand-logo"/>
          <h1 className="brand">WIKILEARN</h1>
        </div>

        <div></div>
      </header>

      <section className="lesson-start-content">

        <img
          src="\js-course-cover.png"
          className="lesson-start-image"
        />

        <button className="lesson-start-button">
          Cours
        </button>

      </section>

    </main>
  );
}