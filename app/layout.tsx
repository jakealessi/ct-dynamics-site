import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = "https://jakealessi.github.io/ct-dynamics-site/";
const socialImageUrl = `${siteUrl}media/ct-dynamics-logo.png`;

const title = "CT Dynamics | Turn More Channels Into More Growth";
const description =
  "CT Dynamics helps consumer product brands grow across wholesale, retail, and online sales channels through connected distribution, sourcing, and fulfillment.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "CT Dynamics",
    title,
    description,
    images: [
      {
        url: socialImageUrl,
        width: 2000,
        height: 2000,
        alt: "CT Dynamics — Supplying What Moves You",
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [socialImageUrl],
  },
  icons: {
    icon: `${basePath}/favicon.png`,
    shortcut: `${basePath}/favicon.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
