import assert from "node:assert/strict";
import { access, readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const output = path.resolve("out");
const routes = [
  "",
  "how-we-work",
  "brands",
  "about",
  "faq",
  "contact",
  "privacy",
];
const page = (route) =>
  readFile(path.join(output, route, "index.html"), "utf8");
const home = await page("");
const basePath = home.match(/href="([^"]*)\/how-we-work\/?"/)?.[1] ?? "";
const visibleMarkup = (html) =>
  html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
const localPath = (pathname) =>
  basePath && pathname.startsWith(basePath + "/")
    ? pathname.slice(basePath.length)
    : pathname;

for (const route of routes) {
  test(`/${route} exports an accessible, brand-focused page`, async () => {
    const html = await page(route);
    const markup = visibleMarkup(html);
    assert.match(html, /<title>[^<]*CT Dynamics[^<]*<\/title>/);
    assert.match(html, /name="description" content="[^"]+"/);
    assert.match(html, /rel="canonical"/);
    assert.equal((markup.match(/<h1(?:\s|>)/g) ?? []).length, 1);
    assert.match(markup, /<main id="main"/);
    assert.match(markup, /Skip to content/);
    assert.doesNotMatch(
      markup,
      /<video|<canvas|<iframe|data-example-testimonial|data-partner-slot|For buyers|Source with us|Brand building|Sourcing products/,
    );
    for (const image of markup.match(/<img\b[^>]*>/g) ?? []) {
      assert.match(image, /\balt=/);
      assert.match(image, /\bwidth=/);
      assert.match(image, /\bheight=/);
      assert.match(image, /\/media\/optimized\/[^" ]+\.webp/);
    }
  });
}

test("every internal page link, anchor, and image resolves in the static export", async () => {
  for (const route of routes) {
    const markup = visibleMarkup(await page(route));
    for (const match of markup.matchAll(
      /<(a|img)\b[^>]*\b(?:href|src)="([^"]+)"[^>]*>/g,
    )) {
      const url = new URL(
        match[2].replaceAll("&amp;", "&"),
        "https://example.test" + basePath + "/" + (route ? route + "/" : ""),
      );
      if (url.origin !== "https://example.test") continue;
      const relative = decodeURIComponent(localPath(url.pathname)).replace(
        /^\//,
        "",
      );
      if (match[1] === "img") {
        await access(path.join(output, relative));
      } else {
        const target = path.join(output, relative, "index.html");
        const targetHtml = await readFile(target, "utf8");
        if (url.hash)
          assert.ok(
            targetHtml.includes(
              `id="${decodeURIComponent(url.hash.slice(1))}"`,
            ),
            `${route}: missing ${url.hash}`,
          );
      }
    }
  }
});

test("removed buyer, category, and service pages are absent from export and sitemap", async () => {
  for (const route of ["buyers", "categories", "category", "services"]) {
    await assert.rejects(
      access(path.join(output, route)),
      `${route} is still exported`,
    );
  }
  const sitemap = await readFile(path.join(output, "sitemap.xml"), "utf8");
  assert.equal((sitemap.match(/<url>/g) ?? []).length, routes.length);
  assert.doesNotMatch(sitemap, /buyers|categor|services/);
  for (const route of routes.slice(1))
    assert.ok(sitemap.includes(`/${route}/`));
  assert.match(
    await readFile(path.join(output, "robots.txt"), "utf8"),
    /Sitemap: https:\/\/.+\/sitemap.xml/,
  );
});

test("home explains the authorized partnership and links to all four pillars", async () => {
  const markup = visibleMarkup(home);
  assert.match(
    markup,
    /We buy your product and sell it as your authorized partner/,
  );
  assert.match(markup, /Candy, snacks, confectionery and specialty food/);
  const details = await page("how-we-work");
  for (const id of [
    "buy-and-stock",
    "protect",
    "pages-and-content",
    "creators-and-content",
  ]) {
    assert.ok(
      markup.includes(`/how-we-work/#${id}`) ||
        markup.includes(`/how-we-work#${id}`),
    );
    assert.ok(details.includes(`id="${id}"`));
  }
  assert.doesNotMatch(
    markup,
    /Example testimonial|Stock portraits|reach buyers|in-house (?:team|studio)|retail placement/,
  );
});

test("contact uses honest direct email links and a discreet wholesale inquiry option", async () => {
  const html = visibleMarkup(await page("contact"));
  assert.doesNotMatch(
    html,
    /<form|tally\.so|formspree|type="submit"|Send message|one business day/i,
  );
  assert.match(
    html,
    /mailto:info@ctdynamics.co\?subject=Brand%20partnership%20inquiry/,
  );
  assert.match(html, /<details class="wholesale-inquiry" id="wholesale"/);
  assert.match(html, /mailto:info@ctdynamics.co\?subject=Wholesale%20inquiry/);
  assert.match(html, /href="tel:\+15185120089"/);
  assert.match(html, /privacy/);
});

test("social image, local fonts, and public media stay lightweight", async () => {
  const image = await readFile("public/media/social-card.png");
  assert.equal(image.readUInt32BE(16), 1200);
  assert.equal(image.readUInt32BE(20), 630);
  let total = 0;
  for (const name of await readdir("public/media/optimized")) {
    const size = (await stat(path.join("public/media/optimized", name))).size;
    assert.ok(size < 150_000, `${name} exceeds 150 KB`);
    total += size;
    assert.doesNotMatch(name, /category|example-/);
  }
  assert.ok(total < 500_000, `Media total ${total} bytes`);
  const css = await readFile("app/globals.css", "utf8");
  assert.match(css, /prefers-reduced-motion/);
  assert.doesNotMatch(
    css,
    /fonts\.googleapis|animation:[^;}]*infinite|scroll-behavior:\s*smooth/,
  );
  assert.match(home, /addressLocality\\?":\\?"Long Island/);
  assert.doesNotMatch(home, /googletagmanager|google-analytics|plausible\.io/);
});
