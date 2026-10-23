import type { Metadata } from "next";
import Link from "next/link";
import {
  Arrow,
  ContactBand,
  Photo,
  PillarVisual,
} from "./components/site-chrome";
import { brandOwnership, partnershipSteps, pillars } from "./partnership-data";
import { defaultDescription, pageMetadata } from "./site";

export const metadata: Metadata = pageMetadata(
  "CT Dynamics | Your brand’s authorized partner",
  defaultDescription,
);

export default function Home() {
  return (
    <>
      <section
        className="commerce-hero brand-partner-hero"
        aria-labelledby="home-title"
      >
        <div className="commerce-hero-topline">
          <p className="eyebrow">
            <span className="blue-dot" />
            Brand partner · Long Island, NY
          </p>
          <span>Supplying what moves you.</span>
        </div>
        <h1 id="home-title" className="commerce-hero-title">
          <span>Your brand,</span>
          <span className="hero-promise">
            protected <span>and growing.</span>
          </span>
        </h1>
        <p className="hero-intro">
          We buy your product and sell it as your authorized partner, inside
          your rules.
        </p>
        <div className="commerce-hero-actions">
          <Link className="button button-light" href="/how-we-work">
            How we work{" "}
            <span className="circle-arrow">
              <Arrow />
            </span>
          </Link>
          <Link className="hero-contact" href="/contact">
            Let’s talk <Arrow />
          </Link>
        </div>
        <div className="commerce-hero-base">
          <span>Candy, snacks, confectionery and specialty food.</span>
          <a href="#what-we-do" aria-label="Explore CT Dynamics">
            <span>Explore</span>
            <Arrow down />
          </a>
        </div>
      </section>
      <section className="brand-statement section-shell" id="what-we-do">
        <p className="eyebrow">What we do</p>
        <div className="brand-statement-grid">
          <h2>
            We take the channel
            <br />
            <em>off your plate.</em>
          </h2>
          <div>
            <p>
              You keep pricing, your pages, and the final say on everything that
              carries your name. We buy upfront, keep it in stock, follow your
              pricing policy, and monitor unauthorized sellers. One partner, one
              monthly report, no fees.
            </p>
            <Link className="text-link" href="/about">
              Get to know us <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <section className="creative-services section-shell" id="how-we-work">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">01 / How we work</p>
            <h2>
              Four things,
              <br />
              done properly.
            </h2>
          </div>
          <Link className="text-link" href="/how-we-work">
            How we work <Arrow />
          </Link>
        </div>
        <div className="pillars-grid">
          {pillars.map((pillar, index) => (
            <Link
              className="pillar-tile"
              key={pillar.id}
              href={`/how-we-work#${pillar.id}`}
            >
              <PillarVisual label={pillar.shortLabel} index={index} />
              <div className="pillar-tile-title">
                <h3>{pillar.homeTitle}</h3>
                <Arrow />
              </div>
              <p>{pillar.summary}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="commerce-section section-shell">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">02 / How it starts</p>
            <h2>
              Four steps,
              <br />
              no surprises.
            </h2>
          </div>
        </div>
        <div className="commerce-section-grid">
          <ol className="partnership-steps">
            {partnershipSteps.map((step, index) => (
              <li key={step.title}>
                <span className="row-number">0{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="commerce-section-image">
            <Photo
              src="/media/optimized/warehouse-team.webp"
              alt="An order being prepared for shipment"
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
              Have a product
              <br />
              people love?
            </h2>
            <p>
              Tell us what you make and where it sells today. We’ll tell you
              plainly what we see and whether we’re a fit.
            </p>
            <Link className="button" href="/contact">
              Let’s talk{" "}
              <span className="circle-arrow">
                <Arrow />
              </span>
            </Link>
          </article>
          <article>
            <span className="partnership-label">What stays yours</span>
            <h2>
              Your brand,
              <br />
              your rules.
            </h2>
            <p>{brandOwnership}</p>
          </article>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
