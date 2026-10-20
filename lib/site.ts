// Site-wide constants used for SEO (metadata, sitemap, structured data).

export const SITE_URL = "https://syam.me";
export const SITE_NAME = "Syamlal CM";
export const OG_IMAGE = "/assets/images/syamlal-og.jpg";

export const SOCIAL_LINKS = [
  "https://www.linkedin.com/in/syamjayaraj",
  "https://twitter.com/syamjayaraj",
  "https://github.com/syamjayaraj",
];

// Strip HTML tags and collapse whitespace to build plain-text descriptions.
export function toPlainText(html: string, maxLength = 160) {
  const text = html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > maxLength ? `${text.slice(0, maxLength - 1).trimEnd()}…` : text;
}

// Renders a JSON-LD <script> block for Google rich results.
export function jsonLd(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
