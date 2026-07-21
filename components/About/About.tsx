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
                <span className={styles.white}>professional.</span>
              </h1>

              <div className={styles.copy}>
                <p>
                  I have been a in marketing as a Content Manager and a Creative Producer working with Founders, VFX artists, and composers with over
                  seven years of work behind me in tech and marketing.
                </p>

                <p>
                   
                </p>

                <p>
                  I aim for engaging and retaining work through data-backed strategy based on market analysis and current viral trends.
                </p>

                <p>
                  All my work aims to deliver virality for you.
                </p>

                <p>
                  Paid content can buy impressions. It cannot make anyone care.
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