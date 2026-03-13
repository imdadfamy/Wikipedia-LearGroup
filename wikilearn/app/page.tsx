"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type User = {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
};

export default function Home() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("wikilearnUser");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("wikilearnUser");
    localStorage.removeItem("wikilearnXP");
    setUser(null);
  };

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

        <div className="auth-buttons">
          {!user ? (
            <>
              <Link href="/login" className="auth-link">
                Connexion
              </Link>

              <Link href="/signup" className="auth-link signup-link">
                S&apos;inscrire
              </Link>
            </>
          ) : (
            <>
              <span className="user-greeting">
                Bonjour, {user.username}
              </span>

              <Link href="/profile" className="auth-link">
                Profil
              </Link>

              <button onClick={handleLogout} className="logout-button">
                Déconnexion
              </button>
            </>
          )}
        </div>
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