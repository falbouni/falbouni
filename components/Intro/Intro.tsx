import styles from "./Intro.module.css";
import Reveal from "../Reveal";

export default function Intro() {
  return (
    <section className={styles.intro}>
      <div className="container">

        <Reveal>
          <h2 className={styles.title}>
            <span>We</span> build <span>hype</span> and make people care
            <span> about your project</span>
            <br />
            <span>through storytelling and cinematic production.</span>
          </h2>
        </Reveal>

        <br />
        <br />
        <br />
        <br />

        <Reveal delay={0.2}>
          <h2 className={styles.secondtitle}>
            <span>Projects that tell a story...</span>
            <br />
            don’t have to compete for attention anymore.
          </h2>
        </Reveal>

      </div>
    </section>
  );
}