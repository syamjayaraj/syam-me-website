import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="social-accounts">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a
                href="https://www.linkedin.com/in/syamjayaraj"
                target="_blank"
                rel="noreferrer"
                className="btn-sm btn-default btn-lg"
              >
                <i class="bi bi-linkedin"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://twitter.com/syamjayaraj"
                target="_blank"
                rel="noreferrer"
                className="btn-sm btn-default btn-lg"
              >
                <i class="bi bi-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.github.com/techomoro"
                target="_blank"
                rel="noreferrer"
                className="btn-sm btn-default btn-lg"
              >
                <i class="bi bi-github"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p className="top">
            Made with Love in God's own country | Powered by&nbsp;
            <a href="https://floyet.com">Floyet</a>
          </p>
          <p className="bottom">
            Copyright © <a href="https://syam.me">Syam.me</a> 2022
          </p>
        </div>
      </div>
    </footer>
  );
}
