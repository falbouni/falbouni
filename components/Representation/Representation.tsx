import styles from "./Representation.module.css";
import Link from "next/link";
import Reveal from "../Reveal";

export default function Representation() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <Reveal>
        <section className={styles.hero}>
          <h1>Representation</h1>

          <p className={styles.intro}>
            Some brands need more than content. They need someone who can represent the company publicly and
            communicate complex ideas easily. 
          </p>
          <p className={styles.intro}>
            I build trust through meaningful conversations.
          </p>

          <div className={styles.heroVideo}>
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              disablePictureInPicture
              controlsList="nodownload noplaybackrate"
              poster="/images/representation/international-blockchain-summit.png"
            >
              <source
                src="/videos/representation/brand-autoplay.mp4"
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
                  Speaking on behalf
                </span>

                <span className={styles.white}>
                  of your company.
                </span>
              </h2>

              <p>
                Communication is one of the strongest
                assets a company can have.
              </p>

              <p>
                Every appearance is an opportunity to strengthen confidence in a brand.
              </p>

              <p>
                The goal is to make people understand
                why your product is worth their attention.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className={styles.splitMedia}>
              <img
                src="/images/representation/goethe-expert-talk.png"
                alt="Conference presentation"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 2 */}
      <section className={styles.reverseSection}>
        <div className={styles.splitGrid}>
          <Reveal>
            <div className={styles.splitMedia}>
              <img
                src="/images/representation/international-blockchain-summit.png"
                alt="Interview at blockchain conference"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className={styles.splitText}>
              <h2>
                <span className={styles.gold}>
                  Interviews
                </span>

                <span className={styles.white}>
                  and appearances.
                </span>
              </h2>

              <p>
                Interviews and media appearances are often the first time people
                encounter a company.
              </p>

              <p>
                Technical products should be explained simply
                while keeping the conversation
                engaging.
              </p>

              <p>
                Strong communication builds credibility before someone
                becomes a customer.
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
                  Relationships are
                </span>

                <span className={styles.white}>
                  built in person.
                </span>
              </h2>

              <p>
                Conferences remain one of the fastest ways to build meaningful
                relationships across many industries.
              </p>

              <p>
                Networking with founders, investors, developers, researchers, and
                partners creates opportunities that extend well beyond the event
                itself.
              </p>

              <p>
                The strongest brands don't only exist online. They're represented
                consistently everywhere they appear.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className={styles.splitMedia}>
              <img
                src="/images/representation/intmo-investor-meet.png"
                alt="Networking with founders and investors"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Previous Project */}
      <Reveal>
        <section className={styles.nextProject}>
          <Link
            href="/portfolio/fragments"
            className={styles.nextLink}
          >
            <span className={styles.arrow}>‹</span>
            <span>Fragments</span>
          </Link>
        </section>
      </Reveal>
    </main>
  );
}