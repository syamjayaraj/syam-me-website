import { Card, Col, Row } from "react-bootstrap";
import styles from "../styles/Education.module.css";

export default function Contact() {
  return (
    <div className={styles.education}>
      <h2>Education</h2>
      <img src="/assets/svg/line.svg" />
      <div className={styles.lineContainer}>
        <div className={styles.line}>
          <i class="bi bi-mortarboard"></i>
          <div>
            <div className={styles.college}>
              <a href="http://awhengg.org/" target="_blank" rel="noreferrer">
                AWH Engineering College, Kuttikkattoor, Kozhikode
              </a>
            </div>
            <div className={styles.branch}>
              Bachelor of Technology(BTech), Computer Science and Engineering
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
