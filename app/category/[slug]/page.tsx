import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory } from "../../category-data";
import {
  Arrow,
  ContactBand,
  PageHero,
  Photo,
} from "../../components/site-chrome";
import { pageMetadata } from "../../site";
export const dynamicParams = false;
export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  return category
    ? pageMetadata(category.name, category.intro, `category/${category.slug}/`)
    : {};
}
export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const related = categories.filter((item) => item.slug !== slug).slice(0, 3);
  return (
    <>
      <PageHero
        eyebrow="Our categories"
        title={category.name}
        intro={category.intro}
        image={category.image}
        imageAlt={category.imageAlt}
      />
      <section className="split-section section-shell">
        <div>
          <p className="eyebrow">Brands & buyers</p>
          <h2>
            Buying or selling?
            <br />
            We can help.
          </h2>
        </div>
        <div className="long-copy">
          {category.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Link className="text-link" href="/contact">
            Discuss this category <Arrow />
          </Link>
        </div>
      </section>
      <section className="numbered-section section-shell">
        <p className="eyebrow">What we’ll talk through</p>
        <div className="numbered-grid">
          {category.considerations.map((item, index) => (
            <article key={item}>
              <span className="row-number">0{index + 1}</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>
      <section className="related-section section-shell">
        <div className="section-heading-row">
          <h2>Other categories</h2>
          <Link className="text-link" href="/categories">
            All categories <Arrow />
          </Link>
        </div>
        <div className="related-grid">
          {related.map((item) => (
            <Link href={`/category/${item.slug}`} key={item.slug}>
              <div className="category-image">
                <Photo src={item.image} alt={item.imageAlt} />
              </div>
              <div className="category-caption">
                <h3>{item.name}</h3>
                <Arrow />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <ContactBand />
    </>
  );
}
