export default function Experience() {
  return (
    <div className="experience">
      <h2>Experience</h2>
      <img src="/assets/svg/line.svg" className="line-icon" />

      <div className="lineContainer">
        <div className="line">
          <i className="bi bi-briefcase"></i>
          <div>
            <div className="college">
              <a href="https://www.ispg.co/" target="_blank" rel="noreferrer">
                ISPG Technologies India Pvt. Ltd.
              </a>
            </div>
            <div className="branch">
              Senior Software Engineer (January 2022 - March 2024)
            </div>
          </div>
        </div>
      </div>

      <div className="lineContainer">
        <div className="line">
          <i className="bi bi-briefcase"></i>
          <div>
            <div className="college">
              <a href="https://redmonark.com/" target="_blank" rel="noreferrer">
                Redmonark Technologies LLP
              </a>
            </div>
            <div className="branch">
              Co-Founder and Full-stack developer (March 2018 - January 2021)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
