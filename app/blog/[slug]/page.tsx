import styles from "./page.module.css";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Metadata } from "next";
import { fetchAPI, getStrapiMedia } from "@/lib/strapi";
import Footer from "@/components/Footer";


async function getBlogPost(slug: string) {
  const { data } = await fetchAPI("/posts", {
    "filters[slug][$eq]": slug,
    populate: "*",
  });
  return data?.[0];
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getBlogPost(resolvedParams.slug);

  if (!post) {
    return {
      title: "Post Not Found | Floyet",
      description: "The requested blog post could not be found.",
    };
  }

  const seo = post.seo || {};

  return {
    title: seo.metaTitle || `${post.title} | Floyet Blog`,
    description: seo.metaDescription || post.excerpt,
    openGraph: {
      title: seo.metaTitle || post.title,
      description: seo.metaDescription || post.excerpt,
      type: "article",
      images: post.image?.url
        ? [
            {
              url: getStrapiMedia(post.image.url) || "",
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = await getBlogPost(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <main
        className={styles.main}
        style={{
          marginTop: "100px",
        }}
      >
        <article className={styles.article}>
          <div className={styles.container}>
            {post?.image?.url && (
              <div className={styles.heroImage}>
                <img
                  src={getStrapiMedia(post?.image?.url) || ""}
                  alt={post.title}
                  className={styles.featuredImage}
                />
              </div>
            )}

            <div className={styles.content}>
              <h1 className={styles.title}>{post.title}</h1>

              <div className={styles.meta}>
                <time className={styles.date}>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>

              <div className={styles.body}>
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
