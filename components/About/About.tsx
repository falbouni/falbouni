import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <h1>
              <span className={styles.gold}>We are the</span>
              <span className={styles.white}>storytellers.</span>
            </h1>

            <div className={styles.copy}>
              <p>
                We are a team of directors, VFX artists, and composers with over
                seven years of work behind us in film and television.
              </p>

              <p>
                Original scores. Cinematic visuals.
                <br />
                The kind of production that builds franchises and earns audiences.
              </p>

              <p>Our mission is to bring that standard to Web3.</p>

              <p>
                That level of craft is missing from this space, and the projects
                that bring it in stop having to pay for the attention they
                deserve.
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

          <div className={styles.imageWrapper}>
            <img
              src="/images/about/fadi-albouni.png"
              alt="Falbouni Productions"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}