import type { Metadata } from "next";
import Link from "next/link";
import {
  Arrow,
  ContactBand,
  PageHero,
  PillarVisual,
} from "../components/site-chrome";
import { brandOwnership, pillars } from "../partnership-data";
import { pageMetadata } from "../site";
export const metadata: Metadata = pageMetadata(
  "How we work",
  "We buy and stock your product, protect your brand, improve your pages, and coordinate creator content. Your rules, our operations.",
  "how-we-work/",
);
export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="Your rules. Our operations."
        intro="Here is what we do once a brand says yes, and what stays yours."
      />
      <nav
        className="service-index section-shell"
        aria-label="Partnership details"
      >
        {pillars.map((pillar, index) => (
          <a key={pillar.id} href={`#${pillar.id}`}>
            <span className="row-number">0{index + 1}</span>
            <span>{pillar.title}</span>
            <Arrow down />
          </a>
        ))}
      </nav>
      <section className="service-detail-list section-shell">
        {pillars.map((pillar, index) => (
          <article className="service-detail" id={pillar.id} key={pillar.id}>
            <PillarVisual label={pillar.shortLabel} index={index} />
            <div className="service-detail-copy">
              <p className="eyebrow">
                0{index + 1} / {pillar.title}
              </p>
              <h2>{pillar.headline}</h2>
              <p>{pillar.description}</p>
              <ul>
                {pillar.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link className="text-link" href="/contact">
                Ask about this <Arrow />
              </Link>
            </div>
          </article>
        ))}
      </section>
      <section className="ownership-section section-shell">
        <p className="eyebrow">What stays yours</p>
        <h2>Your brand, your rules.</h2>
        <p>{brandOwnership}</p>
      </section>
      <ContactBand />
    </>
  );
}
