import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import CoachingTeaser from "@/components/CoachingTeaser";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { products } from "@/lib/products";
import { OG_IMAGE, SITE_NAME, SITE_URL, SOCIAL_LINKS, jsonLd } from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en-IN",
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: SITE_URL,
      name: "Syamlal CM | Founder & CEO · Floyet Labs & Technologies",
      mainEntity: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SITE_NAME,
      alternateName: ["Syam", "Syamlal", "syamjayaraj"],
      url: SITE_URL,
      image: `${SITE_URL}${OG_IMAGE}`,
      jobTitle: "Founder & CEO",
      description:
        "Technology entrepreneur and Founder & CEO of Floyet Labs & Technologies LLP. Builds web and mobile products and mentors people to build and launch their own apps.",
      worksFor: { "@id": `${SITE_URL}/#floyet` },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "AWH Engineering College",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kozhikode",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
      knowsAbout: [
        "Next.js",
        "React",
        "React Native",
        "JavaScript",
        "Strapi CMS",
        "SaaS",
        "AI-assisted software development",
      ],
      sameAs: SOCIAL_LINKS,
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#floyet`,
      name: "Floyet Labs & Technologies LLP",
      url: "https://floyet.com",
      founder: { "@id": `${SITE_URL}/#person` },
      sameAs: ["https://www.linkedin.com/company/floyet", "https://www.instagram.com/floyet.tech"],
      owns: products.map((p) => ({
        "@type": "SoftwareApplication",
        name: p.name,
        url: p.link,
        applicationCategory: "BusinessApplication",
        description: p.tagline,
      })),
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(structuredData)} />
      <Hero />
      <div className="space-y-24 pb-20">
        <About />
        <Products />
        <CoachingTeaser />
        <Experience />
        <Education />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
