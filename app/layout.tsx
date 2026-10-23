import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "./components/site-chrome";
import {
  defaultDescription,
  logoUrl,
  siteName,
  siteUrl,
  socialImageUrl,
} from "./site";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CT Dynamics | Your brand’s authorized partner",
    template: "%s | CT Dynamics",
  },
  description: defaultDescription,
  icons: {
    icon: [
      { url: `${basePath}/favicon.svg`, type: "image/svg+xml" },
      { url: `${basePath}/favicon.png`, type: "image/png" },
    ],
    shortcut: `${basePath}/favicon.png`,
  },
  openGraph: {
    type: "website",
    siteName,
    images: [{ url: socialImageUrl, width: 1200, height: 630 }],
  },
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CT Dynamics",
  url: siteUrl,
  logo: logoUrl,
  email: "info@ctdynamics.co",
  telephone: "+1-518-512-0089",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Long Island",
    addressRegion: "NY",
    addressCountry: "US",
  },
  description: defaultDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="top">
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
      </body>
    </html>
  );
}
