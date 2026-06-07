import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Hero />
      <div className="space-y-24 pb-20">
        <About />
        <Experience />
        <Education />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
