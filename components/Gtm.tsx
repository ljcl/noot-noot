import * as React from 'react';

function Gtm(props: { enabled: boolean; gtmProperty: string }) {
  if (props.enabled && props.gtmProperty) {
    return (
      <>
        <noscript>
          <iframe
            src={`//www.googletagmanager.com/ns.html?id=${props.gtmProperty}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${props.gtmProperty}');`
          }}
        />
      </>
    );
  }
  return <script>{`var dataLayer = []`}</script>;
}

export default React.memo(Gtm);
