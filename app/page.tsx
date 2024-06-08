import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const letters = ["M", "I", "R", "A", "G", "E"];
  return (
    <div className="container">
      <div className="card custom-card">
        <div className="card-body">
          <ul className="menu">
            <a href="https://mirage.syam.me" target="_blank">
              <li className="menuItem">
                <div className="waviy">
                  {letters.map((letter, index) => (
                    <span
                      key={index}
                      style={{ "--i": index + 1 } as React.CSSProperties}
                    >
                      {letter}
                    </span>
                  ))}
                </div>
              </li>
            </a>
          </ul>
          <Header />
          <About />
          <Experience />
          <Education />
          <Works />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}
