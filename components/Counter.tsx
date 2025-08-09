import * as React from 'react';
import Tweet from './Tweet';
import Facebook from './Facebook';
import styles from './Counter.module.css';

export default function Counter(props: { noots: number }) {
  return (
    <div className={styles.counter}>
      <Tweet text={`${props.noots} Noots`} noots={props.noots} />{' '}
      <Facebook noots={props.noots} />
    </div>
  );
}
