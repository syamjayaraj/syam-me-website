export default function Contact() {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <img src="/assets/svg/line.svg" className="line-icon" />
      <div className="row boxes">
        <div className="col-lg-4 col-md-6 col-12">
          <a
            href="mailto:hi@syam.me"
            target="_blank"
            rel="noreferrer"
            className="box"
          >
            <i className="bi bi-envelope"></i>
            hi@syam.me
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <a
            href="https://kuty.me/sym"
            target="_blank"
            rel="noreferrer"
            className="box"
          >
            <i className="bi bi-whatsapp"></i>
            Message
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <a
            href="tel:+919946792650"
            target="_blank"
            rel="noreferrer"
            className="box"
          >
            <i className="bi bi-telephone"></i>
            +91-9946792650
          </a>
        </div>
      </div>
    </div>
  );
}
