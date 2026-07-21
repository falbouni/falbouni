"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Password.module.css";

export default function PasswordPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    setError("");

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/");
      router.refresh();
    } else {
      setError("Incorrect password");
    }
  }

  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <img
          src="/images/logo-gold.svg"
          alt="Falbouni Productions"
          className={styles.logo}
        />

        <h1 className={styles.title}>
          Private Portfolio
        </h1>

        <p className={styles.description}>
          This portfolio contains confidential client work and is available by
          invitation.
        </p>

        <form
          onSubmit={submit}
          className={styles.form}
        >
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            className={styles.button}
            type="submit"
          >
            Enter
          </button>
        </form>

        {error && (
          <div className={styles.error}>
            {error}
          </div>
        )}
      </div>
    </main>
  );
}