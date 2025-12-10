import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Hero />
      <div className="space-y-24 pb-20">
        <About />
        <Works />
        <Experience />
        <Education />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
