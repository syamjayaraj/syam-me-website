import { Card, Col, Row } from "react-bootstrap";
import styles from "../styles/Works.module.css";

export default function Works() {
  return (
    <div className={styles.works}>
      <h2>Works</h2>
      <img src="/assets/svg/line.svg" className="line" />
      <Row>
        <Col md={6}>
          <Card className={styles.card}>
            <a href="https://codedesign.app" target="_blank" rel="noreferrer">
              <Card.Img
                variant="top"
                src="/assets/images/works/codedesign.png"
              />
              <Card.Body>
                <Card.Title className={styles.title}>Codedesign.app</Card.Title>
                <p className={styles.category}>
                  No-code platform to build, launch & export pages
                </p>
                <Card.Text>
                  Under Redmonark Technologies, we have developed a No-code
                  platform to help developers design websites easier.
                </Card.Text>
                <Card.Text>
                  Tools used: React.js, Express.js, MongoDB, Cloudinary, Docker,
                  AWS.
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
        </Col>
        <Col md={6}>
          <Card className={styles.card}>
            <a href="https://techomoro.com" target="_blank" rel="noreferrer">
              <Card.Img
                variant="top"
                src="/assets/images/works/techomoro.png"
              />
              <Card.Body>
                <Card.Title className={styles.title}>Techomoro.com</Card.Title>
                <p className={styles.category}>Blog</p>
                <Card.Text>
                  A technology blog mainly dealing with the latest trends in
                  Full-stack web and mobile app development.
                </Card.Text>
                <Card.Text>
                  Topics: React.js, Next.js, Express.js, MongoDB, and more.
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
        </Col>
        <Col md={6}>
          <Card className={styles.card}>
            <a
              href="https://play.google.com/store/apps/details?id=com.onnich.parambath"
              target="_blank"
              rel="noreferrer"
            >
              <Card.Img
                variant="top"
                src="/assets/images/works/parambathapp.png"
              />
              <Card.Body>
                <Card.Title className={styles.title}>Parambath App</Card.Title>
                <p className={styles.category}>Android App</p>
                <Card.Text>
                  It is designed to provide instant access to services and
                  notifications for people living in Thalakkulathur village
                </Card.Text>
                <Card.Text>
                  The app is completely in the Malayalam language.
                </Card.Text>
                <Card.Text>
                  Tools used: React Native, React.js, Express.js, MongoDB,
                  Cloudinary, Digitalocean.
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
        </Col>
        <Col md={6}>
          <Card className={styles.card}>
            <a href="https://kuty.me" target="_blank" rel="noreferrer">
              <Card.Img variant="top" src="/assets/images/works/kuty.png" />
              <Card.Body>
                <Card.Title className={styles.title}>Kuty.me</Card.Title>
                <p className={styles.category}>URL Shortener</p>
                <Card.Text>
                  People don't like long and messy URLs. Kuty.me will help you
                  to shorten any lengthy URL in just one click.
                </Card.Text>
                <Card.Text>
                  Other features in Kuty.me are Whatsapp link generator and Quiz
                  maker
                </Card.Text>
                <Card.Text>
                  Tools used: Next.js, Express.js, MongoDB, Cloudinary,
                  Digitalocean, Vercel.
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
        </Col>
        <Col md={6}>
          <Card className={styles.card}>
            <a href="https://youngmenu.com" target="_blank" rel="noreferrer">
              <Card.Img
                variant="top"
                src="/assets/images/works/youngmenu.png"
              />
              <Card.Body>
                <Card.Title className={styles.title}>YoungMenu.com</Card.Title>
                <p className={styles.category}>
                  Virtual menu card for Restaurants and home bakers
                </p>
                <Card.Text>
                  Virtual menu cards are easy to maintain and update. It can
                  also provide the minute details of each item in a restaurant.
                </Card.Text>
                <Card.Text>
                  Tools used: Next.js, Recoil, Express.js, MongoDB, Cloudinary,
                  Digitalocean, Vercel.
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
