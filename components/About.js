import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h2>About</h2>
      <img src="/assets/svg/line.svg" />
      <p>
        Hello! I'm Syamlal the founder and CEO of{" "}
        <a href="https://floyet.com" target="_blank">
          Floyet Technologies
        </a>
        . I'm also a full-stack developer specialized in the MERN(MongoDB,
        Express, React, Node). I also write technical content on{" "}
        <a href="https://techomoro.com" target="_blank">
          Techomoro.com
        </a>
        ,{" "}
        <a href="https://dev.to/syamjayaraj" target="_blank">
          Dev.to
        </a>
        ,{" "}
        <a href="https://www.toolbox.com/user/about/SyamlalCM/" target="_blank">
          Toolbox.com
        </a>
        ,{" "}
        <a href="https://medium.com/@syamjayaraj" target="_blank">
          Medium
        </a>
        , and{" "}
        <a href="https://www.quora.com/profile/Syamlal-CM" target="_blank">
          Quora
        </a>
        . If you have a project that you want to get started on or think you
        need my help with something, then get in touch.
      </p>
    </div>
  );
}
