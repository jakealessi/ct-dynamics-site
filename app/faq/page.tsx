import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, ContactBand, PageHero } from "../components/site-chrome";
import { pageMetadata } from "../site";
export const metadata: Metadata = pageMetadata(
  "FAQ",
  "Answers about inventory purchases, pricing, brand ownership, unauthorized sellers, and working with CT Dynamics.",
  "faq/",
);
const faqs = [
  {
    question: "What does CT Dynamics do?",
    answer:
      "We buy your product and sell it as your authorized partner, inside the pricing and channel rules you set. We protect the brand, build the pages, and report to you every month.",
  },
  {
    question: "How is this different from any other reseller?",
    answer:
      "We buy directly from you under an agreement. We follow your pricing and channel rules, improve the pages that carry your name, and monitor unauthorized sellers. You know who you’re working with and what we’re doing.",
  },
  {
    question: "Who sets the price?",
    answer:
      "We agree on your pricing policy before we start and follow it everywhere we sell. We also flag sellers who do not follow your policy.",
  },
  {
    question: "Do we keep control of our brand and our pages?",
    answer:
      "Yes. Your trademark, registrations, storefront, pages, and every piece of content we make stay yours. Your team approves changes before they go live.",
  },
  {
    question: "What happens to the sellers already on our listings?",
    answer:
      "We review them at the start, send notices on your behalf, and file reports where appropriate. Removal decisions and timing depend on the channel and the evidence. We keep you informed about what has been submitted and what has changed.",
  },
  {
    question: "Do you charge fees?",
    answer:
      "No fees, retainers, or revenue share. We make our margin between what we pay you and what the product sells for. Creator work is arranged at cost, with the brand paying the creator directly.",
  },
  {
    question: "Which products do you work with?",
    answer:
      "Candy, chocolate, snacks, confectionery, and specialty food, including products that need temperature control. We look at supplements and adjacent grocery products case by case.",
  },
  {
    question: "How do we start?",
    answer:
      "A twenty-minute call, followed by a written review of what we found. Then, if it fits, a first order.",
  },
];
export default function FAQPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Questions about working with us?" />
      <section className="faq-section section-shell">
        <div className="faq-intro">
          <h2>Have another question?</h2>
          <Link className="text-link" href="/contact">
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
      <ContactBand />
    </>
  );
}
