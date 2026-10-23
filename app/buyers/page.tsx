import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, ContactBand, PageHero, Photo } from "../components/site-chrome";
import { pageMetadata } from "../site";
export const metadata: Metadata = pageMetadata(
  "For Buyers",
  "Source consumer products for wholesale, retail, and online sales with CT Dynamics.",
  "buyers/",
);
export default function BuyersPage() {
  return (
    <>
      <PageHero
        eyebrow="For buyers"
        title="What are you looking to buy?"
        intro="We help retailers, wholesalers, and online sellers source products for their businesses."
        image="/media/category-electronics.png"
        imageAlt="Consumer electronics and accessories"
      />
      <section className="split-section section-shell">
        <div>
          <p className="eyebrow">Product sourcing</p>
          <h2>
            Find products
            <br />
            for your
            <br />
            <em>customers.</em>
          </h2>
        </div>
        <div className="long-copy">
          <p>
            You may have a specific product in mind or want to add something new
            to your range. Tell us what you sell and who buys from you, and
            we’ll help look for products and suppliers.
          </p>
          <p>
            We’ll check what’s available, discuss the quantities and timing you
            need, and help coordinate your order.
          </p>
          <Link className="text-link" href="/categories">
            Browse our categories <Arrow />
          </Link>
        </div>
      </section>
      <section className="numbered-section section-shell">
        <p className="eyebrow">Buying with CT Dynamics</p>
        <div className="numbered-grid">
          <article>
            <span className="row-number">01</span>
            <h3>A range of products</h3>
            <p>
              We work across beauty, home, electronics, pet, automotive, and
              other consumer product categories.
            </p>
          </article>
          <article>
            <span className="row-number">02</span>
            <h3>Someone to call</h3>
            <p>
              You’ll have a contact at CT Dynamics for product questions and
              order updates.
            </p>
          </article>
          <article>
            <span className="row-number">03</span>
            <h3>Help with orders</h3>
            <p>
              We help coordinate stock and shipping, and keep you informed about
              your delivery.
            </p>
          </article>
        </div>
      </section>
      <section className="image-editorial section-shell">
        <div>
          <h2>
            Tell us what
            <br />
            you need.
          </h2>
          <ul className="check-list">
            <li>Product categories or brands</li>
            <li>Where you sell</li>
            <li>How much you’d like to order</li>
            <li>When and where you need delivery</li>
          </ul>
          <Link className="text-link" href="/contact">
            Ask about sourcing <Arrow />
          </Link>
        </div>
        <Photo src="/media/category-home.png" alt="Consumer home products" />
      </section>
      <ContactBand title="Looking for a product?" />
    </>
  );
}
