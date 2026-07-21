import Link from "next/link";
import Reveal from "../Reveal";
import styles from "./PortfolioGrid.module.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const projects = [
  {
    title: "Samsara",
    image: "/images/projects/samsara.jpg",
    href: "/portfolio/samsara",
  },
  {
    title: "Fragments",
    image: "/images/projects/fragments.png",
    href: "/portfolio/fragments",
  },
  {
    title: "Representation",
    image: "/images/representation/expert-talk.png",
    href: "/portfolio/representation",
  },
];

export default function PortfolioGrid() {
  return (
    <section className={styles.portfolio}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.header}>
            <h1>Experience our cinematic works</h1>

            <p>
              We&apos;re passionate about what we do and are proud of our work.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className={styles.grid}>
            {projects.map((project) =>
              project.href ? (
                <Link
                  key={project.title}
                  href={project.href}
                  className={styles.card}
                >
                  <div className={styles.imageWrapper}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className={styles.image}
                    />
                  </div>

                  <h3>{project.title}</h3>
                </Link>
              ) : (
                <div
                  key={project.title}
                  className={styles.card}
                >
                  <div className={styles.imageWrapper}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className={styles.image}
                    />
                  </div>

                  <h3>{project.title}</h3>
                </div>
              )
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}