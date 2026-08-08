import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "./components/site-chrome";
import { defaultDescription, siteName, siteUrl, socialImageUrl } from "./site";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CT Dynamics | Distribution Built for Brand Growth",
    template: "%s | CT Dynamics",
  },
  description: defaultDescription,
  icons: {
    icon: `${basePath}/favicon.png`,
    shortcut: `${basePath}/favicon.png`,
  },
  openGraph: {
    type: "website",
    siteName,
    images: [{ url: socialImageUrl, width: 2000, height: 2000 }],
  },
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CT Dynamics",
  url: siteUrl,
  logo: socialImageUrl,
  email: "info@ctdynamics.co",
  telephone: "+1-518-512-0089",
  description: defaultDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
      </body>
    </html>
  );
}
