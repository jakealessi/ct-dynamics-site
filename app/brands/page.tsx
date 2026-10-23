import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, ContactBand, PageHero, Photo } from "../components/site-chrome";
import { pageMetadata } from "../site";
export const metadata: Metadata = pageMetadata(
  "For Brands",
  "Build your brand, create content, reach customers, and open new sales channels with CT Dynamics.",
  "brands/",
);
export default function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="For brands"
        title="Let’s grow your brand."
        intro="We help with branding, marketing, and content, then work with you to get your products into stores and online."
        image="/media/category-beauty.png"
        imageAlt="Beauty and personal care products"
      />
      <section className="split-section section-shell">
        <div>
          <p className="eyebrow">What we can help with</p>
          <h2>
            Let’s find
            <br />
            your next
            <br />
            <em>customers.</em>
          </h2>
        </div>
        <div className="long-copy">
          <p>
            You might be launching something new or looking for more customers
            for an established brand. We’ll work with you on how your products
            look, how you talk about them, and where you sell them.
          </p>
          <p>
            That can mean a brand refresh, product photography, a marketing
            campaign, or introductions to retail and wholesale buyers. We’ll
            agree on what you need before the work starts.
          </p>
          <Link className="text-link" href="/contact">
            Tell us about your brand <Arrow />
          </Link>
        </div>
      </section>
      <section className="numbered-section section-shell">
        <p className="eyebrow">Working with CT Dynamics</p>
        <div className="numbered-grid">
          <article>
            <span className="row-number">01</span>
            <h3>Brand strategy</h3>
            <p>
              Get clear on who your products are for, what makes them different,
              and how you want the brand to look and sound.
            </p>
          </article>
          <article>
            <span className="row-number">02</span>
            <h3>Marketing & content</h3>
            <p>
              Create product photos, copy, and campaigns for the places your
              customers shop.
            </p>
          </article>
          <article>
            <span className="row-number">03</span>
            <h3>Sales & distribution</h3>
            <p>
              Find new buyers and get help coordinating the inventory and
              shipping needed to supply them.
            </p>
          </article>
        </div>
      </section>
      <section className="image-editorial section-shell">
        <Photo
          src="/media/warehouse-team.png"
          alt="A distribution team at work"
        />
        <div>
          <h2>
            Tell us about
            <br />
            your business.
          </h2>
          <ul className="check-list">
            <li>What you sell</li>
            <li>Where you sell today</li>
            <li>Who you’d like to reach</li>
            <li>Where you need help</li>
            <li>What stock you have available</li>
          </ul>
          <Link className="text-link" href="/contact">
            Introduce your brand <Arrow />
          </Link>
        </div>
      </section>
      <ContactBand title="Have a project in mind?" />
    </>
  );
}
