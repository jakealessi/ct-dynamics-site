import type { Metadata } from "next";
import { Arrow, PageHero } from "../components/site-chrome";
import { pageMetadata } from "../site";
export const metadata: Metadata = pageMetadata(
  "Contact",
  "Talk to CT Dynamics about brand building, marketing, content creation, distribution, sourcing, or fulfillment.",
  "contact/",
);
export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Tell us what you need." />
      <section className="contact-page section-shell">
        <div className="contact-details-panel">
          <h2>
            What do you
            <br />
            have in mind?
          </h2>
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
              <span>Your name *</span>
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              <span>Work email *</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
          </div>
          <div className="field-pair">
            <label>
              <span>Company or brand *</span>
              <input
                name="company"
                type="text"
                autoComplete="organization"
                required
              />
            </label>
            <label>
              <span>I’m interested in *</span>
              <select name="interest" defaultValue="" required>
                <option value="" disabled>
                  Select an option
                </option>
                <option>Brand building</option>
                <option>Marketing</option>
                <option>Content creation</option>
                <option>Distribution for my brand</option>
                <option>Sourcing products for my business</option>
                <option>Fulfillment coordination</option>
                <option>Something else</option>
              </select>
            </label>
          </div>
          <label>
            <span>Phone</span>
            <input name="phone" type="tel" autoComplete="tel" />
          </label>
          <label>
            <span>How can we help? *</span>
            <textarea name="message" rows={4} required />
          </label>
          <button className="button" type="submit">
            Write an email{" "}
            <span className="circle-arrow">
              <Arrow />
            </span>
          </button>
          <p className="form-note">
            Opens your email app with these details so you can review and send.
          </p>
        </form>
      </section>
    </>
  );
}
