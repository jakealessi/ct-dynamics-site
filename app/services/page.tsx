import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, ContactBand, PageHero, Photo } from "../components/site-chrome";
import { pageMetadata } from "../site";
import { services } from "../service-data";
export const metadata: Metadata = pageMetadata(
  "Services",
  "Brand building, marketing, content creation, distribution, sourcing, and fulfillment for consumer brands and buyers.",
  "services/",
);
export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Our services" title="How we can help your business." />
      <nav
        className="service-index section-shell"
        aria-label="Service navigation"
      >
        {services.map((service, index) => (
          <a key={service.id} href={`#${service.id}`}>
            <span className="row-number">0{index + 1}</span>
            <span>{service.title}</span>
            <Arrow down />
          </a>
        ))}
      </nav>
      <section className="service-detail-list section-shell">
        {services.map((service, index) => (
          <article className="service-detail" id={service.id} key={service.id}>
            <div className="service-detail-image">
              <Photo src={service.image} alt={service.imageAlt} />
            </div>
            <div className="service-detail-copy">
              <p className="eyebrow">
                0{index + 1} / {service.title}
              </p>
              <h2>{service.headline}</h2>
              <p>{service.description}</p>
              <ul>
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link className="text-link" href="/contact">
                Ask about {service.title.toLowerCase()} <Arrow />
              </Link>
            </div>
          </article>
        ))}
      </section>
      <ContactBand />
    </>
  );
}
