import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h2>About</h2>
      <img src="/assets/svg/line.svg" className="line" />
      <p>
        Hey there! I'm Syamlal CM, a Software Engineer and Internet
        Entrepreneur. I'm the Founder and CEO of{" "}
        <a href="https://floyet.com" target="_blank" rel="noreferrer">
          Floyet Labs & Technologies - the hub for a diverse portfolio of tech
          startups
        </a>
        .
      </p>
      <p>
        I specialize in full-stack development, working with Next.js, React.js,
        React Native, Express.js, and MongoDB to build innovative digital
        solutions.
      </p>
      <p>
        You can catch my tech writings on platforms like{" "}
        <a href="https://techomoro.com" target="_blank" rel="noreferrer">
          Techomoro.com
        </a>
        ,{" "}
        <a href="https://dev.to/syamjayaraj" target="_blank" rel="noreferrer">
          Dev.to
        </a>
        ,{" "}
        <a
          href="https://medium.com/@syamjayaraj"
          target="_blank"
          rel="noreferrer"
        >
          Medium
        </a>
        , and and{" "}
        <a
          href="https://www.quora.com/profile/Syamlal-CM"
          target="_blank"
          rel="noreferrer"
        >
          Quora
        </a>
        . I cover everything from software development tips to entrepreneurial
        insights.
      </p>
    </div>
  );
}
