import React from 'react';
import styles from './ButtonContainer.module.css';
import Button from '@/app/ui/Buttons/Button/Button';

interface ButtonContainerProps {
  onClick: () => void;
}

export default function ButtonContainer({ onClick }: ButtonContainerProps) {
  return (
    <div className={styles.wrapper}>
      <a href="https://github.com/yelucie/3d-home">
        <Button content="code" onClick={() => {}}>
          Check code
        </Button>
      </a>
      <Button content="play" onClick={onClick}>
        Play game
      </Button>
    </div>
  );
}
