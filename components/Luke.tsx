/* eslint-disable react/jsx-no-target-blank */
import * as React from 'react';

function Luke() {
  return (
    <>
      <a href="https://lukeclark.com.au/" target="_blank">
        How odd.
      </a>
      <style jsx>{`
        a {
          right: 2px;
          bottom: 2px;
          position: absolute;
          text-transform: uppercase;
          font-family: monospace;
          text-decoration: none;
        }
        @media (max-width: 389px) {
          a {
            right: 2px;
            bottom: auto;
            top: 2px;
          }
        }
      `}</style>
    </>
  );
}

export default React.memo(Luke);
