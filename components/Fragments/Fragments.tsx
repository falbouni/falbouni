import styles from "./Fragments.module.css";
import Link from "next/link";
import Reveal from "../Reveal";

export default function Fragments() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <Reveal>
        <section className={styles.hero}>
          <h1>Fragments</h1>

          <p className={styles.intro}>
            A new project with no audience or inherited brand with a deliberate
            distance from its team’s previous work.
          </p>

          <p className={styles.intro}>
            The launch had nothing to lean on but the campaign.
          </p>

          <div className={styles.heroVideo}>
            <video
              controls
              playsInline
              poster="/images/fragments/buffalo-thumb2.png"
            >
              <source
                src="/videos/fragments/fragments-buffalo.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </section>
      </Reveal>

      {/* Section 1 */}
      <section className={styles.splitSection}>
        <div className={styles.splitGrid}>
          <Reveal>
            <div className={styles.splitText}>
              <h2>
                <span className={styles.gold}>
                  Producing
                </span>

                <span className={styles.white}>
                  cinematic pieces.
                </span>
              </h2>

              <p>
                The goal was to introduce the project on its own terms.
              </p>

              <p>
                Human directed, human scored, with AI visuals generated and
                post-produced by the team.
              </p>

              <p>
                The score was produced, directed, and written original to the campaign.
                <br />
                Every frame was composed, color-treated, and cut by hand.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className={styles.splitMedia}>
              <video
                controls
                playsInline
                poster="/images/fragments/eye-opening-thumb.png"
              >
                <source
                  src="/videos/fragments/eye-opening.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 2 */}
      <section className={styles.reverseSection}>
        <div className={styles.splitGrid}>
          <Reveal>
            <div className={styles.splitMedia}>
              <video
                controls
                playsInline
                poster="/images/fragments/alice-bob-thumb.png"
              >
                <source
                  src="/videos/fragments/alice-and-bob.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className={styles.splitText}>
              <h2>
                <span className={styles.gold}>
                  The launch
                </span>

                <span className={styles.white}>
                  grew on its own.
                </span>
              </h2>

              <p>
                Fragment is the work I point to when companies ask what
                AI-augmented production looks like.
              </p>

              <p>
                Faster to produce with lower spend.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 3 */}
      <section className={styles.splitSection}>
        <div className={styles.splitGrid}>
          <Reveal>
            <div className={styles.splitText}>
              <h2>
                <span className={styles.gold}>
                  The campaign
                </span>

                <span className={styles.white}>
                  ran like cinema.
                </span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className={styles.splitMedia}>
              <video
                controls
                playsInline
                poster="/images/fragments/coin.png"
              >
                <source
                  src="/videos/fragments/falling-coin.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Previous Project */}
      <Reveal>
        <section className={styles.nextProject}>
          <Link
            href="/portfolio/samsara"
            className={styles.nextLink}
          >
            <span className={styles.arrow}>‹</span>
            <span>Samsara</span>
          </Link>
        </section>
      </Reveal>
    </main>
  );
}