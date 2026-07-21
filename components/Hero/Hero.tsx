import styles from "./Hero.module.css";
import Reveal from "../Reveal";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.videoContainer}>
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/Hero.mp4" type="video/mp4" />
        </video>

        <div className={styles.overlay} />
      </div>

      <div className="container">
        <Reveal>
          <div className={styles.content}>
            <p className={styles.eyebrow}>
              STRATEGY • COPY • CREATIVE • MOTION
            </p>

            <h1 className={styles.title}>
              <span className={styles.gold}>
                Static doesn’t
                <br className={styles.mobileBreak} /> move people.
              </span>

              <br />

              <span className={styles.white}>
                Cinema does.
              </span>
            </h1>
          </div>
        </Reveal>
      </div>
    </section>
  );
}