"use client";

import { useState, useEffect } from "react";

interface TypeEffectProps {
  texts: string[];
  speed?: number;
  delay?: number;
}

export function TypeEffect({
  texts,
  speed = 500,
  delay = 5000,
}: TypeEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        const currentText = texts[currentIndex];

        if (!isDeleting) {
          // Digitando
          if (charIndex < currentText.length) {
            setDisplayText(currentText.substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            // Terminou de digitar, aguarda antes de começar a apagar
            setIsDeleting(true);
            setTimeout(() => {}, delay);
          }
        } else {
          // Apagando
          if (charIndex > 0) {
            setDisplayText(currentText.substring(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            // Terminou de apagar, passa para o próximo texto
            setIsDeleting(false);
            setCurrentIndex((currentIndex + 1) % texts.length);
          }
        }
      },
      isDeleting ? speed / 2 : speed,
    );

    return () => clearTimeout(timer);
  }, [charIndex, currentIndex, delay, isDeleting, speed, texts]);

  return <span>{displayText}</span>;
}
