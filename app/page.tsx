import type { Metadata } from "next";
import Link from "next/link";
import {
  Arrow,
  ContactBand,
  PartnerSpace,
  Photo,
  Testimonials,
} from "./components/site-chrome";
import { pageMetadata } from "./site";
import { services } from "./service-data";

export const metadata: Metadata = pageMetadata(
  "CT Dynamics | Brand & Commerce",
  "CT Dynamics helps consumer brands with branding, marketing, content, and distribution, and helps buyers source products for their businesses.",
);

const creativeServices = services.slice(0, 3);
const commerceServices = services.slice(3);
const featured = [
  {
    name: "Beauty & Personal Care",
    slug: "beauty-and-personal-care",
    image: "/media/category-beauty.png",
  },
  {
    name: "Home & Kitchen",
    slug: "home-and-kitchen",
    image: "/media/category-home-kitchen.png",
  },
  {
    name: "Electronics",
    slug: "electronics",
    image: "/media/category-electronics.png",
  },
  {
    name: "Sports & Outdoors",
    slug: "sports-and-outdoors",
    image: "/media/category-sports-outdoors.png",
  },
];

export default function Home() {
  return (
    <>
      <section className="commerce-hero" aria-labelledby="home-title">
        <div className="commerce-hero-topline">
          <p className="eyebrow">
            <span className="blue-dot" />
            Marketing & distribution
          </p>
          <span>Supplying what moves you.</span>
        </div>
        <div className="hero-collage" aria-hidden="true">
          <div className="collage-panel collage-beauty">
            <Photo src="/media/category-beauty.png" alt="" priority />
          </div>
          <div className="collage-panel collage-electronics">
            <Photo src="/media/category-electronics.png" alt="" priority />
          </div>
          <div className="collage-panel collage-home">
            <Photo src="/media/category-home-kitchen.png" alt="" />
          </div>
        </div>
        <h1 id="home-title" className="commerce-hero-title">
          <span>We help you</span>
          <span>reach buyers.</span>
        </h1>
        <div className="commerce-hero-actions">
          <Link className="button button-light" href="/services">
            Explore our services{" "}
            <span className="circle-arrow">
              <Arrow />
            </span>
          </Link>
          <Link className="hero-contact" href="/contact">
            Let’s talk <Arrow />
          </Link>
        </div>
        <div className="commerce-hero-base">
          <span>Marketing, content and distribution for consumer brands.</span>
          <a href="#what-we-do" aria-label="Explore CT Dynamics">
            <span>Explore</span>
            <Arrow down />
          </a>
        </div>
      </section>

      <PartnerSpace />

      <section className="brand-statement section-shell" id="what-we-do">
        <p className="eyebrow">CT Dynamics</p>
        <div className="brand-statement-grid">
          <h2>
            We work with brands
            <br />
            <em>and buyers.</em>
          </h2>
          <div>
            <p>
              We help brands market and sell their products, and help buyers
              find products for their businesses. That includes creative work,
              sourcing, and getting orders out the door.
            </p>
            <Link className="text-link" href="/about">
              Get to know us <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <section className="creative-services section-shell" id="services">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">01 / Branding & marketing</p>
            <h2>
              Branding, marketing
              <br />
              and content.
            </h2>
          </div>
          <Link className="text-link" href="/services">
            All services <Arrow />
          </Link>
        </div>
        <div className="service-grid">
          {creativeServices.map((service, index) => (
            <Link
              className="service-tile"
              key={service.id}
              href={`/services#${service.id}`}
            >
              <div className="service-tile-image">
                <Photo src={service.image} alt={service.imageAlt} />
              </div>
              <div className="service-tile-title">
                <span className="row-number">0{index + 1}</span>
                <h3>{service.title}</h3>
                <Arrow />
              </div>
              <p>{service.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="commerce-section section-shell">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">02 / Buying & selling</p>
            <h2>
              Get your products
              <br />
              to market.
            </h2>
          </div>
          <span className="commerce-channels">Wholesale, retail & online</span>
        </div>
        <div className="commerce-section-grid">
          <div className="commerce-service-list">
            {commerceServices.map((service, index) => (
              <Link
                className="commerce-service"
                key={service.id}
                href={`/services#${service.id}`}
              >
                <span className="row-number">0{index + 4}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </div>
                <Arrow />
              </Link>
            ))}
          </div>
          <div className="commerce-section-image">
            <Photo
              src="/media/last-mile.png"
              alt="An order being loaded for delivery"
            />
          </div>
        </div>
      </section>

      <section className="partnership-section section-shell">
        <p className="eyebrow">Work with us</p>
        <div className="partnership-grid">
          <article>
            <span className="partnership-label">For brands</span>
            <h2>
              Looking to grow
              <br />
              your brand?
            </h2>
            <p>
              Get help with your branding, marketing, content, and sales
              channels.
            </p>
            <Link className="button" href="/brands">
              Grow with us{" "}
              <span className="circle-arrow">
                <Arrow />
              </span>
            </Link>
          </article>
          <article>
            <span className="partnership-label">For buyers</span>
            <h2>
              Looking for
              <br />
              products to sell?
            </h2>
            <p>Tell us what you sell and what you’re looking to buy.</p>
            <Link className="button" href="/buyers">
              Source with us{" "}
              <span className="circle-arrow">
                <Arrow />
              </span>
            </Link>
          </article>
        </div>
      </section>

      <section className="category-section section-shell">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Our categories</p>
            <h2>
              Products for
              <br />
              your customers.
            </h2>
          </div>
          <Link className="text-link" href="/categories">
            Explore all categories <Arrow />
          </Link>
        </div>
        <div className="featured-categories">
          {featured.map((category, index) => (
            <Link
              className="featured-category"
              href={`/category/${category.slug}`}
              key={category.slug}
            >
              <div className="category-image">
                <Photo src={category.image} alt={`${category.name} products`} />
              </div>
              <div className="category-caption">
                <span className="row-number">0{index + 1}</span>
                <h3>{category.name}</h3>
                <Arrow />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="approach-section section-shell">
        <p className="eyebrow">How we work</p>
        <div className="approach-grid">
          <h2>
            Tell us what
            <br />
            <em>you’re working on.</em>
          </h2>
          <div>
            <p>
              We’ll talk through where you need help, agree on a plan, and bring
              in the people the project needs. You’ll have one contact at CT
              Dynamics to manage the work and keep you updated.
            </p>
            <Link className="text-link" href="/contact">
              Tell us what you need <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
      <ContactBand title="How can we help?" />
    </>
  );
}
