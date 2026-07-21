import styles from "./About.module.css";
import Reveal from "../Reveal";

export default function About() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.grid}>
          <Reveal>
            <div className={styles.content}>
              <h1>
                <span className={styles.gold}>I am a</span>
                <span className={styles.white}>storyteller.</span>
              </h1>

              <div className={styles.copy}>
                <p>
                  I've been a creative producer working with VFX artists, and composers with over
                  seven years of work behind me in tech and marketing.
                </p>

                <p>
                  I aim for original scores and cinematic visuals.
                  <br />
                  The kind of marketing that builds franchises and earns audiences.
                </p>

                <p>
                  Data-backed strategy based on market analysis and current viral trends.
                </p>

                <p>
                  All my work aims to deliver virality for you.
                </p>

                <p>
                  Paid content can buy impressions. It cannot make anyone care.
                </p>

                <p>
                  Narrative content, scored and directed with intent, does both.
                  <br />
                  It converts, and it stays with the viewer long after the scroll.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className={styles.imageWrapper}>
              <img
                src="/images/about/fadi-albouni.png"
                alt="Falbouni Productions"
                className={styles.image}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}