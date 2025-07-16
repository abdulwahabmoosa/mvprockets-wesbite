"use client"
import React, { useEffect, useState } from 'react';
import { Text } from '@/components/atoms/Text';
import { Button } from '@/components/atoms/Button';

const animatedWords = [
  'Enterprises',
  'Startups',
  'Venture Builders',
  'Consultants',
];

const highlightColor = 'text-[#E74177]';
const mainColor = 'text-[#3A0E6D]';

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');

  // Animate the letters of the current word
  useEffect(() => {
    if (letterIndex < animatedWords[wordIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayed(animatedWords[wordIndex].slice(0, letterIndex + 1));
        setLetterIndex(letterIndex + 1);
      }, 120);
      return () => clearTimeout(timeout);
    } else {
      // Pause before switching to next word
      const pause = setTimeout(() => {
        setLetterIndex(0);
        setDisplayed('');
        setWordIndex((wordIndex + 1) % animatedWords.length);
      }, 1200);
      return () => clearTimeout(pause);
    }
  }, [letterIndex, wordIndex]);

  return (
    <main className="flex flex-col items-center justify-center w-full bg-white text-center px-22 py-10 mt-5 ">
      {/* Desktop: Single line */}
      <Text
        as="h1"
        weight="bold"
        className="hidden md:block text-4xl md:text-5xl leading-tight mb-2 text-center"
        label={
          <span className={`text-4xl md:text-5xl ${mainColor}`}>
            Product & GenAI Partners for
          </span>
        }
      />

      {/* Mobile: Two lines */}
      <div className="block md:hidden w-full">
        <Text
          as="h1"
          weight="bold"
          className="text-3xl leading-tight mb-0 text-center"
          label={
            <span className={`text-3xl ${mainColor}`}>
              Product & GenAI
            </span>
          }
        />
        <Text
          as="h1"
          weight="bold"
          className="text-3xl leading-tight mb-0 text-center"
          label={
            <span className={`text-3xl ${mainColor}`}>
              Partners for the Top
            </span>
          }
        />
      </div>

      {/* Desktop: "the Top" + animated word */}
      <div className="hidden md:flex justify-center items-baseline w-full mb-6">
        <Text
          as="h2"
          weight="bold"
          className="text-4xl md:text-5xl leading-tight text-center"
          label={<span className={`text-4xl md:text-5xl ${mainColor}`}>the Top</span>}
        />
        {/* Animated word with width fix (as previously discussed) */}
        <div className="relative ml-4" style={{ minWidth: 0 }}>
          <span className={`invisible select-none pointer-events-none block text-4xl md:text-5xl font-bold ${highlightColor}`}>
            {animatedWords[wordIndex]}
          </span>
          <span className={`absolute left-0 top-0 w-full h-full flex justify-start items-center text-4xl md:text-5xl font-bold ${highlightColor}`}>
            {displayed}
          </span>
        </div>
      </div>

      {/* Mobile: Only animated word */}
      <div className="block md:hidden w-full mb-6">
        <div className="relative w-full flex justify-center">
          <span className={`invisible select-none pointer-events-none block text-3xl font-bold ${highlightColor}`}>
            {animatedWords[wordIndex]}
          </span>
          <span className={`absolute left-0 top-0 w-full h-full flex justify-center items-center text-3xl font-bold ${highlightColor}`}>
            {displayed}
          </span>
        </div>
      </div>

      <Text
        as="p"
        className="text-gray-500 text-xl mt-4 mb-10"
        label={
          <>
            Not just the bare-bone MVPs. Launch production-ready,
            {/* Desktop: line break, Mobile: space */}
            <span className="hidden md:inline"><br /></span>
            <span className="inline md:hidden"> </span>
            compliant, secure products in 12 weeks
          </>
        }
      />
      <Button
        label="Talk to an expert"
        backgroundColor="#E74177"
        primary
        size="medium"
      />
    </main>
  );
}