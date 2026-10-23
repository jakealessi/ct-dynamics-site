import type { Metadata } from "next";
import { PageHero } from "../components/site-chrome";
import { pageMetadata } from "../site";
export const metadata: Metadata = pageMetadata(
  "Privacy",
  "How CT Dynamics handles contact inquiries and personal information.",
  "privacy/",
);
export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy" title="Your information." />
      <section className="privacy-copy section-shell">
        <p>
          When you contact CT Dynamics, we receive the name, email address,
          company details, phone number, and message you choose to share. We use
          that information to respond to your inquiry and discuss our work with
          you. We do not sell your contact information. This website uses no
          analytics or tracking cookies. It is hosted on GitHub Pages, which may
          process technical information to serve the site. To ask about your
          information, email{" "}
          <a href="mailto:info@ctdynamics.co">info@ctdynamics.co</a>.
        </p>
      </section>
    </>
  );
}
