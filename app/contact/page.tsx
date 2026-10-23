import type { Metadata } from "next";
import { Arrow, PageHero } from "../components/site-chrome";
import { pageMetadata } from "../site";
export const metadata: Metadata = pageMetadata(
  "Contact",
  "Tell CT Dynamics about your brand. Contact Christian and Tevin about an authorized partnership, or send a wholesale inquiry.",
  "contact/",
);
export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Tell us what you make." />
      <section className="contact-page section-shell">
        <div className="contact-options">
          <div className="brand-inquiry">
            <h2>Introduce your brand.</h2>
            <p>
              Tell us what you make, where it sells today, and what you would
              want from an authorized partner.
            </p>
            <a
              className="button"
              href="mailto:info@ctdynamics.co?subject=Brand%20partnership%20inquiry"
            >
              Email us about your brand
              <span className="circle-arrow">
                <Arrow />
              </span>
            </a>
          </div>
          <details className="wholesale-inquiry" id="wholesale">
            <summary>
              <span>Wholesale inquiries</span>
              <span aria-hidden="true">+</span>
            </summary>
            <p>
              For a wholesale inquiry, send your company name, contact details,
              and a short note about what you have in mind.
            </p>
            <a
              className="text-link"
              href="mailto:info@ctdynamics.co?subject=Wholesale%20inquiry"
            >
              Email a wholesale inquiry
              <Arrow />
            </a>
          </details>
          <div className="other-inquiries">
            <p>Creator, vendor, or another question?</p>
            <a
              className="text-link"
              href="mailto:info@ctdynamics.co?subject=General%20inquiry"
            >
              Email us <Arrow />
            </a>
          </div>
        </div>
        <aside
          className="contact-details-panel"
          aria-labelledby="contact-details-title"
        >
          <h2 id="contact-details-title">Contact details</h2>
          <dl className="contact-links">
            <div>
              <dt>Email</dt>
              <dd>
                <a href="mailto:info@ctdynamics.co">info@ctdynamics.co</a>
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href="tel:+15185120089">+1 (518) 512-0089</a>
              </dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>Long Island, New York</dd>
            </div>
          </dl>
        </aside>
      </section>
    </>
  );
}
