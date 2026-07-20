import styles from "./Intro.module.css";

export default function Intro() {
  return (
    <section className={styles.intro}>
      <div className="container">

        <h2 className={styles.title}>
          <span>We</span> build <span>hype</span> and make people care
          <span> about your project</span>
          <br />
          <span>through storytelling and cinematic production.</span>
        </h2>
<br />
<br />
<br />
<br />

        <h2 className={styles.secondtitle}>
          <span>Projects that tell a story...</span>
          <br />
          don’t have to compete for attention anymore.
        </h2>

      </div>
    </section>
  );
}