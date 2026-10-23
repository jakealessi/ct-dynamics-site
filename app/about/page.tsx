import type { Metadata } from "next";
import { ContactBand, PageHero, Photo } from "../components/site-chrome";
import { pageMetadata } from "../site";
export const metadata: Metadata = pageMetadata(
  "About",
  "CT Dynamics helps brands build their identity, reach customers, and get products to market through creative, marketing, and distribution services.",
  "about/",
);
export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About CT Dynamics"
        title="A partner for brands and buyers."
        intro="We help with the creative work behind a brand and the practical work of buying, selling, and shipping products."
        image="/media/warehouse-team.png"
        imageAlt="A team working in a distribution warehouse"
      />
      <section className="split-section section-shell">
        <div>
          <p className="eyebrow">Our business</p>
          <h2>
            Helping you
            <br />
            build and sell.
          </h2>
        </div>
        <div className="long-copy">
          <p>
            We work with brands on branding, marketing, and content, and help
            them find wholesale, retail, and online buyers. We also help
            businesses source products and coordinate orders.
          </p>
          <p>
            Some projects need creative support. Others need help with supply
            and shipping. We put together the people each project calls for,
            with one contact at CT Dynamics to keep you informed.
          </p>
        </div>
      </section>
      <section className="numbered-section section-shell">
        <p className="eyebrow">How we work</p>
        <div className="numbered-grid">
          <article>
            <span className="row-number">01</span>
            <h3>Clear communication</h3>
            <p>
              We’ll tell you what we can do, what we need from you, and what
              happens next.
            </p>
          </article>
          <article>
            <span className="row-number">02</span>
            <h3>Hands-on support</h3>
            <p>
              We stay involved while the work is being done and keep you
              updated.
            </p>
          </article>
          <article>
            <span className="row-number">03</span>
            <h3>Ongoing relationships</h3>
            <p>We’re here for the next campaign or order, too.</p>
          </article>
        </div>
      </section>
      <section className="image-editorial section-shell">
        <div>
          <h2>
            Let’s get to
            <br />
            know each other.
          </h2>
          <p>
            Tell us about your business and what you’re trying to do. We’ll talk
            through where we can help.
          </p>
        </div>
        <Photo
          src="/media/last-mile.png"
          alt="Products being loaded into a delivery van"
        />
      </section>
      <ContactBand />
    </>
  );
}
