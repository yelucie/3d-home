import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: () => void;
}

export default function Button({ children, onClick, ...props }: ButtonProps) {
  return (
    <button {...props} className={styles.wrapper} onClick={onClick}>
      <div className={styles.container}>
        <div className={styles.circle}>
          <div className={styles.mini} />
        </div>
        {children}
      </div>
    </button>
  );
}
