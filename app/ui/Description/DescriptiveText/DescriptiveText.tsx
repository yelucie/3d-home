import React from 'react';
import styles from './DescriptiveText.module.css';

export default function DescriptiveText() {
  return (
    <div className={styles.wrapper}>
      <h2>Step into this Cozy 3D Home</h2>
      <p>
        Welcome to your immersive 3D home!
        Feel free to explore every corner, interact with various items,
        and even customize the ambiance by turning the lights on and off.
      </p>
    </div>
  );
}
