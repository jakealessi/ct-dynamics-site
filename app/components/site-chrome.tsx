import Link from "next/link";
import { pillars } from "../partnership-data";

export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export function Arrow({ down = false }: { down?: boolean }) {
  return (
    <svg
      className={`arrow${down ? " arrow-down" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function Photo({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={asset(src)}
      srcSet={`${asset(src.replace(".webp", "-small.webp"))} 640w, ${asset(src)} 1440w`}
      sizes="(max-width: 640px) 100vw, 50vw"
      alt={alt}
      width="1440"
      height={src.includes("warehouse-team") ? 582 : 599}
      loading="lazy"
      decoding="async"
    />
  );
}

export function PillarVisual({
  label,
  index,
}: {
  label: string;
  index: number;
}) {
  return (
    <div
      className="pillar-visual"
      data-tone={index % 2 ? "blue" : "ink"}
      aria-hidden="true"
    >
      <span className="pillar-visual-number">0{index + 1}</span>
      <span className="pillar-visual-label">{label}</span>
    </div>
  );
}

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="CT Dynamics home">
      <img
        className="brand-mark"
        src={asset("/media/optimized/brand-mark.webp")}
        alt=""
        width="42"
        height="42"
      />
      <span>CT Dynamics</span>
    </Link>
  );
}

export const navigation = [
  { label: "How we work", href: "/how-we-work" },
  { label: "For brands", href: "/brands" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="header-cta" href="/contact">
          Let’s talk{" "}
          <span className="circle-arrow">
            <Arrow />
          </span>
        </Link>
        <details className="mobile-menu">
          <summary>
            <span>Menu</span>
            <span className="menu-lines" aria-hidden="true" />
          </summary>
          <nav aria-label="Mobile navigation">
            {[...navigation, { label: "Let’s talk", href: "/contact" }].map(
              (item) => (
                <a key={item.href} href={asset(item.href)}>
                  {item.label}
                  <Arrow />
                </a>
              ),
            )}
          </nav>
        </details>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-intro">
          <Brand />
          <p>Your brand’s authorized partner.</p>
        </div>
        <nav aria-label="Footer navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <nav className="footer-services" aria-label="How we work">
          {pillars.map((pillar) => (
            <Link key={pillar.id} href={`/how-we-work#${pillar.id}`}>
              {pillar.title}
            </Link>
          ))}
        </nav>
        <div className="footer-contact">
          <a href="mailto:info@ctdynamics.co">
            info@ctdynamics.co <Arrow />
          </a>
          <a href="tel:+15185120089">+1 (518) 512-0089</a>
          <p>Long Island, New York</p>
        </div>
      </div>
      <div className="footer-wordmark" aria-hidden="true">
        CT DYNAMICS
      </div>
      <div className="footer-base">
        <span>© {new Date().getFullYear()} CT Dynamics</span>
        <span>Supplying what moves you.</span>
        <Link href="/privacy">Privacy</Link>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="page-hero">
      <p className="eyebrow">
        <span className="blue-dot" />
        {eyebrow}
      </p>
      <h1>{title}</h1>
      {intro && <p className="page-intro">{intro}</p>}
    </section>
  );
}

export function ContactBand({ title = "Let’s talk." }: { title?: string }) {
  return (
    <section className="contact-band">
      <Link href="/contact" className="contact-band-link">
        <h2>{title}</h2>
        <span className="contact-band-arrow">
          <Arrow />
        </span>
      </Link>
    </section>
  );
}
