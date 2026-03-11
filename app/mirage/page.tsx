import styles from "./page.module.css";
import { Metadata } from "next";
import { getBloggerPosts } from "@/lib/blogger";
import MirageClient from "./MirageClient";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mirage - Parallel Realms by Syamlal CM",
  description: "Step into the unknown. A collection of paranormal and mysterious stories by Syamlal CM.",
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
