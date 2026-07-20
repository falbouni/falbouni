"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  return (
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

        <nav className={styles.nav}>
          <Link
            href="/"
            className={pathname === "/" ? styles.active : ""}
          >
            Home
          </Link>

          <Link
            href="/portfolio"
            className={pathname.startsWith("/portfolio") ? styles.active : ""}
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
      </div>
    </header>
  );
}