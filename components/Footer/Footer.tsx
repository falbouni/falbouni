import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.topLine}></div>

        <div className={styles.content}>

          <div className={styles.left}>
            <h2>Falbouni Productions</h2>
          </div>

          <div className={styles.right}>
            <p>
              Cinematic storytelling, creatives, strategy, direction, and
              copywriting for brands, founders and products.
            </p>
          </div>

        </div>

        <div className={styles.bottom}>
          © {new Date().getFullYear()} Falbouni Productions. All rights reserved.
        </div>

      </div>
    </footer>
  );
}