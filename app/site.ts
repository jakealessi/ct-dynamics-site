import type { Metadata } from "next";
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://jakealessi.github.io/ct-dynamics-site/"
).replace(/\/?$/, "/");
export const siteName = "CT Dynamics";
export const socialImageUrl = new URL(
  "media/social-card.png",
  siteUrl,
).toString();
export const logoUrl = new URL(
  "media/optimized/ct-dynamics-logo.webp",
  siteUrl,
).toString();
export const defaultDescription =
  "CT Dynamics buys your product and sells it as your authorized partner, inside your rules. Your pricing policy followed, your pages built, your brand protected.";
export function pageMetadata(
  title: string,
  description: string,
  path = "",
): Metadata {
  const url = new URL(path, siteUrl).toString();
  const documentTitle = title.includes(siteName)
    ? title
    : `${title} | ${siteName}`;
  return {
    title: { absolute: documentTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName,
      title: documentTitle,
      description,
      images: [
        {
          url: socialImageUrl,
          width: 1200,
          height: 630,
          alt: "CT Dynamics. Your brand’s authorized partner. Supplying what moves you.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: documentTitle,
      description,
      images: [socialImageUrl],
    },
  };
}
