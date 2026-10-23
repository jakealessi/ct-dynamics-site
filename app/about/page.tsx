import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, ContactBand, PageHero } from "../components/site-chrome";
import { pageMetadata } from "../site";
export const metadata: Metadata = pageMetadata(
  "About",
  "CT Dynamics is run by Christian Corso and Tevin Dennison on Long Island, New York. We buy inventory and work as a brand’s authorized partner.",
  "about/",
);
const founders = [
  { name: "Christian Corso", initials: "CC" },
  { name: "Tevin Dennison", initials: "TD" },
];
export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About CT Dynamics"
        title={"Two owners. Long\u00a0Island. Our own money on the line."}
        intro="CT Dynamics is run by its two founders, Christian Corso and Tevin Dennison. We started it because the brands we loved were being sold badly online by people who had never met them."
      />
      <section className="numbered-section section-shell">
        <p className="eyebrow">How we work</p>
        <div className="numbered-grid">
          <article>
            <span className="row-number">01</span>
            <h3>Plain words</h3>
            <p>
              We tell you what we see, what we would do, and what we cannot do.
            </p>
          </article>
          <article>
            <span className="row-number">02</span>
            <h3>Skin in the game</h3>
            <p>
              We buy inventory. If it does not sell, that is our problem, not
              yours.
            </p>
          </article>
          <article>
            <span className="row-number">03</span>
            <h3>Long relationships</h3>
            <p>
              We’re here for the next reorder, the next season, the next
              product.
            </p>
          </article>
        </div>
      </section>
      <section className="founders-section section-shell">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">The owners</p>
            <h2>
              Let’s get to know
              <br />
              each other.
            </h2>
          </div>
          <Link className="text-link" href="/contact">
            Get in touch <Arrow />
          </Link>
        </div>
        <div className="founder-grid">
          {founders.map((founder) => (
            <article className="founder-card" key={founder.name}>
              <div className="founder-initials" aria-hidden="true">
                {founder.initials}
              </div>
              <div>
                <h3>{founder.name}</h3>
                <p>Co-Owner</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <ContactBand />
    </>
  );
}
