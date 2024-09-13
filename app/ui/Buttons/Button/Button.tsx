import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: () => void;
  content: 'code' | 'play';
}

export default function Button({ children, onClick, content }: ButtonProps) {
  const buttonType = content === 'code' ? styles.code : styles.play;

  return (
    <button
      type="button"
      className={`${styles.wrapper} ${buttonType}`}
      onClick={onClick}
    >
      <div className={`${styles.container} ${buttonType}`}>
        <div className={`${styles.circle} ${buttonType}`}>
          <div className={`${styles.mini} ${buttonType}`} />
        </div>
        {children}
      </div>
    </button>
  );
}
