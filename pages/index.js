import Head from "next/head";
import Image from "next/image";
import { Card } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Education from "../components/Education";
import Works from "../components/Works";
import Contact from "../components/Contact";
import About from "../components/About";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Card className={styles.card}>
        <Card.Body>
          <main className={styles.header}>
            <img src="/assets/images/syamlal.jpg" className={styles.dp} />

            <h1 className={styles.name}>Syamlal CM</h1>

            <p className={styles.about}>
              Software Engineer & Internet Entrepreneur,
              <br />
              Founder & CEO at{" "}
              <a href="https://floyet.com" target="_blank">
                Floyet Technologies
              </a>
              , <br />
              Blogger at{" "}
              <a href="https://www.techomoro.com" target="_blank">
                Techomoro
              </a>
            </p>
            <p>• Next.js • React.js • Express.js • MongoDB</p>
          </main>
          <About />
          <Education />
          <Works />
          <Contact />

          <Footer />
        </Card.Body>
      </Card>
    </div>
  );
}
