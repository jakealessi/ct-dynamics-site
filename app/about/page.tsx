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
  "About",
  "Learn how CT Dynamics builds reliable, relationship-driven distribution and sourcing partnerships for consumer product brands.",
  "about/",
);

const values = [
  {
    title: "Clear communication",
    text: "Growth becomes difficult when information is fragmented. We keep the conversation direct, practical, and focused on what happens next.",
  },
  {
    title: "Reliable execution",
    text: "A promising opportunity only matters when supply and operations can support it consistently. We plan with that reality in mind.",
  },
  {
    title: "Long-term thinking",
    text: "The goal is not simply to place one order. It is to build a route to market that can earn the next one and the one after that.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About CT Dynamics"
        title="Built to make distribution more dependable."
        intro="CT Dynamics is a distribution and sourcing company focused on creating clearer paths between strong consumer products and the businesses ready to sell them."
        image="/media/warehouse-team.png"
        imageAlt="A distribution team working together in a warehouse"
      />

      <section className="story-section section-shell">
        <div>
          <p className="section-kicker">Who we are</p>
          <h2>A hands-on partner for the parts of growth that have to work.</h2>
        </div>
        <div className="long-copy">
          <p>
            We work with brands and business partners that value dependable
            supply, responsive support, and thoughtful market expansion. Our
            role is to make the route from product to purchase more coherent.
          </p>
          <p>
            That starts with understanding the product and its customer. From
            there, we help connect distribution opportunities, supplier
            relationships, and fulfillment coordination around a practical plan.
          </p>
          <p>
            What sets CT Dynamics apart is how we operate: with transparency,
            consistency, and a real commitment to long-term partnerships. We
            know communication gaps and unreliable supply can slow a good brand
            down. Our work is designed to remove that friction.
          </p>
          <Link className="underlined-link" href="/services">
            Explore our services <Arrow />
          </Link>
        </div>
      </section>

      <section className="values-section">
        <div className="section-shell">
          <p className="eyebrow">How we operate</p>
          <div className="value-grid">
            {values.map((value, index) => (
              <article key={value.title}>
                <span>0{index + 1}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="image-statement section-shell">
        <div className="image-statement-copy">
          <p className="eyebrow dark">Our point of view</p>
          <h2>Strong distribution should feel like an extension of your business.</h2>
          <p>
            The best partnerships create confidence on both sides: a brand knows
            how its product is represented, and its channel partners know they
            can count on consistent communication and follow-through.
          </p>
        </div>
        <img
          src={asset("/media/category-home.png")}
          alt="Consumer home products arranged for retail"
          loading="lazy"
        />
      </section>

      <ContactBand title="Let’s build a more dependable path to market." />
    </>
  );
}
