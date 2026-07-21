"use client";

import { FormEvent, useState } from "react";
import Reveal from "../Reveal";
import styles from "./Contact.module.css";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSending(true);
    setStatus("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setStatus("Thanks! Your enquiry has been sent.");
      form.reset();
    } else {
      setStatus("Something went wrong. Please try again.");
    }

    setSending(false);
  }

  return (
    <section className={styles.contact}>
      <div className={styles.container}>

        <Reveal>
          <div className={styles.left}>
            <h2 className={styles.title}>
              Your marketing
              <br />
              Deserves 
              <br />
              <span>better</span>
            </h2>

            <p className={styles.subtitle}>
              Please submit the brief form below for a comprehensive consultation.
              I&apos;ll get back to you within 2 business days.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form className={styles.form} onSubmit={handleSubmit}>

            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Optional"
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="projectType">Project Type</label>
              <select id="projectType" name="projectType">
                <option>Brand Film</option>
                <option>Commercial</option>
                <option>Strategy</option>
                <option>Social Content</option>
                <option>Copywriting</option>
                <option>Creatives</option>
                <option>Other</option>
              </select>
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell us about your project..."
                required
              />
            </div>

            <button
              type="submit"
              className={styles.button}
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Enquiry"}
            </button>

            {status && (
              <p className={styles.status}>
                {status}
              </p>
            )}

          </form>
        </Reveal>

      </div>
    </section>
  );
}