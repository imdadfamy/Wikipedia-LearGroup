"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type User = {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
};

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [xp, setXp] = useState(0);

  useEffect(() => {
    const savedUser = localStorage.getItem("wikilearnUser");
    const savedXP = localStorage.getItem("wikilearnXP");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    if (savedXP) {
      setXp(Number(savedXP));
    }
  }, []);

  if (!user) {
    return (
      <main className="profile-page">
        <div className="profile-card">
          <h2>Aucun profil trouvé</h2>
          <Link href="/signup" className="profile-button">
            Créer un compte
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="profile-page">
      <div className="profile-card">
        <h1 className="profile-title">Mon profil</h1>

        <p><strong>Prénom :</strong> {user.firstname}</p>
        <p><strong>Nom :</strong> {user.lastname}</p>
        <p><strong>Pseudo :</strong> {user.username}</p>
        <p><strong>Email :</strong> {user.email}</p>
        <p><strong>XP total :</strong> {xp}</p>

        <div className="profile-links">
          <Link href="/" className="profile-button">
            Aller à l’accueil
          </Link>

          <Link href="/html" className="profile-button">
            Commencer à apprendre
          </Link>
        </div>
      </div>
    </main>
  );
}