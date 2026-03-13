"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const savedUser = localStorage.getItem("wikilearnUser");

    if (!savedUser) {
      alert("Aucun compte trouvé. Inscris-toi d'abord.");
      return;
    }

    const user = JSON.parse(savedUser);

    if (email === user.email && password === user.password) {
      router.push("/profile");
    } else {
      alert("Email ou mot de passe incorrect.");
    }
  };

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Connexion</h1>

        <form onSubmit={handleLogin} className="auth-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="auth-input"
            required
          />

          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
            required
          />

          <button type="submit" className="auth-button">
            Se connecter
          </button>
        </form>
      </div>
    </main>
  );
}