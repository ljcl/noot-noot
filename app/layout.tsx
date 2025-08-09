import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: '🐧 Noot Noot!',
  description: 'Toot my noot. Pingu noots on demand!',
  openGraph: {
    title: 'Noot Noot!',
    url: 'https://noot.space/',
    description: 'Noots on demand!',
    images: [
      {
        url: 'https://noot.space/noot.gif',
        alt: 'Noot Noot!',
      },
    ],
  },
  twitter: {
    site: '@lukejclark',
  },
  alternates: {
    canonical: 'https://noot.space/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
