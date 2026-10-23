import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, ContactBand, PageHero } from "../components/site-chrome";
import { pageMetadata } from "../site";
export const metadata: Metadata = pageMetadata(
  "FAQ",
  "Common questions about working with CT Dynamics as a brand or buyer.",
  "faq/",
);
const faqs = [
  {
    question: "What does CT Dynamics do?",
    answer:
      "We help brands with branding, marketing, content, and distribution. We also help businesses source products and coordinate stock, orders, and shipping.",
  },
  {
    question: "Do you work with brands and buyers?",
    answer:
      "Yes. We work with brands that want help marketing and selling their products, and with retailers, wholesalers, and online sellers looking for stock.",
  },
  {
    question: "Can you help with marketing and content?",
    answer:
      "Yes. We can help plan campaigns and create copy, photography, and video. We’ll agree on what you need and coordinate the people and production involved.",
  },
  {
    question: "What does brand building include?",
    answer:
      "We help you decide who you want to reach, what makes your products different, and how your brand should look and sound. That can be for a new brand or one you already have.",
  },
  {
    question: "Which categories do you cover?",
    answer:
      "Beauty and personal care, home and kitchen, health and household, craft, sports and outdoors, toys and games, electronics, pet, and automotive.",
  },
  {
    question: "Can you help me source a specific product?",
    answer:
      "Tell us which product you need, where you sell, how much you’d like to buy, and when you need it. We’ll look into availability and let you know how we can help.",
  },
  {
    question: "How does fulfillment work?",
    answer:
      "We help coordinate stock, process orders, and arrange shipping. We’ll talk through your products and order requirements to work out the support you need.",
  },
  {
    question: "How do we get started?",
    answer:
      "Email or call us, or use the form on our contact page to draft an email. Tell us about your business and where you need help.",
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
