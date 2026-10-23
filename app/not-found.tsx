import Link from "next/link";
import { Arrow, PageHero } from "./components/site-chrome";

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404 / Page not found"
        title="That page isn’t here."
        intro="You can head back to the homepage or get in touch with us."
      />
      <section
        className="not-found-actions section-shell"
        aria-label="Where to go next"
      >
        <Link className="button" href="/">
          Back to home{" "}
          <span className="circle-arrow">
            <Arrow />
          </span>
        </Link>
        <Link className="text-link" href="/contact">
          Contact us <Arrow />
        </Link>
      </section>
    </>
  );
}
