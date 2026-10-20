import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  Code2,
  Database,
  IndianRupee,
  Layers,
  MessageCircle,
  Rocket,
  Smartphone,
} from "lucide-react";
import Footer from "@/components/Footer";
import CoachingPricing from "@/components/CoachingPricing";
import { products } from "@/lib/products";
import { OG_IMAGE, SITE_NAME, SITE_URL, jsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Build & Launch a SaaS with AI — Founder-Led Coaching | Syamlal CM",
  description:
    "Live global coaching from Syamlal CM, Founder & CEO of Floyet Labs & Technologies. Build, deploy and launch your own SaaS product with React, Next.js, Codex and Claude Code.",
  keywords: [
    "coding classes kozhikode",
    "web development course kerala",
    "react native course",
    "next.js course",
    "learn coding with ai",
    "claude code course",
    "build saas",
    "founder coaching",
    "global coding mentor",
    "saas mentorship",
    "syamlal cm",
  ],
  alternates: { canonical: "/coaching" },
  openGraph: {
    title: "Learn to Build & Launch Apps — Mentoring by Syamlal CM",
    description:
      "Build and launch a real SaaS product with direct coaching from the Founder & CEO of Floyet Labs & Technologies.",
    url: "/coaching",
    type: "website",
    siteName: SITE_NAME,
    locale: "en_IN",
    images: [{ url: OG_IMAGE, width: 960, height: 960, alt: "Syamlal CM — coding mentor" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn to Build & Launch Apps — Mentoring by Syamlal CM",
    description: "From your first line of code to a live, money-making SaaS product.",
    images: [OG_IMAGE],
  },
};

const WHATSAPP_LINK =
  "https://wa.me/919946792650?text=" +
  encodeURIComponent("Hi Syam, I'm interested in the $499 founding cohort. I'd like to book a free fit call.");

const steps = [
  {
    icon: Code2,
    color: "text-orange-400 bg-orange-500/10",
    title: "Web foundations",
    topics: ["HTML", "CSS", "JavaScript (ES6+)"],
    text: "How websites actually work. You'll build real pages from scratch and understand every line.",
  },
  {
    icon: Layers,
    color: "text-sky-400 bg-sky-500/10",
    title: "Modern web apps",
    topics: ["React", "Next.js"],
    text: "Build fast, professional web apps the way real companies do — components, pages, data, SEO.",
  },
  {
    icon: Smartphone,
    color: "text-violet-400 bg-violet-500/10",
    title: "Mobile apps",
    topics: ["React Native"],
    text: "Use what you already know to build Android and iPhone apps from a single codebase.",
  },
  {
    icon: Database,
    color: "text-indigo-400 bg-indigo-500/10",
    title: "Backend & content",
    topics: ["Strapi CMS", "APIs", "Databases"],
    text: "Store data, manage users and content, and connect your web and mobile apps to one backend.",
  },
  {
    icon: Bot,
    color: "text-emerald-400 bg-emerald-500/10",
    title: "Build with AI",
    topics: ["Claude Code", "Codex", "Antigravity"],
    text: "Use today's AI coding tools to build a complete web + mobile app many times faster — the right way.",
  },
  {
    icon: Rocket,
    color: "text-pink-400 bg-pink-500/10",
    title: "Go live",
    topics: ["Domain", "Hosting", "App stores"],
    text: "Put your product on the internet and in the Play Store / App Store, with real users using it.",
  },
  {
    icon: IndianRupee,
    color: "text-amber-400 bg-amber-500/10",
    title: "Make it earn",
    topics: ["SaaS", "Payments", "Pricing", "First customers"],
    text: "Turn your app into a SaaS business — subscriptions, pricing, marketing and getting paying customers.",
  },
];

const outcomes = [
  "A complete web app and mobile app you built yourself",
  "Your product live on the internet with its own domain",
  "A clear plan to turn it into a paying SaaS business",
  "Confidence to use AI tools like a professional",
  "A strong portfolio for jobs, freelancing or your startup",
  "Direct guidance from someone who runs real products",
];

const audience = [
  {
    title: "Beginners",
    text: "Never written code before? Perfect. We start from zero and go step by step.",
  },
  {
    title: "Developers",
    text: "Already coding? Level up to full-stack, mobile and AI-powered building.",
  },
  {
    title: "Founders & professionals",
    text: "Have a business idea? Learn to build and launch it yourself — without depending on others.",
  },
];

const process = [
  { title: "Free fit call", text: "We make sure the cohort matches your goals and experience." },
  { title: "Join the cohort", text: "Reserve one of eight seats and prepare your product idea." },
  { title: "Build live", text: "Learn by shipping, with direct feedback and code reviews." },
  { title: "Launch", text: "Your product goes live — and you know how to grow it." },
];

const faqs = [
  {
    q: "Do I need any coding experience?",
    a: "No. The program starts from the very basics. If you already know some coding, we skip ahead to what you need.",
  },
  {
    q: "Is this online or offline?",
    a: "Sessions are live and online, so you can join from anywhere. In-person sessions in Kozhikode can be discussed.",
  },
  {
    q: "What do I need to start?",
    a: "A laptop, an internet connection and a few hours every week. I'll help you set up everything else.",
  },
  {
    q: "Will I really build my own product?",
    a: "Yes. That's the whole point. You'll finish with a working web and mobile app that is live and ready for users.",
  },
  {
    q: "How much does it cost?",
    a: "The founding cohort costs $499 USD, with fixed localized prices available in the currency selector. It is a one-time fee for the complete six-week program.",
  },
  {
    q: "How many seats are available?",
    a: "Each cohort is limited to eight students so everyone gets direct feedback, code reviews and personal attention.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "@id": `${SITE_URL}/coaching#course`,
      name: "Build & Launch Web and Mobile Apps with AI",
      url: `${SITE_URL}/coaching`,
      description: metadata.description,
      inLanguage: "en",
      educationalLevel: "Beginner to Advanced",
      teaches: steps.flatMap((step) => step.topics),
      provider: {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: SITE_NAME,
        url: SITE_URL,
      },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "Online",
        courseWorkload: "P6W",
        instructor: { "@id": `${SITE_URL}/#person` },
      },
      offers: {
        "@type": "Offer",
        price: "499",
        priceCurrency: "USD",
        availability: "https://schema.org/LimitedAvailability",
        url: `${SITE_URL}/coaching#pricing`,
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Coaching", item: `${SITE_URL}/coaching` },
      ],
    },
  ],
};

export default function CoachingPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(structuredData)} />
      {/* Top bar */}
      <nav className="container-custom pt-8 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          syam.me
        </Link>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
        >
          Book a free call
        </a>
      </nav>

      {/* Hero */}
      <section className="container-custom pt-20 pb-24 md:pt-28 md:pb-32 relative">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] max-w-full h-72 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 blur-3xl rounded-full pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center space-y-8">
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Founder-led coaching · Only 8 seats
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Learn to build apps.
            <br />
            <span className="text-gray-500">Then make them</span>{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              earn.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            From your first line of code to a live web and mobile app — built
            with modern AI tools and turned into a real SaaS business. Get coached
            directly by Syamlal CM, Founder &amp; CEO of Floyet Labs &amp; Technologies.
          </p>
          <p className="text-sm font-medium text-gray-300">
            Founding cohort from <span className="text-white">$499</span> · Live online · Open worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="btn-magnetic bg-white text-black hover:bg-gray-200"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Book a free call
            </a>
            <a href="#pricing" className="btn-magnetic border border-white/15">
              View program &amp; pricing
            </a>
          </div>
        </div>
      </section>

      <div className="space-y-28 md:space-y-36 pb-24">
        {/* Learning path */}
        <section id="path" className="container-custom max-w-5xl scroll-mt-10">
          <SectionHeading
            eyebrow="The path"
            title="Seven simple steps. One complete product."
            text="Every step builds on the last. By the end, you won't just know the tools — you'll have shipped something real."
          />
          <ol className="space-y-4">
            {steps.map((step, i) => (
              <li key={step.title} className="relative bento-card hover:scale-100 p-6 md:p-8 flex gap-5 md:gap-6">
                <div className={`relative w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center ${step.color}`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <div className="space-y-3 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-xs font-mono text-gray-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{step.text}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.topics.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium text-gray-300 px-3 py-1 rounded-full bg-white/5 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Outcomes */}
        <section className="container-custom max-w-5xl">
          <div className="bento-card hover:scale-100 p-8 md:p-12 bg-gradient-to-br from-emerald-900/10 via-transparent to-blue-900/10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
              What you walk away with
            </h2>
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
              {outcomes.map((o) => (
                <li key={o} className="flex gap-3 items-start">
                  <span className="mt-0.5 w-6 h-6 shrink-0 rounded-full bg-emerald-500/15 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  </span>
                  <span className="text-gray-300 leading-relaxed">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Who it's for */}
        <section className="container-custom max-w-5xl">
          <SectionHeading eyebrow="Who it's for" title="Made for people who want to build." />
          <div className="grid md:grid-cols-3 gap-4">
            {audience.map((a) => (
              <div key={a.title} className="bento-card p-8 space-y-3">
                <h3 className="text-xl font-bold">{a.title}</h3>
                <p className="text-gray-400 leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mentor + proof */}
        <section className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-5 gap-4">
            <div className="bento-card hover:scale-100 md:col-span-2 relative overflow-hidden min-h-[320px]">
              <img
                src="/assets/images/syamlal.jpg"
                alt="Syamlal CM"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <p className="text-xl font-bold">Syamlal CM</p>
                <p className="text-sm text-gray-300">Founder & CEO, Floyet Labs & Technologies</p>
              </div>
            </div>
            <div className="bento-card hover:scale-100 md:col-span-3 p-8 md:p-10 flex flex-col justify-center space-y-5">
              <p className="text-xs font-mono uppercase tracking-widest text-gray-500">Your mentor</p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Get coached directly by a Founder &amp; CEO.
              </h2>
              <p className="text-gray-400 leading-relaxed">
                I&apos;m a software engineer and founder. I&apos;ve co-founded a tech
                company as CTO, worked as a senior engineer, and today I run
                Floyet — where my team builds and operates products used by gyms,
                restaurants, temples and families across India.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I don&apos;t teach from slides. I teach the exact tools and steps I use
                to build, launch and grow my own products.
              </p>
            </div>
          </div>

          <div className="mt-4 bento-card hover:scale-100 p-8 md:p-10">
            <p className="text-sm text-gray-400 mb-6">Products I&apos;ve built and run — the same skills you&apos;ll learn:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {products.map((p) => (
                <a
                  key={p.name}
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-colors"
                >
                  <p className="font-bold flex items-center gap-1">
                    {p.name}
                    <ArrowUpRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-white transition-colors" />
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{p.category}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Program and pricing */}
        <section id="pricing" className="container-custom max-w-5xl scroll-mt-10">
          <SectionHeading
            eyebrow="Founding cohort"
            title="Founder-level guidance, without the guesswork."
            text="One global program with fixed local-currency prices. Choose your currency to see the complete program fee."
          />
          <CoachingPricing whatsappLink={WHATSAPP_LINK} />
        </section>

        {/* How it works */}
        <section className="container-custom max-w-5xl">
          <SectionHeading eyebrow="How it works" title="Simple from day one." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((p, i) => (
              <div key={p.title} className="bento-card p-6 space-y-3">
                <span className="w-9 h-9 rounded-full bg-white text-black font-bold flex items-center justify-center text-sm">
                  {i + 1}
                </span>
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="container-custom max-w-3xl">
          <SectionHeading eyebrow="Questions" title="Good to know" />
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex justify-between items-center gap-4 cursor-pointer list-none font-medium text-lg">
                  {f.q}
                  <span className="text-gray-500 text-2xl leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-gray-400 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="container-custom max-w-5xl">
          <div className="bento-card hover:scale-100 p-10 md:p-16 text-center space-y-6 bg-gradient-to-b from-transparent to-emerald-900/15">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Ready to build something real?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              The founding cohort is limited to eight students. Join from $499
              and get direct guidance from a Founder &amp; CEO throughout your build.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn-magnetic bg-white text-black hover:bg-gray-200"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </a>
              <a
                href="mailto:syamjayaraj@gmail.com?subject=Coaching%20program"
                className="btn-magnetic border border-white/15"
              >
                Email me
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mb-10 md:mb-12 space-y-3">
      <p className="text-xs font-mono uppercase tracking-widest text-gray-500">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {text && <p className="text-gray-400 max-w-2xl leading-relaxed">{text}</p>}
    </div>
  );
}
