import styles from "../styles/Experience.module.css";

export default function Experience() {
  return (
    <div className={styles.experience}>
      <h2>Experience</h2>
      <img src="/assets/svg/line.svg" className="line" />
      <div className={styles.lineContainer}>
        <div className={styles.line}>
          <i class="bi bi-briefcase"></i>
          <div>
            <div className={styles.college}>
              <a href="https://redmonark.com/" target="_blank" rel="noreferrer">
                Redmonark Technologies LLP
              </a>
            </div>
            <div className={styles.branch}>
              Co-Founder (March 2018- January 2021)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
