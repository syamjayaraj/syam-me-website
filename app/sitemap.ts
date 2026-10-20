import { MetadataRoute } from "next";
import { fetchAPI } from "@/lib/strapi";
import { getBloggerPosts } from "@/lib/blogger";
import { SITE_URL } from "@/lib/site";

export const revalidate = 3600;

async function getBlogEntries(): Promise<MetadataRoute.Sitemap> {
    try {
        const { data: posts } = await fetchAPI("/posts", { "fields[0]": "slug", "fields[1]": "updatedAt" });
        return (posts || [])
            .filter((post: any) => post?.slug)
            .map((post: any) => ({
                url: `${SITE_URL}/blog/${post.slug}`,
                lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
                changeFrequency: "monthly" as const,
                priority: 0.6,
            }));
    } catch {
        return [];
    }
}

async function getMirageEntries(): Promise<MetadataRoute.Sitemap> {
    const posts = await getBloggerPosts(150);
    return posts.map((post) => ({
        url: `${SITE_URL}/mirage/${post.id}`,
        lastModified: new Date(post.updated),
        changeFrequency: "yearly" as const,
        priority: 0.5,
    }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const [blogEntries, mirageEntries] = await Promise.all([getBlogEntries(), getMirageEntries()]);

    return [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${SITE_URL}/coaching`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/mirage`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.6,
        },
        ...blogEntries,
        ...mirageEntries,
    ];
}
