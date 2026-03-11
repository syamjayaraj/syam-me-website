import styles from "./page.module.css";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getBloggerPost } from "@/lib/blogger";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Link from "next/link";

interface MiragePostPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: MiragePostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getBloggerPost(resolvedParams.id);

  if (!post) {
    return {
      title: "Story Not Found | Mirage",
    };
  }

  return {
    title: `${post.title} | Mirage`,
    description: post.title,
    openGraph: {
      title: post.title,
      type: "article",
      images: post.thumbnail ? [post.thumbnail] : [],
    },
  };
}

export default async function MiragePostPage({ params }: MiragePostPageProps) {
  const resolvedParams = await params;
  const post = await getBloggerPost(resolvedParams.id);

  if (!post) {
    notFound();
  }

  // Check if content starts with an image to avoid duplication
  // Blogger often wraps initial images in a div.separator
  const startsWithImage = /^(\s*<div[^>]*separator[^>]*>)?\s*<a[^>]*>\s*<img/.test(post.content) || 
                          /^\s*<img/.test(post.content);

  return (
    <main className={styles.main}>
      <div className={styles.ghostlyOverlay}></div>
      <article className={styles.article}>
        <div className={styles.container}>
          <Link href="/mirage" className={styles.backButton}>
            <ArrowLeft className="w-4 h-4" /> Back to Stories
          </Link>

          <header>
            <h1 className={`${styles.title} ${styles.scaryTitle}`}>{post.title}</h1>
            <div className={styles.meta}>
              <div className={styles.author}>
                {post.author.image && (
                  <img
                    src={post.author.image}
                    alt={post.author.name}
                    className={styles.authorImage}
                  />
                )}
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(post.published).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </header>

          {!startsWithImage && post.thumbnail && (
            <div className={styles.heroImage}>
              <img
                src={post.thumbnail}
                alt={post.title}
                className={styles.featuredImage}
              />
            </div>
          )}

          <div className={styles.content}>
            <div
              className={styles.body}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </article>
    </main>
  );
}
