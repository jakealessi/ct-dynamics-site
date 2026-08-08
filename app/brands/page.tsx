import type { Metadata } from "next";
import Link from "next/link";
import {
  Arrow,
  ContactBand,
  PageHero,
  asset,
} from "../components/site-chrome";
import { pageMetadata } from "../site";

export const metadata: Metadata = pageMetadata(
  "For Brands",
  "See how CT Dynamics helps consumer product brands evaluate channels, coordinate distribution, and support reliable market growth.",
  "brands/",
);

const categories = [
  { name: "Beauty & Personal Care", image: "/media/category-beauty.png" },
  { name: "Electronics", image: "/media/category-electronics.png" },
  { name: "Home & Household", image: "/media/category-home.png" },
  { name: "Pet", image: "/media/category-pet.png" },
  { name: "Automotive", image: "/media/category-automotive.png" },
];

const conversationPoints = [
  "Your product and the customer it serves",
  "Where you sell today and where you want to grow",
  "Current supply and fulfillment readiness",
  "The channel opportunities that fit your brand",
];

export default function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="For consumer product brands"
        title="Build a bigger market without losing control of the details."
        intro="We help brand owners connect distribution opportunities with the supply, communication, and follow-through needed to support them."
        image="/media/category-beauty.png"
        imageAlt="Consumer products positioned for retail growth"
      />

      <section className="brand-benefit section-shell">
        <div>
          <p className="section-kicker">What a strong partnership creates</p>
          <h2>A clear view of where your product can go next.</h2>
        </div>
        <div className="benefit-grid">
          <article>
            <span>01</span>
            <h3>Better channel fit</h3>
            <p>
              Focus attention on opportunities that make sense for the product,
              price point, customer, and stage of growth.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Connected execution</h3>
            <p>
              Bring distribution, supply, and fulfillment considerations into
              the same conversation from the beginning.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Durable momentum</h3>
            <p>
              Support consistent availability and communication so progress
              does not stop after the first placement.
            </p>
          </article>
        </div>
      </section>

      <section className="conversation-section">
        <div className="conversation-copy">
          <p className="eyebrow">The first conversation</p>
          <h2>We start with the business behind the product.</h2>
          <p>
            Every brand is at a different point in its growth. Before proposing
            a route forward, we want to understand the current reality.
          </p>
          <ul>
            {conversationPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <Link className="button button-light" href="/contact">
            Tell us about your brand <Arrow />
          </Link>
        </div>
        <div className="conversation-image">
          <img
            src={asset("/media/warehouse-team.png")}
            alt="A team coordinating distribution operations"
            loading="lazy"
          />
        </div>
      </section>

      <section className="markets-section section-shell">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow dark">Category experience</p>
            <h2>Consumer markets we understand.</h2>
          </div>
          <p className="section-side-copy">
            Our focus spans everyday consumer categories where availability,
            presentation, and the right channel relationships matter.
          </p>
        </div>
        <div className="market-list">
          {categories.map((category, index) => (
            <article key={category.name}>
              <span>0{index + 1}</span>
              <h3>{category.name}</h3>
              <img src={asset(category.image)} alt="" loading="lazy" />
            </article>
          ))}
        </div>
      </section>

      <ContactBand title="Where could your product go next?" />
    </>
  );
}
