import Head from 'next/head';
import * as React from 'react';

function Ads() {
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);
  const adsenseAdSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT;
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  if (adsenseAdSlot && adsenseClient && typeof window !== 'undefined') {
    return (
      <>
        <Head>
          <script
            data-ad-client={adsenseClient}
            type="text/javascript"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
        </Head>
        <div>
          <ins
            className="adsbygoogle"
            style={{
              display: 'inline-block',
              width: 320,
              height: 100,
            }}
            data-ad-format="auto"
            data-ad-client={adsenseClient}
            data-ad-slot={adsenseAdSlot}
            data-full-width-responsive="true"
          ></ins>
        </div>
        <style jsx>{`
          div {
            left: 0;
            bottom: 0;
            position: absolute;
            height: 100px;
          }
          @media (max-width: 321px) {
            div {
              height: 50px;
            }
          }
        `}</style>
      </>
    );
  }
  return null;
}

export default React.memo(Ads);
