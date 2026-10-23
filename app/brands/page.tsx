import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, ContactBand, PageHero } from "../components/site-chrome";
import { pageMetadata } from "../site";
export const metadata: Metadata = pageMetadata(
  "For brands",
  "We buy from food, candy, and confectionery brands and sell as their authorized partner, under their pricing and channel rules.",
  "brands/",
);
export default function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="For brands"
        title="Let’s talk about carrying it."
        intro="We work with a small number of food, candy, and confectionery brands, and we buy what we sell."
      />
      <section className="split-section section-shell">
        <div>
          <p className="eyebrow">Who this is for</p>
          <h2>
            A product people love,
            <em>and a channel you’d rather not run yourself.</em>
          </h2>
        </div>
        <div className="long-copy">
          <p>
            You might be a family brand with great retail distribution and a
            messy online picture. You might be a new brand that wants one
            authorized partner instead of twenty resellers.
          </p>
          <p>
            Either way, the question we answer first is whether we’re a fit, and
            we answer it in writing.
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
            <h3>One partner</h3>
            <p>
              One authorized partner inside your rules, with a clear view of
              what we sell and where.
            </p>
          </article>
          <article>
            <span className="row-number">02</span>
            <h3>Upfront orders</h3>
            <p>
              We buy, we stock, we reorder. No fees, no retainers, no revenue
              share.
            </p>
          </article>
          <article>
            <span className="row-number">03</span>
            <h3>Your control</h3>
            <p>Pricing, products, channels, and approvals stay with you.</p>
          </article>
        </div>
      </section>
      <section className="brand-checklist section-shell">
        <div>
          <p className="eyebrow">Start here</p>
          <h2>
            Tell us about
            <br />
            your brand.
          </h2>
        </div>
        <div>
          <ul className="check-list">
            <li>What you make</li>
            <li>Where it sells today</li>
            <li>Whether you have a pricing policy</li>
            <li>Who sells it online now, if you know</li>
            <li>What you would want from a partner</li>
          </ul>
          <Link className="text-link" href="/contact">
            Introduce your brand <Arrow />
          </Link>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
