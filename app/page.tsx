"use client"

import CloseButton from "./ui/CloseButton/CloseButton";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
;
  return (
    <main className="items-center">
      <CloseButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}/>
    </main>
  );
}
 