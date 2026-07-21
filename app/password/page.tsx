"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import styles from "./Password.module.css";

export default function PasswordPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;

    if (!glow) return;

    let animationFrame: number;

    const move = (e: MouseEvent) => {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        glow.animate(
          {
            transform: `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`,
          },
          {
            duration: 350,
            easing: "ease-out",
            fill: "forwards",
          }
        );
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", move);
    };
  }, []);

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
      <div ref={glowRef} className={styles.glow} />

      <div className={styles.card}>
        <img
          src="/images/logo.png"
          alt="Falbouni Productions"
          className={styles.logo}
        />

        <h1 className={styles.title}>Private Portfolio</h1>

        <p className={styles.description}>
          This portfolio contains confidential client work and is available by
          invitation.
        </p>

        <form onSubmit={submit} className={styles.form}>
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className={styles.button} type="submit">
            Enter
          </button>
        </form>

        {error && <div className={styles.error}>{error}</div>}
      </div>
    </main>
  );
}