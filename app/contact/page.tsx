import type { Metadata } from "next";
import { Arrow, PageHero } from "../components/site-chrome";
import { pageMetadata } from "../site";

export const metadata: Metadata = pageMetadata(
  "Contact",
  "Contact CT Dynamics to discuss distribution, sourcing, fulfillment, and channel growth for your consumer product brand.",
  "contact/",
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact CT Dynamics"
        title="Tell us where you want your product to go next."
        intro="Share what you sell, where the brand stands today, and what growth looks like for your business. We’ll start with an honest conversation about fit."
      />

      <section className="contact-page section-shell">
        <div className="contact-details-panel">
          <p className="section-kicker">Start a conversation</p>
          <h2>Let’s see what we can build together.</h2>
          <p>
            The more context you can share about your product, current channels,
            and goals, the more useful our first conversation will be.
          </p>
          <div className="contact-links">
            <span>Email</span>
            <a href="mailto:info@ctdynamics.co">info@ctdynamics.co</a>
            <span>Phone</span>
            <a href="tel:+15185120089">+1 (518) 512-0089</a>
          </div>
        </div>

        <form
          className="contact-form"
          action="mailto:info@ctdynamics.co"
          method="post"
          encType="text/plain"
        >
          <div className="field-pair">
            <label>
              <span>Your name</span>
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              <span>Work email</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
          </div>
          <div className="field-pair">
            <label>
              <span>Company / brand</span>
              <input name="company" type="text" autoComplete="organization" />
            </label>
            <label>
              <span>Phone</span>
              <input name="phone" type="tel" autoComplete="tel" />
            </label>
          </div>
          <label>
            <span>Tell us about your product and goals</span>
            <textarea name="message" rows={6} required />
          </label>
          <button className="button button-blue" type="submit">
            Send inquiry <Arrow />
          </button>
          <p className="form-note">Submitting opens your preferred email app.</p>
        </form>
      </section>
    </>
  );
}
