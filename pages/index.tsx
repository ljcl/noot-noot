import * as React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Counter from '../components/Counter';
import Luke from '../components/Luke';
import Ads from '../components/Ads';

import useNoot from '../components/utils/useNoot';

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

const Index = () => {
  const [noots, handleNoot] = useNoot();

  return (
    <>
      <Head>
        <title>&#x1F427; Noot Noot!</title>
        <meta
          name="description"
          content="Toot my noot. Pingu noots on demand!"
        />
        <meta property="og:title" content="Noot Noot!" />
        <meta property="og:url" content="https://noot.space/" />
        <meta property="og:description" content="Noots on demand!" />
        <meta property="og:image" content="https://noot.space/noot.gif" />
        <meta property="twitter:site" content="@lukejclark" />
        <link rel="canonical" href="https://noot.space/" />
      </Head>
      <div
        className="container"
        onClick={handleNoot}
        style={{ backgroundColor: '#4f9eff' }}
      >
        <GoogleAnalytics />
        <Counter noots={noots} />
        <Luke />
        <Ads />
      </div>
      <style jsx>{`
        .container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('noot.gif') 50% 50% no-repeat;
          background-size: cover;
        }
      `}</style>
    </>
  );
};

export default Index;
