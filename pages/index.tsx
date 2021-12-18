import * as React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Counter from '../components/Counter';
import Luke from '../components/Luke';
import Ads from '../components/Ads';

import useNoot from '../components/utils/useNoot';
import useLocalStorage from '../components/utils/useLocalStorage';

const Index = () => {
  const [noots, setNoots] = useLocalStorage('noots', 0);

  const handleNoot = useNoot(() => {
    // TODO: Delay by 600ms for dramatic incrementation
    setNoots(noots + 2);
    if (typeof window !== 'undefined') {
      window.dataLayer?.push({
        event: 'trackEvent',
        gtmCategory: 'action',
        gtmAction: 'noot',
        gtmValue: 1,
      });
    }
  });

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
        <meta property="fb:app_id" content="514427282096970" />
        <meta property="twitter:site" content="@lukejclark" />
        <link rel="canonical" href="https://noot.space/" />
      </Head>
      <div className="container" onClick={handleNoot}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=UA-17879409-4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-17879409-4');
        `}
        </Script>
        <Counter noots={noots} />
        <Luke />
        <Ads
          adsenseAdSlot="6278687346"
          adsenseClient="ca-pub-4248643620929479"
          enabled={process.env.NODE_ENV === 'production'}
        />
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
