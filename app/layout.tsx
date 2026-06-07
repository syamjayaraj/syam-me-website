import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google"; // Premium fonts
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css"; // Bootstrap removed

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
  title: `Syamlal CM | Founder & CEO · Floyet Labs & Technologies`,
  description: `Syamlal CM is a technology entrepreneur and Founder & CEO of Floyet Labs & Technologies LLP. Building scalable web and mobile products.`,
  keywords: [
    "syamlal cm",
    "founder",
    "ceo",
    "technology entrepreneur",
    "floyet",
    "product builder",
    "software",
  ],
  openGraph: {
    type: "website",
    title: `Syamlal CM | Founder & CEO · Floyet Labs & Technologies`,
    description: `Technology entrepreneur building scalable digital products at Floyet Labs & Technologies.`,
    url: "https://syam.me",
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
