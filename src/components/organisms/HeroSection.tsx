import React, { useEffect, useState } from 'react';

const animatedWords = [
  'Enterprises',
  'Startups',
  'Venture Builders',
  'Consultants',
];

export const HeroSection: React.FC = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start the fade-in animation after a brief delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (letterIndex < animatedWords[wordIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayed(animatedWords[wordIndex].slice(0, letterIndex + 1));
        setLetterIndex(letterIndex + 1);
      }, 120);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setLetterIndex(0);
        setDisplayed('');
        setWordIndex((wordIndex + 1) % animatedWords.length);
      }, 1200);
      return () => clearTimeout(pause);
    }
  }, [letterIndex, wordIndex]);

  return (
    <main className="flex flex-col items-center justify-center w-full bg-white text-center px-4 sm:px-14 md:px-32 py-16 md:py-20 mt-2 md:mt-5">
      {/* Desktop */}
      <div className={`hidden md:block transition-all duration-1500 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-16'
      }`}>
        <h1 className="text-4xl md:text-6xl font-bold text-teal-950 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Product & GenAI Partners for
        </h1>
        <div className="flex justify-center items-baseline mb-8">
          <h2 className="text-4xl md:text-6xl font-bold text-teal-950" style={{ fontFamily: 'Montserrat, sans-serif' }}>the Top</h2>
          <div className="relative ml-8" style={{ minWidth: '300px' }}>
            <span className="invisible text-4xl md:text-6xl font-bold text-teal-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {animatedWords[wordIndex]}
            </span>
            <span className="absolute left-0 top-0 text-4xl md:text-6xl font-bold text-teal-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {displayed}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className={`block md:hidden w-full px-8 transition-all duration-1500 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-16'
      }`}>
        <h1 className="text-4xl font-bold text-teal-950 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Product & GenAI
        </h1>
        <h1 className="text-4xl font-bold text-teal-950 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Partners for the Top
        </h1>
        <div className="relative w-full flex justify-center mb-8">
          <span className="invisible text-4xl font-bold text-teal-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {animatedWords[wordIndex]}
          </span>
          <span className="absolute left-0 top-0 w-full h-full flex justify-center items-center text-4xl font-bold text-teal-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {displayed}
          </span>
        </div>
      </div>

      <div className={`transition-all duration-1500 ease-out delay-300 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-16'
      }`}>
        <p className="text-muted text-xl mt-8 mb-12 max-w-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Not just the bare-bone MVPs. Launch production-ready,
          <span className="hidden md:inline"><br /></span>
          <span className="inline md:hidden"> </span>
          compliant, secure products in 12 weeks
        </p>
      </div>
      
      <div className={`transition-all duration-1500 ease-out delay-500 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-16'
      }`}>
        <button className="bg-teal-800 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-teal-950 transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Talk to an expert
        </button>
      </div>
    </main>
  );
}; 