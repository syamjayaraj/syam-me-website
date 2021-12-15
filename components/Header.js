import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <main className={styles.header}>
      <img src="/assets/images/syamlal.jpg" className={styles.dp} />

      <h1 className={styles.name}>Syamlal CM</h1>

      <p className={styles.about}>
        Software Engineer & Internet Entrepreneur,
        <br />
        Founder & CEO at{" "}
        <a href="https://floyet.com" target="_blank" rel="noreferrer">
          Floyet Technologies
        </a>
      </p>
    </main>
  );
}
