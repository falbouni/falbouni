import Image from "next/image";
import Link from "next/link";
import Reveal from "../Reveal";
import styles from "./PortfolioPreview.module.css";

const projects = [
  {
    image: "/images/projects/samsara.jpg",
    href: "/portfolio/samsara",
  },
  {
    image: "/images/projects/fragments.png",
    href: "/portfolio/fragments",
  },
  {
    image: "/images/projects/neo.png",
    href: "/portfolio",
  },
  {
    image: "/images/projects/you.png",
    href: "/portfolio",
  },
];

export default function PortfolioPreview() {
  return (
    <section className={styles.portfolio}>
      <div className={styles.container}>
        <Reveal>
          <h2 className={styles.title}>
            <span className={styles.gold}>A portfolio that</span> speaks for
            itself.
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className={styles.grid}>
            {projects.map((project, index) => (
              <Link
                key={`${project.href}-${index}`}
                href={project.href}
                className={styles.card}
              >
                <Image
                  src={project.image}
                  alt="Project"
                  fill
                  className={styles.image}
                />
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <Link href="/portfolio" className={styles.button}>
            See All Works
          </Link>
        </Reveal>
      </div>
    </section>
  );
}