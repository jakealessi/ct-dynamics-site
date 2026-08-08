import type { Metadata } from "next";
import Link from "next/link";
import {
  Arrow,
  ContactBand,
  asset,
} from "./components/site-chrome";
import { pageMetadata } from "./site";

export const metadata: Metadata = pageMetadata(
  "CT Dynamics | Distribution Built for Brand Growth",
  "CT Dynamics helps consumer product brands enter the right wholesale, retail, and online sales channels through connected distribution, sourcing, and fulfillment.",
);

const services = [
  {
    number: "01",
    title: "Wholesale distribution",
    text: "Build a dependable path into retail and wholesale channels that fit your product and stage of growth.",
  },
  {
    number: "02",
    title: "Product sourcing",
    text: "Connect supply, product opportunity, and reliable supplier relationships with clearer communication.",
  },
  {
    number: "03",
    title: "Fulfillment coordination",
    text: "Keep inventory and orders moving so increased demand does not create operational friction.",
  },
];

const categories = [
  { label: "Beauty & Personal Care", slug: "beauty-and-personal-care", image: "/media/category-beauty.png" },
  { label: "Home & Kitchen", slug: "home-and-kitchen", image: "/media/category-home-kitchen.png" },
  { label: "Health & Household", slug: "health-and-household", image: "/media/category-health-household.png" },
  { label: "Sports & Outdoors", slug: "sports-and-outdoors", image: "/media/category-sports-outdoors.png" },
  { label: "Toys & Games", slug: "toys-and-games", image: "/media/category-toys-games.png" },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="eyebrow hero-reveal reveal-1">
            Distribution for growth-minded brands
          </p>
          <h1 className="hero-reveal reveal-2">
            Take your product into more of the right markets.
          </h1>
          <p className="hero-intro hero-reveal reveal-3">
            CT Dynamics connects consumer brands with practical routes to
            wholesale, retail, and online growth—then helps coordinate the
            supply and fulfillment behind it.
          </p>
          <div className="hero-actions hero-reveal reveal-4">
            <Link className="button button-blue" href="/contact">
              Discuss your brand <Arrow />
            </Link>
            <Link className="text-link" href="/services">
              Explore our services <Arrow />
            </Link>
          </div>
        </div>
        <div className="home-hero-media hero-reveal reveal-3">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={asset("/media/warehouse-team.png")}
            aria-label="Products moving through a distribution facility"
          >
            <source src={asset("/media/distribution-hero.mp4")} type="video/mp4" />
          </video>
          <div className="media-note">
            <span>Product ready</span>
            <span className="media-note-line" />
            <span>Market ready</span>
          </div>
        </div>
      </section>

      <div className="channel-bar" aria-label="Channels and capabilities">
        <span>Wholesale</span>
        <span>Retail</span>
        <span>Online marketplaces</span>
        <span>Supply coordination</span>
      </div>

      <section className="intro-section section-shell">
        <p className="section-kicker">A distribution partner—not a handoff</p>
        <div className="intro-grid">
          <h2>Growth works better when the route to market is clear.</h2>
          <div>
            <p>
              Good products lose momentum when opportunity, inventory, and
              execution operate separately. We help bring those pieces together.
            </p>
            <p>
              Our approach is hands-on and relationship-driven: understand the
              product, identify where it belongs, and build the dependable
              movement required to keep it there.
            </p>
            <Link className="underlined-link" href="/about">
              About CT Dynamics <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <section className="services-preview">
        <div className="section-shell">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow dark">What we connect</p>
              <h2>One partner across the moving parts.</h2>
            </div>
            <Link className="underlined-link" href="/services">
              View all services <Arrow />
            </Link>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-path-section">
        <div className="brand-path-image">
          <img
            src={asset("/media/last-mile.png")}
            alt="A delivery van being loaded at a warehouse"
            loading="lazy"
          />
        </div>
        <div className="brand-path-copy">
          <p className="eyebrow">For brand owners</p>
          <h2>More channels should create momentum—not more chaos.</h2>
          <p>
            We help turn distribution opportunities into a working growth plan,
            connecting channel fit with the operational follow-through needed
            after the first order.
          </p>
          <Link className="button button-light" href="/brands">
            How we work with brands <Arrow />
          </Link>
        </div>
      </section>

      <section className="category-preview section-shell">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow dark">Consumer categories</p>
            <h2>Built around products people buy and use every day.</h2>
          </div>
          <p className="section-side-copy">
            Category experience helps us think clearly about placement,
            availability, and the buyers each product needs to reach.
          </p>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <Link
              className="category-card"
              href={`/category/${category.slug}`}
              key={category.label}
            >
              <img
                src={asset(category.image)}
                alt={`${category.label} products`}
                loading="lazy"
              />
              <span>{category.label}</span>
            </Link>
          ))}
        </div>
        <div className="category-view-all">
          <Link className="underlined-link" href="/categories">
            View all product categories <Arrow />
          </Link>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
