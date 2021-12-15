import styles from "../styles/Education.module.css";

export default function Education() {
  return (
    <div className={styles.education}>
      <h2>Education</h2>
      <img src="/assets/svg/line.svg" className="line" />
      <div className={styles.lineContainer}>
        <div className={styles.line}>
          <i className="bi bi-mortarboard"></i>
          <div>
            <div className={styles.college}>
              <a href="http://awhengg.org/" target="_blank" rel="noreferrer">
                AWH Engineering College, Kuttikkattoor, Kozhikode
              </a>
            </div>
            <div className={styles.branch}>
              Bachelor of Technology(BTech), Computer Science and Engineering
              (June 2013- May 2017)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
