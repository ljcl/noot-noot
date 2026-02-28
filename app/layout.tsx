import { GoogleAnalytics } from "@next/third-parties/google";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "🐧 Noot Noot!",
  description: "Toot my noot. Pingu noots on demand!",
  openGraph: {
    title: "Noot Noot!",
    url: "https://noot.space/",
    description: "Noots on demand!",
    images: [
      {
        url: "https://noot.space/noot.gif",
        alt: "Noot Noot!",
      },
    ],
  },
  twitter: {
    site: "@lukejclark",
  },
  alternates: {
    canonical: "https://noot.space/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body>{children}</body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
