import styles from "./Samsara.module.css";
import Link from "next/link";
import Reveal from "../Reveal";

export default function Samsara() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <Reveal>
        <section className={styles.hero}>
          <p className={styles.label}>Samsara</p>

          <h1>
            Samsara needed a cinematic
            campaign to deliver an emotional, memorable story.
          </h1>

          <p className={styles.intro}>
            Across multiple productions, I helped shape the visual and
            narrative identity behind Samsara&apos;s launch.
          </p>

          <p className={styles.intro}>
            My goal was to build anticipation and give the community a story
            they could follow, believe in, and share.
          </p>

          <hr className={styles.divider} />
        </section>
      </Reveal>

      {/* Grand Announcement */}
      <section className={styles.feature}>
        <div className={styles.featureContent}>
          <Reveal>
            <div className={styles.featureText}>
              <h2>Grand Announcement</h2>

              <p>
                For the grand announcement of Samsara&apos;s highly anticipated
                launch, I produced a cinematic VFX video designed to feel like
                the culmination of the entire campaign.
              </p>

              <p>
                Introducing Samsara with scale and emotional weight.
              </p>

              <p>
                Samsara was no longer just &quot;coming soon.&quot; It was ready
                to enter the market.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className={styles.featureMedia}>
              <video
                controls
                playsInline
                poster="/images/samsara/mirror-thumb.png"
              >
                <source
                  src="/videos/samsara/samsara-launch.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Master Explainer */}
      <section className={styles.splitSection}>
        <div className={styles.splitGrid}>
          <Reveal>
            <div className={styles.splitText}>
              <h2>Master cinematic explainer</h2>

              <p>
                The Nirvana explainer was built as a journey into the ecosystem.
              </p>

              <p>
                The video guides viewers through Nirvana&apos;s philosophy,
                mechanics, and role in reshaping on-chain value in a cinematic
                narrative.
              </p>

              <p>
                The production included a large-scale voiceover casting process,
                with hundreds of professional applicants reviewed before the
                final talent was selected.
              </p>

              <p>
                The cinematic score was produced with live woodwind instruments
                and vocalists, giving the film a more organic, immersive
                emotional texture.
              </p>

              <p>
                The full production process, from creative direction to final
                delivery, took one month.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className={styles.splitMedia}>
              <video
                controls
                playsInline
                poster="/images/samsara/explainer-thumb.png"
              >
                <source
                  src="/videos/samsara/nirvana-ecosystem.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trailers */}
      <section className={styles.trailers}>
        <Reveal>
          <h2>Trailers</h2>
        </Reveal>

        <div className={styles.trailerGrid}>
          <Reveal delay={0.1}>
            <div className={styles.trailerCard}>
              <video
                controls
                playsInline
                poster="/images/samsara/trailer1-thumb.png"
              >
                <source
                  src="/videos/samsara/trailer1.mp4"
                  type="video/mp4"
                />
              </video>

              <div className={styles.trailerText}>
                <p>
                  I produced Samsara launch trailers to build momentum as the
                  launch date approached.
                </p>

                <p>
                  With the two founders located in separate locations, I
                  coordinated studio shoots in both locations, developed the
                  scripts, and directed the footage around a unified narrative.
                </p>

                <p>
                  The final trailer brought both founders into one cohesive
                  story, capturing the mission behind Samsara and turning the
                  upcoming launch into an emotionally driven campaign moment.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className={styles.trailerCard}>
              <video
                controls
                playsInline
                poster="/images/samsara/trailer2-thumb.png"
              >
                <source
                  src="/videos/samsara/trailer2.mp4"
                  type="video/mp4"
                />
              </video>

              <div className={styles.trailerText}>
                <p>
                  Following the positive community response to the first
                  trailer, the founders requested a second production session
                  while they were together in Abu Dhabi.
                </p>

                <p>
                  This time, a full podcast was recorded, for which a dedicated
                  trailer was produced to support its release.
                </p>

                <p>
                  The trailer took a more uplifting narrative direction,
                  shifting the tone toward hope and the larger mission behind
                  Samsara.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Next Project */}
      <Reveal>
        <section className={styles.nextProject}>
          <Link
            href="/portfolio/fragments"
            className={styles.nextLink}
          >
            <span>Fragments</span>
            <span className={styles.arrow}>›</span>
          </Link>
        </section>
      </Reveal>
    </main>
  );
}