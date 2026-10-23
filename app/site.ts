import type { Metadata } from "next";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://jakealessi.github.io/ct-dynamics-site/";

export const siteName = "CT Dynamics";
export const socialImageUrl = new URL(
  "media/ct-dynamics-logo.png",
  siteUrl,
).toString();

export const defaultDescription =
  "CT Dynamics helps consumer brands with branding, marketing, content, and distribution, and helps buyers source products and coordinate orders.";

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
          width: 2000,
          height: 2000,
          alt: "CT Dynamics: Supplying What Moves You",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: documentTitle,
      description,
      images: [socialImageUrl],
    },
  };
}
