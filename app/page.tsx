const capabilities = [
  {
    number: "01",
    title: "Expand with intention",
    description:
      "We help brands identify wholesale, retail, and online sales channels that fit the product, the customer, and the next stage of growth.",
  },
  {
    number: "02",
    title: "Make growth operational",
    description:
      "Distribution, sourcing, and order coordination work together so new demand does not become a new bottleneck.",
  },
  {
    number: "03",
    title: "Keep momentum moving",
    description:
      "Dependable availability and thoughtful market placement give products the support they need after the first order.",
  },
];

const categories = [
  {
    label: "Beauty & Personal Care",
    image: "/media/category-beauty.png",
  },
  {
    label: "Electronics",
    image: "/media/category-electronics.png",
  },
  {
    label: "Home & Household",
    image: "/media/category-home.png",
  },
  {
    label: "Pet",
    image: "/media/category-pet.png",
  },
  {
    label: "Automotive",
    image: "/media/category-automotive.png",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Find the fit",
    text: "We learn the product, the customer, and the business behind it—then focus on the channels with a real reason to say yes.",
  },
  {
    number: "2",
    title: "Connect the moving parts",
    text: "We shape a practical route to market around distribution, supply, fulfillment, and the realities of your operation.",
  },
  {
    number: "3",
    title: "Scale what works",
    text: "We coordinate the relationships and execution that keep product moving as promising opportunities become repeatable growth.",
  },
];

const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="CT Dynamics home">
      <span className="brand-symbol" aria-hidden="true">
        <img src={asset("/media/ct-dynamics-logo.png")} alt="" />
      </span>
      <span className="brand-name">CT Dynamics</span>
    </a>
  );
}

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#approach">What we do</a>
          <a href="#categories">Markets</a>
          <a href="#process">Our process</a>
        </nav>
        <a className="header-cta" href="#contact">
          Plan your growth <Arrow />
        </a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#approach">What we do</a>
            <a href="#categories">Markets</a>
            <a href="#process">Our process</a>
            <a href="#contact">Plan your growth</a>
          </nav>
        </details>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow hero-reveal reveal-1">
            The commerce growth partner for product brands
          </p>
          <h1 id="hero-title" className="hero-reveal reveal-2">
            Turn more channels into <em>more growth.</em>
          </h1>
          <p className="hero-intro hero-reveal reveal-3">
            Expand into the right wholesale, retail, and online sales channels
            with one partner coordinating distribution, sourcing, and fulfillment.
          </p>
          <div className="hero-actions hero-reveal reveal-4">
            <a className="button button-blue" href="#contact">
              Build your growth plan <Arrow />
            </a>
            <a className="text-link" href="#approach">
              See what we connect <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-media hero-reveal reveal-3">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={asset("/media/warehouse-team.png")}
            aria-label="Products moving through a distribution facility"
          >
            <source src={asset("/media/distribution-hero.mp4")} type="video/mp4" />
          </video>
          <div className="media-note">
            <span>From product</span>
            <span className="media-note-line" />
            <span>to purchase</span>
          </div>
        </div>

        <div className="hero-index" aria-label="Core services">
          <span>01 Channel growth</span>
          <span>02 Supply coordination</span>
          <span>03 Fulfillment</span>
        </div>
      </section>

      <section className="positioning section-shell" id="approach">
        <div className="section-kicker">
          <span className="kicker-rule" />
          One partner. Connected execution.
        </div>
        <div className="positioning-grid">
          <h2>Your route to growth should work as one system.</h2>
          <div className="positioning-copy">
            <p>
              A new sales channel only matters if your product can stay
              available, move reliably, and earn the next order. We bring those
              pieces together from the start.
            </p>
            <p>
              CT Dynamics connects channel opportunity with practical
              execution—giving business owners one clear path from product
              readiness to market presence.
            </p>
          </div>
        </div>

        <div className="capability-list">
          {capabilities.map((capability) => (
            <article className="capability" key={capability.number}>
              <span className="capability-number">{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <Arrow />
            </article>
          ))}
        </div>
      </section>

      <section className="category-section" id="categories">
        <div className="section-shell category-heading">
          <div>
            <p className="eyebrow dark">Consumer categories</p>
            <h2>Built to grow the brands people choose every day.</h2>
          </div>
          <p>
            From daily essentials to considered purchases, we help consumer
            products reach the buyers and sales channels where they belong.
          </p>
        </div>

        <div className="category-rail" aria-label="Product categories">
          {categories.map((category, index) => (
            <figure className="category-card" key={category.label}>
              <img src={asset(category.image)} alt={`${category.label} products`} />
              <figcaption>
                <span className="category-count">0{index + 1}</span>
                <span>{category.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="process-visual">
          <img
            src={asset("/media/last-mile.png")}
            alt="A delivery van being loaded at a warehouse"
          />
          <p className="process-caption">
            Clear movement.<br />Clear communication.
          </p>
        </div>

        <div className="process-content">
          <p className="eyebrow">Growth, made actionable</p>
          <h2>See the opportunity. Build the route. Keep it moving.</h2>
          <div className="process-list">
            {processSteps.map((step) => (
              <article className="process-step" key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
          <a className="button button-light" href="#contact">
            Start the conversation <Arrow />
          </a>
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-mark" aria-hidden="true">CT</div>
        <p className="section-kicker">Built for connected commerce</p>
        <blockquote>
          More sales channels shouldn&apos;t mean more chaos. They should mean more
          ways for the right customer to find you.
        </blockquote>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-intro">
          <p className="eyebrow dark">Your next growth channel starts here</p>
          <h2>Ready to build a bigger market for your product?</h2>
          <p>
            Tell us what you sell, where it sells today, and what growth looks
            like for your business. We&apos;ll start with an honest conversation
            about the opportunity and the operational fit.
          </p>
          <div className="contact-details">
            <a href="mailto:info@ctdynamics.co">info@ctdynamics.co</a>
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
              <span>Your name</span>
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              <span>Work email</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
          </div>
          <label>
            <span>Company / brand</span>
            <input name="company" type="text" autoComplete="organization" />
          </label>
          <label>
            <span>Tell us about your product and goals</span>
            <textarea name="message" rows={5} required />
          </label>
          <button className="button button-blue" type="submit">
            Send inquiry <Arrow />
          </button>
          <p className="form-note">Submitting opens your preferred email app.</p>
        </form>
      </section>

      <footer className="site-footer">
        <Brand />
        <p>Connected channel growth for consumer product brands.</p>
        <div className="footer-links">
          <a href="mailto:info@ctdynamics.co">Email</a>
          <a href="tel:+15185120089">Call</a>
          <a href="#top">Back to top ↑</a>
        </div>
        <p className="copyright">© 2026 CT Dynamics</p>
      </footer>
    </main>
  );
}
