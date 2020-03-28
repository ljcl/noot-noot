import * as React from 'react';
import Tweet from './Tweet';
import Facebook from './Facebook';

export default function Counter(props: { noots: number }) {
  return (
    <>
      <div>
        <Tweet text={`${props.noots} Noots`} noots={props.noots} />{' '}
        <Facebook noots={props.noots} />
      </div>
      <style jsx>{`
        div {
          position: absolute;
          -webkit-transform: translate(-50% -50%);
          transform: translate(-50% -50%);
          bottom: 42%;
          left: 38%;
        }
      `}</style>
    </>
  );
}
