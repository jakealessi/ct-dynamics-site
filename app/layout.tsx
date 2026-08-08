import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CT Dynamics | Distribution Built for Product Growth",
  description:
    "CT Dynamics helps consumer product brands expand their reach through focused distribution, sourcing, and fulfillment coordination.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
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
