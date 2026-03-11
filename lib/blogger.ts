
const BLOG_ID = process.env.BLOGGER_BLOG_ID || "1782766344827080830";

export interface BloggerPost {
    id: string;
    title: string;
    content: string;
    published: string;
    updated: string;
    url: string;
    thumbnail?: string;
    author: {
        name: string;
        image: string;
    };
}

function parseBloggerEntry(entry: any): BloggerPost {
    // Extract ID from tag:blogger.com,1999:blog-ID.post-POSTID
    const idMatch = entry.id.$t.match(/post-(\d+)/);
    const id = idMatch ? idMatch[1] : entry.id.$t.split('.').pop();

    const alternateLink = entry.link.find((l: any) => l.rel === "alternate")?.href || "";

    return {
        id: id,
        title: entry.title.$t,
        content: entry.content.$t,
        published: entry.published.$t,
        updated: entry.updated.$t,
        url: alternateLink,
        thumbnail: entry.media$thumbnail?.url?.replace(/\/s[0-9]+(-[a-z0-9-]+)*\//, "/s1600/"), // Get higher res image
        author: {
            name: entry.author[0]?.name?.$t || "",
            image: entry.author[0]?.gd$image?.src || "",
        },
    };
}

export async function getBloggerPosts(maxResults = 25): Promise<BloggerPost[]> {
    try {
        const url = `https://www.blogger.com/feeds/${BLOG_ID}/posts/default?alt=json&max-results=${maxResults}`;
        const response = await fetch(url, { next: { revalidate: 3600 } });

        if (!response.ok) {
            throw new Error(`Failed to fetch Blogger posts: ${response.statusText}`);
        }

        const data = await response.json();
        const entries = data.feed.entry || [];
        return entries.map(parseBloggerEntry);
    } catch (error) {
        console.error("Error fetching Blogger posts:", error);
        return [];
    }
}

export async function getBloggerPost(postId: string): Promise<BloggerPost | null> {
    try {
        const url = `https://www.blogger.com/feeds/${BLOG_ID}/posts/default/${postId}?alt=json`;
        const response = await fetch(url, { next: { revalidate: 3600 } });

        if (!response.ok) {
            // Try alternate feed URL if the first one fails
            const altUrl = `https://heartofsyam.blogspot.com/feeds/posts/default/${postId}?alt=json`;
            const altResponse = await fetch(altUrl, { next: { revalidate: 3600 } });
            if (!altResponse.ok) return null;
            const altData = await altResponse.json();
            return parseBloggerEntry(altData.entry);
        }

        const data = await response.json();
        return parseBloggerEntry(data.entry);
    } catch (error) {
        console.error(`Error fetching Blogger post ${postId}:`, error);
        return null;
    }
}
