'use client';

import { useState } from 'react';
import SplineContainer from '@/app/ui/Spline/SplineContainer/SplineContainer';
import CloseButton from '@/app/ui/Spline/CloseButton/CloseButton';
import SplineScene from '@/app/ui/Spline/SplineScene/SplineScene';
import DescriptiveContainer from '@/app/ui/Description/DescriptiveContainer/DescriptiveContainer';
import DescriptiveText from '@/app/ui/Description/DescriptiveText/DescriptiveText';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <main>
      <DescriptiveContainer>
        <DescriptiveText />
      </DescriptiveContainer>
      <SplineContainer isOpen={isOpen}>
        <CloseButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        <SplineScene />
      </SplineContainer>
    </main>
  );
}
