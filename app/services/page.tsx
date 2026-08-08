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
  "Services",
  "Explore CT Dynamics wholesale distribution, product sourcing, and fulfillment coordination services for consumer product brands.",
  "services/",
);

const services = [
  {
    number: "01",
    title: "Wholesale distribution",
    lead: "A focused route into the channels where your product belongs.",
    text: [
      "We help connect brands with wholesale, retail, and sales-channel opportunities that make sense for the product, the customer, and the business behind it.",
      "The goal is disciplined expansion—not distribution for its own sake. We look at fit, readiness, and the operational plan required to support the relationship over time.",
    ],
    image: "/media/category-beauty.png",
    alt: "Beauty and personal care products prepared for market",
  },
  {
    number: "02",
    title: "Product sourcing",
    lead: "Reliable supply starts with stronger relationships and clearer information.",
    text: [
      "Our sourcing work connects businesses with product and supplier opportunities that align with their needs. We focus on quality, communication, and a dependable path from opportunity to order.",
      "By staying close to the moving parts, we help reduce the gaps that can turn product demand into avoidable delays.",
    ],
    image: "/media/category-electronics.png",
    alt: "Consumer electronics products ready for distribution",
  },
  {
    number: "03",
    title: "Fulfillment coordination",
    lead: "Operational follow-through for the demand you worked to create.",
    text: [
      "We help coordinate inventory movement, order processing, and shipping so brands and channel partners have a clearer, more reliable operating rhythm.",
      "That continuity matters after launch. Consistent availability and responsive coordination help products maintain momentum in the market.",
    ],
    image: "/media/last-mile.png",
    alt: "A delivery van being loaded for fulfillment",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="The moving parts of growth, connected."
        intro="CT Dynamics brings distribution, sourcing, and fulfillment coordination into one practical route to market."
      />

      <section className="service-detail-list section-shell">
        {services.map((service) => (
          <article className="service-detail" key={service.number}>
            <div className="service-detail-image">
              <img src={asset(service.image)} alt={service.alt} loading="lazy" />
              <span>{service.number}</span>
            </div>
            <div className="service-detail-copy">
              <p className="section-kicker">{service.title}</p>
              <h2>{service.lead}</h2>
              {service.text.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <Link className="underlined-link" href="/contact">
                Talk about your needs <Arrow />
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="process-panel">
        <div className="section-shell">
          <p className="eyebrow">A practical process</p>
          <h2>Fit first. Execution next. Growth over time.</h2>
          <div className="process-grid">
            <article>
              <span>1</span>
              <h3>Understand</h3>
              <p>We learn the product, customer, current channels, and goals.</p>
            </article>
            <article>
              <span>2</span>
              <h3>Plan</h3>
              <p>We shape a route to market around fit, supply, and demand.</p>
            </article>
            <article>
              <span>3</span>
              <h3>Move</h3>
              <p>We coordinate the relationships and execution behind growth.</p>
            </article>
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
