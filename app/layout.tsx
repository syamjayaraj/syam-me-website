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
  title: `Syamlal CM | Software Engineer • Internet Entrepreneur • Writer`,
  description: `Syamlal CM is a Software Engineer, Internet Entrepreneur, and Writer. Founder & CEO at Floyet Labs & Technologies. Building innovative tech solutions.`,
  keywords: [
    "syamlal cm",
    "software engineer",
    "internet entrepreneur",
    "writer",
    "floyet",
    "next.js",
    "web developer",
  ],
  openGraph: {
    type: "website",
    title: `Syamlal CM | Software Engineer • Internet Entrepreneur • Writer`,
    description: `Leading innovation at Floyet Labs & Technologies. Software Engineer & Entrepreneur.`,
    url: "https://syam.me",
    // images: "/assets/images/syamlal-og.jpg", // Kept commented or as is
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
