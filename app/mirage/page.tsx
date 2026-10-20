import styles from "./page.module.css";
import { Metadata } from "next";
import { getBloggerPosts } from "@/lib/blogger";
import MirageClient from "./MirageClient";
import Footer from "@/components/Footer";
import { OG_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mirage - Parallel Realms by Syamlal CM",
  description: "Step into the unknown. A collection of paranormal and mysterious stories by Syamlal CM.",
  alternates: { canonical: "/mirage" },
  openGraph: {
    title: "Mirage - Parallel Realms by Syamlal CM",
    description: "Step into the unknown. A collection of paranormal and mysterious stories by Syamlal CM.",
    url: "/mirage",
    images: [{ url: OG_IMAGE, width: 960, height: 960, alt: "Syamlal CM" }],
    type: "website",
  },
};

export default async function MiragePage() {
  const posts = await getBloggerPosts(100);

  const paranormalPosts = posts.filter((p) => p.title.startsWith("മരീചിക"));
  const waheedaPosts = posts.filter((p) => p.title.startsWith("വഹീദ"));
  const otherPosts = posts.filter((p) => 
    !p.title.startsWith("മരീചിക") && !p.title.startsWith("വഹീദ")
  );

  return (
    <>
      <MirageClient 
        paranormalPosts={paranormalPosts} 
        waheedaPosts={waheedaPosts} 
        otherPosts={otherPosts} 
      />
      <Footer />
    </>
  );
}
