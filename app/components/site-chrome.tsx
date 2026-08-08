import Link from "next/link";
import { categories, legacyCategorySlugs } from "../category-data";

export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      ↗
    </span>
  );
}

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="CT Dynamics home">
      <span className="brand-symbol" aria-hidden="true">
        <img src={asset("/media/ct-dynamics-logo.png")} alt="" />
      </span>
      <span className="brand-name">CT Dynamics</span>
    </Link>
  );
}

const navigation = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "For Brands", href: "/brands" },
  { label: "Categories", href: "/categories" },
  { label: "FAQ", href: "/faq" },
];

const footerCategories = legacyCategorySlugs
  .map((slug) => categories.find((category) => category.slug === slug))
  .filter((category) => category !== undefined);

export function SiteHeader() {
  return (
    <>
      <div className="utility-bar">
        <p>Distribution, sourcing, and fulfillment for consumer brands</p>
        <div>
          <a href="tel:+15185120089">+1 (518) 512-0089</a>
          <a href="mailto:info@ctdynamics.co">info@ctdynamics.co</a>
        </div>
      </div>
      <header className="site-header">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="header-cta" href="/contact">
          Contact us <Arrow />
        </Link>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact">Contact us</Link>
          </nav>
        </details>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <Brand />
        <p>
          A clearer route from product readiness to market presence.
        </p>
      </div>
      <div className="footer-column">
        <p className="footer-label">Company</p>
        {navigation.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
      <div className="footer-column footer-categories">
        <p className="footer-label">Categories</p>
        {footerCategories.map((category) => (
          <Link href={`/category/${category.slug}`} key={category.slug}>
            {category.name}
          </Link>
        ))}
      </div>
      <div className="footer-column">
        <p className="footer-label">Start a conversation</p>
        <a href="mailto:info@ctdynamics.co">info@ctdynamics.co</a>
        <a href="tel:+15185120089">+1 (518) 512-0089</a>
        <Link href="/contact">Contact form</Link>
      </div>
      <div className="footer-base">
        <span>© 2026 CT Dynamics</span>
        <span>Supplying what moves you.</span>
      </div>
    </footer>
  );
}

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  imageAlt?: string;
};

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt = "",
}: PageHeroProps) {
  return (
    <section className={`page-hero${image ? " has-image" : ""}`}>
      <div className="page-hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
      {image ? (
        <div className="page-hero-image">
          <img src={asset(image)} alt={imageAlt} />
        </div>
      ) : null}
    </section>
  );
}

export function ContactBand({
  eyebrow = "Let’s talk about your next market",
  title = "Ready to move your brand forward?",
}: {
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="contact-band">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <Link className="button button-light" href="/contact">
        Start the conversation <Arrow />
      </Link>
    </section>
  );
}
