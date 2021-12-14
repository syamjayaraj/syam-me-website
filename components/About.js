import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h2>About</h2>
      <img src="/assets/svg/line.svg" className="line" />
      <p>
        Hello! I'm Syamlal CM, a Software Engineer & Internet Entrepreneur. I am
        the founder and CEO of{" "}
        <a href="https://floyet.com" target="_blank" rel="noreferrer">
          Floyet Technologies - a digital branding company
        </a>
        .
      </p>
      <p>
        As a full-stack developer I can work with Next.js, React.js, React
        Native, Express.js and MongoDB.
      </p>
      <p>
        I am writing technical contents on{" "}
        <a href="https://techomoro.com" target="_blank" rel="noreferrer">
          Techomoro.com
        </a>
        ,{" "}
        <a href="https://dev.to/syamjayaraj" target="_blank" rel="noreferrer">
          Dev.to
        </a>
        ,{" "}
        <a
          href="https://www.toolbox.com/user/about/SyamlalCM/"
          target="_blank"
          rel="noreferrer"
        >
          Toolbox.com
        </a>
        ,{" "}
        <a
          href="https://medium.com/@syamjayaraj"
          target="_blank"
          rel="noreferrer"
        >
          Medium
        </a>
        , and{" "}
        <a
          href="https://www.quora.com/profile/Syamlal-CM"
          target="_blank"
          rel="noreferrer"
        >
          Quora
        </a>
      </p>
    </div>
  );
}
