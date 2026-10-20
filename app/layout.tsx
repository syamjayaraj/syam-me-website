import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google"; // Premium fonts
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css"; // Bootstrap removed
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

const gtmId = process?.env?.NEXT_PUBLIC_GTM_ID as string;

// Modern, geometric font for headings
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

// Clean, readable font for body text
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Syamlal CM | Founder & CEO · Floyet Labs & Technologies",
    template: "%s",
  },
  description:
    "Syamlal CM is a technology entrepreneur from Kozhikode, Kerala and Founder & CEO of Floyet Labs & Technologies LLP — building GymTie, Livonomi, YoungMenu, DevaPatha and Onebest, and mentoring people to build and launch their own apps.",
  keywords: [
    "syamlal cm",
    "syam",
    "syamjayaraj",
    "floyet",
    "floyet labs",
    "gymtie",
    "founder",
    "technology entrepreneur kerala",
    "software developer kozhikode",
    "web and mobile app developer",
    "coding mentor",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_IN",
    url: "/",
    title: "Syamlal CM | Founder & CEO · Floyet Labs & Technologies",
    description:
      "Technology entrepreneur building GymTie, Livonomi, YoungMenu, DevaPatha and Onebest at Floyet Labs & Technologies.",
    images: [{ url: OG_IMAGE, width: 960, height: 960, alt: "Syamlal CM" }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@syamjayaraj",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <GoogleTagManager gtmId={gtmId} />
      <body
        className={`${outfit.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
