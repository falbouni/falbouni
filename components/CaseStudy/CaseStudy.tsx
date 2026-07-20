import styles from "./CaseStudy.module.css";

export default function CaseStudy() {
  return (
    <section className={styles.section}>

      <div className={styles.grid}>
        <div className={styles.left}>
          <p className={styles.project}>
            NIRVANA | SAMSARA LAUNCH
          </p>

          <h2 className={styles.stat}>$3.3M</h2>

          <p className={styles.label}>
            TRADING VOLUME IN WEEK ONE
          </p>

          <div className={styles.copy}>
            <p>
              We produced the <span className={styles.gold}> "Break The Floor" </span> hype campaign that opened the
              Samsara launch.
            </p>

            <p>
              The campaign brought in a trading volume of
              <span className={styles.gold}> $500K </span>
              in one hour.
            </p>

            <p>
              Day one closed at
              <span className={styles.gold}> $1.3M. </span>
              The campaign drove
              <span className={styles.gold}> 1.5M in organic X impressions </span>
              in the three months that followed.
            </p>
          </div>
        </div>

        <div className={styles.right}>
          <video
            controls
            poster="/images/samsara-thumb.jpg"
            className={styles.video}
          >
            <source src="/videos/break-the-floor.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
      <div className={styles.grid}>
        <div className={styles.left}>
          <p className={styles.project}>
            FRAGMENTS
          </p>

          <h2 className={styles.stat}>12,472</h2>

          <p className={styles.label}>
            EMAIL SIGNUPS IN 7 WEEKS
          </p>

          <div className={styles.copy}>
            <p>
              A brand-new project with <span className={styles.gold}> zero awareness and deliberate distance </span> from its team’s prior work (Ampleforth, SPOT).
            </p>

            <p>
              The video campaign carried the launch from 
              <span className={styles.gold}> 483 signups to 12,472 in seven weeks. </span>
            </p>

            <p>
              The vast majority came in organically. 
              </p>
          </div>
        </div>

        <div className={styles.right}>
          <video
            controls
            poster="/images/buffalo-thumb.png"
            className={styles.video}
          >
            <source src="/videos/fragments-buffalo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
    

  );
}