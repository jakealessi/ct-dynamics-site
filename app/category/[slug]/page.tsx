import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory } from "../../category-data";
import {
  Arrow,
  ContactBand,
  PageHero,
  asset,
} from "../../components/site-chrome";
import { pageMetadata } from "../../site";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) return {};

  return pageMetadata(
    category.name,
    `${category.intro} Learn how CT Dynamics supports brands in the ${category.name} category.`,
    `category/${category.slug}/`,
  );
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) notFound();

  const related = categories
    .filter((item) => item.slug !== category.slug)
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Consumer category"
        title={category.name}
        intro={category.intro}
        image={category.image}
        imageAlt={category.imageAlt}
      />

      <section className="category-overview section-shell">
        <div>
          <p className="section-kicker">Category perspective</p>
          <h2>Built for the way this category reaches customers.</h2>
        </div>
        <div className="long-copy">
          {category.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Link className="underlined-link" href="/services">
            See how we support distribution <Arrow />
          </Link>
        </div>
      </section>

      <section className="category-considerations">
        <div className="section-shell">
          <p className="eyebrow">What matters</p>
          <h2>Three considerations behind a stronger route to market.</h2>
          <div className="consideration-grid">
            {category.considerations.map((item, index) => (
              <article key={item}>
                <span>0{index + 1}</span>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="related-categories section-shell">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow dark">More categories</p>
            <h2>Explore the rest of our market experience.</h2>
          </div>
          <Link className="underlined-link" href="/categories">
            View all categories <Arrow />
          </Link>
        </div>
        <div className="related-grid">
          {related.map((item) => (
            <Link href={`/category/${item.slug}`} key={item.slug}>
              <img src={asset(item.image)} alt="" loading="lazy" />
              <h3>{item.name}</h3>
              <Arrow />
            </Link>
          ))}
        </div>
      </section>

      <ContactBand title={`Let’s talk about your ${category.name.toLowerCase()} brand.`} />
    </>
  );
}
