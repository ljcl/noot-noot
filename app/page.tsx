'use client';

import * as React from 'react';
import Script from 'next/script';
import Counter from '../components/Counter';
import Luke from '../components/Luke';
import useNoot from '../components/utils/useNoot';
import styles from './page.module.css';

const GoogleAnalytics = () => {
  if (!process.env.NEXT_PUBLIC_GA_ID) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
    </>
  );
};

export default function HomePage() {
  const [noots, handleNoot] = useNoot();

  return (
    <>
      <div
        className={styles.container}
        onClick={handleNoot}
        style={{ backgroundColor: '#4f9eff' }}
      >
        <GoogleAnalytics />
        <Counter noots={noots} />
        <Luke />
      </div>
    </>
  );
}
