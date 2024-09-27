import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
const gtmId = process?.env?.NEXT_PUBLIC_GTM_ID as string;

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: `Syamlal CM ← Software Engineer & Internet Entrepreneur, Founder & CEO
  at Floyet Labs & Technologies, • Next.js • React.js • Express.js • Strapi CMS •
  MongoDB`,
  description: `Syamlal CM is a Software Engineer & Internet Entrepreneur. He is the Founder & CEO
  at Floyet Labs & Technologies`,
  keywords: [
    "syamlal cm",
    "syamlal",
    "software engineer",
    "developer",
    "internet entrepreneur",
    "floyet",
    "floyet labs and technologies",
  ],
  openGraph: {
    type: "website",
    title: `Syamlal CM ← Software Engineer & Internet Entrepreneur, Founder & CEO
    at Floyet Labs & Technologies, • Next.js • React.js • Express.js • Strapi CMS •
    MongoDB`,
    description: `Syamlal CM is a Software Engineer & Internet Entrepreneur. He is the Founder & CEO
    at Floyet Labs & Technologies`,
    url: "https://syam.me",
    images: "/assets/images/syamlal-og.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={gtmId} />
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
