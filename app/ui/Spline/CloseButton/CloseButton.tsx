import React from 'react';
import Image from 'next/image';
import styles from './CloseButton.module.css';

import Close from '@/public/buttons/close-button.png';
import CloseIcon from '@/public/buttons/close-icon.png';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  isOpen: boolean;
}

export default function CloseButton({ onClick, isOpen }: ButtonProps) {
  return (
    <button type="button" className={styles.wrapper} onClick={onClick}>
      <Image className={styles.image} src={Close} alt="Close Button" />
      {isOpen && (
        <Image
          className={styles.icon}
          src={CloseIcon}
          alt="Close Icon"
          onClick={onClick}
        />
      )}
    </button>
  );
}
