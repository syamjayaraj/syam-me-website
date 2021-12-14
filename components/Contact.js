import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h2>Contact</h2>
      <img src="/assets/svg/line.svg" />
      <div className={styles.boxes}>
        <a
          href="mailto:hi@syam.me"
          target="_blank"
          rel="noreferrer"
          className={styles.box}
        >
          <i className="bi bi-envelope"></i>
          hi@syam.me
        </a>
        <a
          href="https://kuty.me/sym"
          target="_blank"
          rel="noreferrer"
          className={styles.box}
        >
          <i class="bi bi-whatsapp"></i>
          Message
        </a>
        <a
          href="tel:+919946792650"
          target="_blank"
          rel="noreferrer"
          className={styles.box}
        >
          <i class="bi bi-telephone"></i>
          +91-9946792650
        </a>
      </div>
    </div>
  );
}
