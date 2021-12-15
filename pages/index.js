import Head from "next/head";
import { Card } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
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
        <meta name="theme-color" content="#ffffff" />

        <meta name="og:type" content="website" />
        <meta
          name="og:title"
          content="
          Syamlal CM - Software Engineer & Internet Entrepreneur, Founder & CEO
          at Floyet Technologies, • Next.js • React.js • Express.js • MongoDB"
        />
        <meta
          name="keywords"
          content="syam,lal,cm,syamlal,syamlal cm,software engineer, internet entrepreneur"
        />
        <meta name="og:url" content="https://syam.me" />
        <meta
          name="og:description"
          content="
          Syamlal CM is a Software Engineer & Internet Entrepreneur. He is the Founder & CEO
        at Floyet Technologies."
        />
        <meta name="og:image" content="/assets/images/syamlal-og.jpg" />

        <link rel="icon" href="/favicon.ico" />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Card className={styles.card}>
        <Card.Body>
          <Header />
          <About />
          <Experience />
          <Education />
          <Works />
          <Contact />
          <Footer />
        </Card.Body>
      </Card>
    </div>
  );
}
