import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container">
        <div className="card custom-card">
          <div className="card-body">
            <About />
            <Experience />
            <Education />
            <Works />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
