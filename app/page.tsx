const capabilities = [
  {
    number: "01",
    title: "Build the channel",
    description:
      "We connect brands with wholesale and retail opportunities that fit the product, the customer, and the stage of growth.",
  },
  {
    number: "02",
    title: "Keep supply moving",
    description:
      "From product sourcing to order coordination, we help remove the gaps that turn demand into delays.",
  },
  {
    number: "03",
    title: "Support the sell-through",
    description:
      "Consistent availability and thoughtful market placement help products earn a stronger, more durable presence.",
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
    title: "Understand the product",
    text: "We start with where you are now, who buys your product, and which channels make sense next.",
  },
  {
    number: "2",
    title: "Shape the route to market",
    text: "Together, we define a practical distribution approach built around supply, positioning, and real demand.",
  },
  {
    number: "3",
    title: "Move with consistency",
    text: "We coordinate the relationships and execution that keep your product available as the opportunity grows.",
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
          <a href="#approach">Approach</a>
          <a href="#categories">Categories</a>
          <a href="#process">How it works</a>
        </nav>
        <a className="header-cta" href="#contact">
          Talk distribution <Arrow />
        </a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#approach">Approach</a>
            <a href="#categories">Categories</a>
            <a href="#process">How it works</a>
            <a href="#contact">Talk distribution</a>
          </nav>
        </details>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow hero-reveal reveal-1">
            Distribution for consumer product brands
          </p>
          <h1 id="hero-title" className="hero-reveal reveal-2">
            Put your product in more of the <em>right places.</em>
          </h1>
          <p className="hero-intro hero-reveal reveal-3">
            CT Dynamics helps brands build reliable paths to market through
            focused distribution, sourcing, and fulfillment coordination.
          </p>
          <div className="hero-actions hero-reveal reveal-4">
            <a className="button button-blue" href="#contact">
              Expand your reach <Arrow />
            </a>
            <a className="text-link" href="#approach">
              See our approach <span aria-hidden="true">↓</span>
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
          <span>01 Distribution</span>
          <span>02 Sourcing</span>
          <span>03 Fulfillment</span>
        </div>
      </section>

      <section className="positioning section-shell" id="approach">
        <div className="section-kicker">
          <span className="kicker-rule" />
          The CT Dynamics difference
        </div>
        <div className="positioning-grid">
          <h2>Distribution should create demand—not just deliver boxes.</h2>
          <div className="positioning-copy">
            <p>
              Good products lose momentum when supply is inconsistent,
              communication is fragmented, or the route to market is unclear.
              We bring those pieces together.
            </p>
            <p>
              Our work is relationship-driven and hands-on: understand the
              product, find the right opportunities, and build a dependable path
              from your business to the businesses ready to sell it.
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
            <h2>Built for products people live with.</h2>
          </div>
          <p>
            From daily essentials to considered purchases, we help consumer
            brands find the channels where their products belong.
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
          <p className="eyebrow">A practical route to growth</p>
          <h2>From first conversation to repeatable movement.</h2>
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
        <p className="section-kicker">Supplying what moves you</p>
        <blockquote>
          The strongest distribution partnerships feel less like a handoff and
          more like an extension of your business.
        </blockquote>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-intro">
          <p className="eyebrow dark">Let&apos;s move your product forward</p>
          <h2>Where should your product go next?</h2>
          <p>
            Tell us what you sell, where you are today, and what growth looks
            like for your business. We&apos;ll start with an honest conversation
            about fit.
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
        <p>Distribution, sourcing, and fulfillment for consumer product brands.</p>
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
