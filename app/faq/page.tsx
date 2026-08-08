import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, ContactBand, PageHero } from "../components/site-chrome";
import { pageMetadata } from "../site";

export const metadata: Metadata = pageMetadata(
  "FAQ",
  "Answers to common questions from consumer product brands considering CT Dynamics for distribution, sourcing, and fulfillment coordination.",
  "faq/",
);

const faqs = [
  {
    question: "What does CT Dynamics do?",
    answer:
      "CT Dynamics helps consumer product brands build practical routes to market through wholesale distribution, product sourcing, and fulfillment coordination.",
  },
  {
    question: "What types of brands do you work with?",
    answer:
      "Our focus is consumer products, including beauty and personal care, electronics, home and household, pet, and automotive categories. Fit depends on the product, its readiness, and the opportunity we can build together.",
  },
  {
    question: "Can you help us enter new sales channels?",
    answer:
      "That is a core part of our work. We evaluate wholesale, retail, and online sales opportunities based on the product, customer, positioning, and operational readiness behind the brand.",
  },
  {
    question: "Do you provide sourcing support?",
    answer:
      "Yes. We help connect businesses with product and supplier opportunities while keeping quality, reliability, and communication central to the process.",
  },
  {
    question: "How does fulfillment fit into the relationship?",
    answer:
      "We help coordinate the inventory movement, order processing, and shipping communication required to support distribution. The exact needs are discussed as part of the growth plan.",
  },
  {
    question: "What happens after we contact you?",
    answer:
      "We begin with a straightforward conversation about your product, current channels, goals, and operational readiness. If there is a strong fit, we outline practical next steps together.",
  },
];

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="Frequently asked questions"
        title="Clear answers before the first conversation."
        intro="A quick overview of how CT Dynamics works with brands and where we can add value."
      />

      <section className="faq-section section-shell">
        <div className="faq-intro">
          <p className="section-kicker">Good partnerships start with clarity</p>
          <h2>What brand owners usually want to know.</h2>
          <p>
            Have a question that is specific to your product or business?
            We&apos;re happy to talk it through directly.
          </p>
          <Link className="underlined-link" href="/contact">
            Ask us directly <Arrow />
          </Link>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>
                <span>{faq.question}</span>
                <span aria-hidden="true">+</span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <ContactBand eyebrow="Still have a question?" title="Let’s talk about it directly." />
    </>
  );
}
