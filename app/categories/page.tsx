import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "../category-data";
import { Arrow, ContactBand, PageHero, asset } from "../components/site-chrome";
import { pageMetadata } from "../site";

export const metadata: Metadata = pageMetadata(
  "Categories",
  "Explore the consumer product categories supported by CT Dynamics distribution, sourcing, and fulfillment coordination.",
  "categories/",
);

export default function CategoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Consumer categories"
        title="Experience across the products people buy every day."
        intro="We support brands across established consumer categories, pairing market understanding with practical distribution and operational follow-through."
      />

      <section className="category-directory section-shell">
        <div className="directory-intro">
          <p className="section-kicker">Category coverage</p>
          <h2>Different products. The same need for the right channel fit.</h2>
          <p>
            Each category has its own customers, buying patterns, and operating
            realities. Select a category to see how we think about its route to
            market.
          </p>
        </div>
        <div className="category-directory-grid">
          {categories.map((category, index) => (
            <Link href={`/category/${category.slug}`} key={category.slug}>
              <img src={asset(category.image)} alt={category.imageAlt} loading="lazy" />
              <span>0{index + 1}</span>
              <h3>{category.name}</h3>
              <p>{category.intro}</p>
              <span className="directory-link">
                Explore category <Arrow />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <ContactBand title="Have a product in one of these categories?" />
    </>
  );
}
