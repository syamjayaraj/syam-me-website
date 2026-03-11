import styles from "./page.module.css";
import Link from "next/link";
import { Metadata } from "next";
import { fetchAPI, getStrapiMedia } from "@/lib/strapi";

export const metadata: Metadata = {
  title: "Insights & Updates - The Floyet Blog",
  description: "Explore the latest insights on digital product engineering, business automation, and stories from the Floyet team.",
  openGraph: {
    title: "The Floyet Blog - Insights & Updates",
    description: "Explore the latest insights on digital product engineering and business automation from the Floyet team.",
    type: "website",
  },
};

export default async function BlogPage() {
  const { data: posts } = await fetchAPI("/posts", { populate: "*" });

  return (
    <main
      className={`${styles.main} reveal scale-up`}
      style={{
        marginTop: "100px",
      }}
    >
      <section className={styles.blogSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>Our Blog</h1>
          <p className={styles.subtitle}>
            Insights, updates, and stories from our team
          </p>

          <div className={styles.postsGrid}>
            {posts?.map((post: any) => (
              <Link
                href={`/blog/${post?.slug}`}
                key={post.id}
                className={styles.postCard}
              >
                {post?.image?.url && (
                  <div className={styles.imageWrapper}>
                    <img
                      src={getStrapiMedia(post?.image?.url) || ""}
                      alt={post?.title}
                      className={styles.postImage}
                    />
                  </div>
                )}
                <div className={styles.postContent}>
                  <h2 className={styles.postTitle}>{post?.title}</h2>
                  <p className={styles.postExcerpt}>{post?.excerpt}</p>
                  <div className={styles.postMeta}>
                    <span className={styles.postDate}>
                      {new Date(post?.publishedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
