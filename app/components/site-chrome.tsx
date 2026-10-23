import Link from "next/link";
import { services } from "../service-data";

const imageSizes: Record<string, [number, number]> = {
  "category-beauty": [890, 1326],
  "category-home-craft": [890, 1326],
  "category-home": [890, 1326],
  "category-electronics": [890, 1326],
  "category-pet": [890, 1326],
  "category-automotive": [890, 1326],
  "category-home-kitchen": [328, 366],
  "category-health-household": [328, 366],
  "category-sports-outdoors": [328, 366],
  "category-toys-games": [328, 366],
  "warehouse-team": [1440, 582],
  "last-mile": [1440, 599],
};

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

export function Photo({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const image = src
    .replace("/media/", "/media/optimized/")
    .replace(/\.png$/, ".webp");
  const small = image.replace(".webp", "-small.webp");
  const key =
    src
      .split("/")
      .pop()
      ?.replace(/\.png$/, "") ?? "";
  const [width, height] = imageSizes[key] ?? [1440, 960];
  return (
    <img
      className={className}
      src={asset(image)}
      srcSet={
        width > 640
          ? `${asset(small)} 640w, ${asset(image)} ${width}w`
          : undefined
      }
      sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 60vw"
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
    />
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

const navigation = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "For brands", href: "/brands" },
  { label: "For buyers", href: "/buyers" },
  { label: "Categories", href: "/categories" },
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
            {navigation.map((item) => (
              <a key={item.href} href={asset(item.href)}>
                {item.label}
                <Arrow />
              </a>
            ))}
            <a href={asset("/contact")}>
              Let’s talk
              <Arrow />
            </a>
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
          <p>Marketing, content & distribution.</p>
        </div>
        <nav aria-label="Footer navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/faq">FAQ</Link>
        </nav>
        <nav className="footer-services" aria-label="Services">
          {services.map((service) => (
            <Link key={service.id} href={`/services#${service.id}`}>
              {service.title}
            </Link>
          ))}
        </nav>
        <div className="footer-contact">
          <a href="mailto:info@ctdynamics.co">
            info@ctdynamics.co <Arrow />
          </a>
          <a href="tel:+15185120089">+1 (518) 512-0089</a>
        </div>
      </div>
      <div className="footer-wordmark" aria-hidden="true">
        CT DYNAMICS
      </div>
      <div className="footer-base">
        <span>© {new Date().getFullYear()} CT Dynamics</span>
        <span>Supplying what moves you.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt = "",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className={`page-hero${image ? " has-image" : ""}`}>
      <p className="eyebrow">
        <span className="blue-dot" />
        {eyebrow}
      </p>
      <h1>{title}</h1>
      {intro && <p className="page-intro">{intro}</p>}
      {image && (
        <div className="page-hero-image">
          <Photo src={image} alt={imageAlt} priority />
        </div>
      )}
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

export function PartnerSpace() {
  return (
    <section className="partner-space section-shell" aria-label="Partner logos">
      <p className="eyebrow">Partners</p>
      <div className="partner-slots" aria-hidden="true">
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} data-partner-slot={i + 1} />
        ))}
      </div>
    </section>
  );
}

const exampleTestimonials = [
  {
    role: "Brand owner",
    image: "/media/optimized/example-brand.webp",
    quote:
      "We needed help getting into more stores. CT Dynamics handled the introductions and kept us updated on the orders, so we could focus on the products.",
  },
  {
    role: "Retail buyer",
    image: "/media/optimized/example-buyer.webp",
    quote:
      "I can call and find out what’s in stock, place an order, and know when to expect it. That makes my job easier.",
  },
];

export function Testimonials() {
  return (
    <section
      className="testimonials-section section-shell"
      id="testimonials"
      aria-label="Example testimonials with stock portraits"
    >
      <p className="eyebrow">Example testimonials · Stock portraits</p>
      <div className="testimonial-grid">
        {exampleTestimonials.map((testimonial) => (
          <figure
            className="testimonial"
            key={testimonial.role}
            data-example-testimonial
          >
            <span className="quotation-mark" aria-hidden="true">
              “
            </span>
            <blockquote>
              <p>{testimonial.quote}</p>
            </blockquote>
            <figcaption>
              <img
                src={asset(testimonial.image)}
                alt=""
                width="64"
                height="64"
                loading="lazy"
                decoding="async"
              />
              <div>
                <span className="testimonial-role">{testimonial.role}</span>
                <span className="testimonial-example">Example testimonial</span>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
      <div data-proof-slot="results" aria-hidden="true" />
    </section>
  );
}
