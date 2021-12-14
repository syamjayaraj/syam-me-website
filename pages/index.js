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
        <title>
          Syamlal CM - Software Engineer & Internet Entrepreneur, Founder & CEO
          at Floyet Technologies, • Next.js • React.js • Express.js • MongoDB
        </title>
        <meta
          name="description"
          content="
        Syamlal CM is a Software Engineer & Internet Entrepreneur. He is the Founder & CEO
        at Floyet Technologies."
        />
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
              <a href="https://floyet.com" target="_blank" rel="noreferrer">
                Floyet Technologies
              </a>
            </p>
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
