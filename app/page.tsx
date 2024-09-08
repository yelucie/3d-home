'use client';

import { useState } from 'react';
import SplineContainer from './ui/SplineContainer/SplineContainer';
import CloseButton from './ui/CloseButton/CloseButton';
import SplineScene from './ui/SplineScene/SplineScene';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <main>
      <SplineContainer isOpen={isOpen}>
        <CloseButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        <SplineScene />
      </SplineContainer>
    </main>
  );
}
