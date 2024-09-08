import React from 'react';
import styles from './SplineContainer.module.css';

interface SplineSceneProps {
  children: React.ReactNode;
  isOpen: boolean;
}

export default function SplineContainer({
  children,
  isOpen,
}: SplineSceneProps) {
  const wrapperClass = isOpen
    ? `${styles.wrapper} ${styles.open}`
    : `${styles.wrapper}`;
  return <div className={wrapperClass}>{children}</div>;
}
