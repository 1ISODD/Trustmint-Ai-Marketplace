import React from "react";
import styles from "./Login.module.css"; // reuse the same styles or make Signup.module.css
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  function handleSignup(e) {
    e.preventDefault();
    alert("Signed up (placeholder).");
    navigate("/developer"); // after signup, redirect somewhere
  }

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Create Account</h2>
        <p className={styles.subtitle}>Sign up for your Trustmint account</p>

        <form onSubmit={handleSignup} className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input type="email" required placeholder="you@example.com" />
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>
            <input type="password" required placeholder="Your password" />
          </div>

          <button type="submit" className={styles.loginBtn}>
            Sign Up
          </button>
        </form>

        <p className={styles.footerText}>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </main>
  );
}