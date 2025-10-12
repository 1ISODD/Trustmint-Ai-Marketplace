import React from "react";
import styles from "./Login.module.css";
import { useNavigate, Link } from "react-router-dom";
import googleLogo from '../assets/download.png';

export default function Login({ onLogin }) {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    alert("Logged in (placeholder).");

    // Call onLogin if it exists
    if (onLogin) onLogin();

    // Navigate to developer page
    navigate("/developer");
  }

  function handleGoogleLogin() {
    alert(
      "Google Login clicked — this is a placeholder. Add your Google OAuth client integration."
    );
    if (onLogin) onLogin(); // optional: mark user as logged in
    navigate("/developer");
  }

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Welcome Back</h2>
        <p className={styles.subtitle}>Sign in to your Trustmint account</p>

        <form onSubmit={handleLogin} className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input type="email" required placeholder="you@example.com" />
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>
            <input type="password" required placeholder="Your password" />
          </div>

          <button type="submit" className={styles.loginBtn}>
            Login
          </button>
        </form>

        <div className={styles.divider}>
          <span>or</span>
        </div>
        <div className="centerContainer">
        <button
          type="button"
          className={styles.googleBtn}
          onClick={handleGoogleLogin}
        >
          <img src={googleLogo} alt="Google" />
          Login with Google
        </button>
        </div>

        <p className={styles.footerText}>
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </main>
  );
}
