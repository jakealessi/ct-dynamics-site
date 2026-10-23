import type { Metadata } from "next";
import Link from "next/link";
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
        <div className="contact-details-panel">
          <h2>
            Let’s talk about
            <br />
            your brand.
          </h2>
          <div className="contact-links">
            <span>Email</span>
            <a href="mailto:info@ctdynamics.co">info@ctdynamics.co</a>
            <span>Phone</span>
            <a href="tel:+15185120089">+1 (518) 512-0089</a>
            <span>Location</span>
            <p>Long Island, New York</p>
          </div>
        </div>
        <div className="contact-options">
          <div className="brand-inquiry">
            <p className="eyebrow">Brand partnerships</p>
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
          <p className="form-note">
            Please read our <Link href="/privacy">privacy notice</Link> before
            sharing personal information.
          </p>
        </div>
      </section>
    </>
  );
}
