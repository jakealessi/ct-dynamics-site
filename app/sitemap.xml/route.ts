import { categories } from "../category-data";
import { siteUrl } from "../site";

export const dynamic = "force-static";

const paths = [
  "",
  "about/",
  "services/",
  "brands/",
  "buyers/",
  "categories/",
  "faq/",
  "contact/",
  ...categories.map((category) => `category/${category.slug}/`),
];

export function GET() {
  const updated = new Date().toISOString();
  const entries = paths
    .map(
      (path) =>
        `<url><loc>${new URL(path, siteUrl).toString()}</loc><lastmod>${updated}</lastmod><changefreq>${path ? "monthly" : "weekly"}</changefreq><priority>${path ? "0.8" : "1.0"}</priority></url>`,
    )
    .join("");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`,
    {
      headers: { "Content-Type": "application/xml; charset=utf-8" },
    },
  );
}
