/* eslint-disable react/jsx-no-target-blank */
import * as React from 'react';
import styles from './Luke.module.css';

function Luke() {
  return (
    <a href="https://lukeclark.com.au/" target="_blank" className={styles.luke}>
      How odd.
    </a>
  );
}

export default React.memo(Luke);
