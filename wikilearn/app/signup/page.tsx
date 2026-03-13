"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    localStorage.setItem("wikilearnUser", JSON.stringify(formData));
    localStorage.setItem("wikilearnXP", "0");

    router.push("/profile");
  };

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Créer un compte</h1>

        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="text"
            name="firstname"
            placeholder="Prénom"
            value={formData.firstname}
            onChange={handleChange}
            className="auth-input"
            required
          />

          <input
            type="text"
            name="lastname"
            placeholder="Nom"
            value={formData.lastname}
            onChange={handleChange}
            className="auth-input"
            required
          />

          <input
            type="text"
            name="username"
            placeholder="Pseudo"
            value={formData.username}
            onChange={handleChange}
            className="auth-input"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="auth-input"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={formData.password}
            onChange={handleChange}
            className="auth-input"
            required
          />

          <button type="submit" className="auth-button">
            S&apos;inscrire
          </button>
        </form>
      </div>
    </main>
  );
}