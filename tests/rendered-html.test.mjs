import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import test from "node:test";

const { default: worker } = await import("../dist/server/index.js");
async function render(path = "/") {
  let url = new URL(path, "http://localhost");
  let response;
  for (let redirects = 0; redirects < 3; redirects++) {
    response = await worker.fetch(
      new Request(url, { headers: { accept: "text/html" } }),
      {
        ASSETS: {
          fetch: async () => new Response("Not found", { status: 404 }),
        },
      },
      { waitUntil() {}, passThroughOnException() {} },
    );
    if (![301, 302, 307, 308].includes(response.status)) break;
    url = new URL(response.headers.get("location"), url);
    assert.equal(url.origin, "http://localhost");
  }
  return { response, html: await response.text() };
}

const routes = [
  "/",
  "/about",
  "/services",
  "/brands",
  "/buyers",
  "/categories",
  "/faq",
  "/contact",
];
for (const path of routes) {
  test(`${path} renders a complete, accessible page`, async () => {
    const { response, html } = await render(path);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html/);
    assert.match(html, /<title>[^<]*CT Dynamics[^<]*<\/title>/);
    assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1);
    assert.match(html, /<main id="main"/);
    assert.match(html, /Skip to content/);
    assert.match(html, /href="\/buyers"/);
    assert.doesNotMatch(
      html,
      /<video|<canvas|codex-preview|Your site is taking shape/,
    );
    for (const tag of html.match(/<img\b[^>]*>/g) ?? []) {
      assert.match(tag, /\balt=/);
      assert.match(tag, /\/media\/optimized\/[^" ]+\.webp/);
    }
  });
}

test("all category pages and sitemap remain available", async () => {
  const slugs = [
    "beauty-and-personal-care",
    "home-craft-and-households",
    "home-and-kitchen",
    "health-and-household",
    "sports-and-outdoors",
    "toys-and-games",
    "electronics",
    "pet",
    "automotive",
  ];
  for (const slug of slugs) {
    const { response, html } = await render(`/category/${slug}`);
    assert.equal(response.status, 200, slug);
    assert.match(html, /Discuss this category/);
    assert.match(html, /href="\/contact"/);
  }
  const { response, html } = await render("/sitemap.xml");
  assert.equal(response.status, 200);
  assert.match(html, /buyers\//);
  for (const slug of slugs) assert.ok(html.includes(`category/${slug}/`));
  const robots = await render("/robots.txt");
  assert.equal(robots.response.status, 200);
  assert.match(robots.html, /Sitemap: https:\/\/.+\/sitemap.xml/);
  const missing = await render("/category/not-a-category");
  assert.equal(missing.response.status, 404);
});

test("both audiences have contact paths and illustrative testimonials are clearly labeled", async () => {
  const { html } = await render();
  assert.match(html, /Grow with us/);
  assert.match(html, /Source with us/);
  assert.equal((html.match(/data-partner-slot=/g) ?? []).length, 5);
  assert.match(html, /Example testimonials · Stock portraits/);
  assert.equal((html.match(/data-example-testimonial=/g) ?? []).length, 2);
  assert.equal((html.match(/>Example testimonial</g) ?? []).length, 2);
  assert.match(html, /Brand owner/);
  assert.match(html, /Retail buyer/);
  assert.match(html, /data-proof-slot="results"/);
  assert.doesNotMatch(html, /data-proof-slot="results"[^>]*>[^<]+/);
  assert.match(html, /loading="lazy"/);
  assert.match(html, /srcSet=/i);
});

test("contact form validates inputs and clearly hands off to email", async () => {
  const { html } = await render("/contact");
  assert.match(html, /action="mailto:info@ctdynamics.co"/);
  assert.match(html, /type="email"[^>]*required/);
  assert.match(html, /name="interest"[^>]*required/);
  assert.match(html, /Distribution for my brand/);
  assert.match(html, /Sourcing products for my business/);
  assert.match(html, /<option>Brand building<\/option>/);
  assert.match(html, /<option>Marketing<\/option>/);
  assert.match(html, /<option>Content creation<\/option>/);
  assert.match(html, /Opens your email app/);
});

test("all six homepage services lead to complete service sections", async () => {
  const home = await render();
  const homeMain = home.html.match(/<main\b[^>]*>[\s\S]*?<\/main>/)?.[0] ?? "";
  const detail = await render("/services");
  for (const id of [
    "brand-building",
    "marketing",
    "content-creation",
    "distribution",
    "sourcing",
    "fulfillment",
  ]) {
    assert.ok(
      homeMain.includes(`href="/services#${id}"`),
      `Missing homepage link: ${id}`,
    );
    assert.ok(
      detail.html.includes(`id="${id}"`),
      `Missing service section: ${id}`,
    );
    assert.ok(
      detail.html.includes(`href="#${id}"`),
      `Missing service index link: ${id}`,
    );
  }
  assert.doesNotMatch(
    home.html + detail.html,
    /in-house (?:studio|team)|our (?:studios|global offices)/i,
  );
});

test("shipping images stay within a small transfer budget", async () => {
  const dir = new URL("../public/media/optimized/", import.meta.url);
  let total = 0;
  for (const name of await readdir(dir)) {
    const size = (await stat(new URL(name, dir))).size;
    assert.ok(size < 150_000, `${name} exceeds 150 KB`);
    total += size;
  }
  assert.ok(total < 1_500_000, `Optimized images total ${total} bytes`);
  const css = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );
  assert.match(css, /prefers-reduced-motion/);
  assert.doesNotMatch(
    css,
    /fonts\.googleapis|animation:[^;}]*infinite|scroll-behavior:\s*smooth/,
  );
});
