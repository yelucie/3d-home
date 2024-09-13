'use client';

import { useState } from 'react';
import styles from '@/app/page.module.css';
import SplineContainer from '@/app/ui/Spline/SplineContainer/SplineContainer';
import CloseButton from '@/app/ui/Spline/CloseButton/CloseButton';
import SplineScene from '@/app/ui/Spline/SplineScene/SplineScene';
import DescriptiveContainer from '@/app/ui/Description/DescriptiveContainer/DescriptiveContainer';
import DescriptiveText from '@/app/ui/Description/DescriptiveText/DescriptiveText';
import ButtonContainer from '@/app/ui/Buttons/ButtonContainer/ButtonContainer';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);

  return (
    <main>
      <div className={styles.content}>
        <div className={styles.description}>
          <DescriptiveContainer>
            <DescriptiveText />
          </DescriptiveContainer>
          <ButtonContainer onClick={open} />
        </div>
        <SplineContainer isOpen={isOpen}>
          <CloseButton onClick={() => setIsOpen(false)} isOpen={isOpen} />
          <SplineScene />
        </SplineContainer>
      </div>
    </main>
  );
}
