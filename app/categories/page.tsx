import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "../category-data";
import { Arrow, ContactBand, PageHero, Photo } from "../components/site-chrome";
import { pageMetadata } from "../site";
export const metadata: Metadata = pageMetadata(
  "Categories",
  "Explore CT Dynamics consumer product categories, from beauty and home to electronics and automotive.",
  "categories/",
);
export default function CategoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our categories"
        title="Explore our product categories."
      />
      <section className="category-directory section-shell">
        <div className="directory-top">
          <p className="eyebrow">Explore the range</p>
          <span>{String(categories.length).padStart(2, "0")} categories</span>
        </div>
        <div className="category-directory-grid">
          {categories.map((category, index) => (
            <Link
              className="directory-card"
              href={`/category/${category.slug}`}
              key={category.slug}
            >
              <div className="category-image">
                <Photo src={category.image} alt={category.imageAlt} />
              </div>
              <div className="category-caption">
                <span className="row-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2>{category.name}</h2>
                <Arrow />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <ContactBand title="Looking for something specific?" />
    </>
  );
}
