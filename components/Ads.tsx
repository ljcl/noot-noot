import Head from 'next/head';
import * as React from 'react';

function Ads(props: {
  enabled: boolean;
  adsenseClient: string;
  adsenseAdSlot: string;
}) {
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);
  if (
    props.enabled &&
    props.adsenseAdSlot &&
    props.adsenseClient &&
    typeof window !== 'undefined'
  ) {
    return (
      <>
        <Head>
          <script
            data-ad-client={props.adsenseClient}
            type="text/javascript"
            async
            src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
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
            data-ad-client={props.adsenseClient}
            data-ad-slot={props.adsenseAdSlot}
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
