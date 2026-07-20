"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // Close menu whenever the route changes
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  // Lock body scrolling while menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/logo.png"
              alt="Falbouni Productions"
              width={300}
              height={40}
              priority
            />
          </Link>

          <nav className={styles.desktopNav}>
            <Link
              href="/"
              className={pathname === "/" ? styles.active : ""}
            >
              Home
            </Link>

            <Link
              href="/portfolio"
              className={
                pathname.startsWith("/portfolio")
                  ? styles.active
                  : ""
              }
            >
              Portfolio
            </Link>

            <Link
              href="/about"
              className={pathname === "/about" ? styles.active : ""}
            >
              About
            </Link>

            <a
              href="https://calendly.com/falbouni/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Book now
            </a>
          </nav>

          <button
            className={`${styles.menuButton} ${
              menuOpen ? styles.menuOpen : ""
            }`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`${styles.overlay} ${
          menuOpen ? styles.overlayVisible : ""
        }`}
        onClick={closeMenu}
      />

      <nav
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <Link
          href="/"
          className={pathname === "/" ? styles.active : ""}
          onClick={closeMenu}
        >
          Home
        </Link>

        <Link
          href="/portfolio"
          className={
            pathname.startsWith("/portfolio")
              ? styles.active
              : ""
          }
          onClick={closeMenu}
        >
          Portfolio
        </Link>

        <Link
          href="/about"
          className={pathname === "/about" ? styles.active : ""}
          onClick={closeMenu}
        >
          About
        </Link>

        <a
          href="https://calendly.com/falbouni/30min"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
          onClick={closeMenu}
        >
          Book now
        </a>
      </nav>
    </>
  );
}