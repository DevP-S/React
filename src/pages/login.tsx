import React, { useState } from "react";
import "./Login.css"; // Importiamo il CSS

interface LoginProps {
  onLogin: () => void;
  onRegister: () => void; // callback per registrazione
}

const Login: React.FC<LoginProps> = ({ onLogin, onRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.success) {
        onLogin(); // login OK → mostra navigation
      } else {
        alert("❌ Credenziali errate");
      }
    } catch (error) {
      console.error(error);
      alert("Errore di connessione al server");
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2 className="login-title">Accedi</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <div className="login-buttons">
          <button type="submit" className="login-button">
            Accedi
          </button>
          <button
            type="button"
            className="register-button"
            onClick={onRegister}
          >
            Registrati
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
