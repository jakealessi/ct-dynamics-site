import type { MetadataRoute } from "next";
import { categories } from "./category-data";
import { siteUrl } from "./site";

export const dynamic = "force-static";

const paths = [
  "",
  "about/",
  "services/",
  "brands/",
  "categories/",
  "faq/",
  "contact/",
  ...categories.map((category) => `category/${category.slug}/`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: new URL(path, siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: path ? "monthly" : "weekly",
    priority: path ? 0.8 : 1,
  }));
}
