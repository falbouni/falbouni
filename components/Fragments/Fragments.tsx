import styles from "./Fragments.module.css";
import Link from "next/link";

export default function Fragments() {
  return (
    <main className={styles.page}>
      {/* Hero */}
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
          <video controls playsInline poster="/images/fragments/buffalo-thumb2.png">
            <source
              src="/videos/fragments/fragments-buffalo.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      {/* Section 1 */}
      <section className={styles.splitSection}>
        <div className={styles.splitGrid}>
          <div className={styles.splitText}>
            <h2>
              <span className={styles.gold}>
                We built a series of
              </span>

              <span className={styles.white}>
                cinematic pieces.
              </span>
            </h2>

            <p>
              We wanted to introduce the project on its own terms.
            </p>

            <p>
              Human directed, human scored, with AI visuals generated and
              post-produced by our team.
            </p>

            <p>
              The score was written original to the campaign.
              <br />
              Every frame was composed, color-treated, and cut by hand.
            </p>
          </div>

          <div className={styles.splitMedia}>
            <video controls playsInline poster="/images/fragments/eye-opening-thumb.png">
              <source
                src="/videos/fragments/eye-opening.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className={styles.reverseSection}>
        <div className={styles.splitGrid}>
          <div className={styles.splitMedia}>
            <video controls playsInline poster="/images/fragments/video2.jpg">
              <source
                src="/videos/fragments/alice-and-bob.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <div className={styles.splitText}>
            <h2>
              <span className={styles.gold}>
                The result was a launch that
              </span>

              <span className={styles.white}>
                grew on its own.
              </span>
            </h2>

            <p>
              Fragment is the work we point to when projects ask what
              AI-augmented production looks like.
            </p>

            <p>
              Faster to produce with lower spend.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className={styles.splitSection}>
        <div className={styles.splitGrid}>
          <div className={styles.splitText}>
            <h2>
              <span className={styles.gold}>
                It produced a campaign that
              </span>

              <span className={styles.white}>
                ran like cinema.
              </span>
            </h2>
          </div>

          <div className={styles.splitMedia}>
            <video controls playsInline poster="/images/fragments/video3.jpg">
              <source
                src="/videos/fragments/falling-coin.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>

      {/* Previous Project */}
      <section className={styles.nextProject}>
        <Link href="/portfolio/samsara" className={styles.nextLink}>
          <span className={styles.arrow}>‹</span>
          <span>Samsara</span>
        </Link>
      </section>
    </main>
  );
}