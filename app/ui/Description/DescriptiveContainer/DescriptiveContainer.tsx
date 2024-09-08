import React from 'react';
import styles from './DescriptiveContainer.module.css';

interface DescriptiveContainerProps {
    children: React.ReactNode;
}

export default function DescriptiveContainer( { children }: DescriptiveContainerProps ) {
  return <div className={styles.wrapper}>{children}</div>;
}
