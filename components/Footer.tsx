export default function Footer() {
  return (
    <footer className="footer">
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
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://twitter.com/syamjayaraj"
                target="_blank"
                rel="noreferrer"
                className="btn-sm btn-default btn-lg"
              >
                <i className="bi bi-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.github.com/syamjayaraj"
                target="_blank"
                rel="noreferrer"
                className="btn-sm btn-default btn-lg"
              >
                <i className="bi bi-github"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p className="top">
            Carefully Handcrafted in INDIA | Powered by&nbsp;
            <a href="https://floyet.com">FLOYET</a>
          </p>
          <p className="bottom">
            Copyright © <a href="https://syam.me">SYAM.ME</a> 2024
          </p>
        </div>
      </div>
    </footer>
  );
}
