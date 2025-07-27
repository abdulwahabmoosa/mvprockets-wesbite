"use client"
import React, { useState, useRef, useEffect } from 'react';

const brandLogos = [
  '/brands/streamalive.svg',
  '/brands/nirogstreet.svg',
  '/brands/jiraaf.svg',
  '/brands/hafla.svg',
  '/brands/apollotyres.svg',
  '/brands/alaan.svg',
  '/brands/bimaplan.svg',
  '/brands/deloitte.svg',
  '/brands/ansr.svg',
  '/brands/drreddys.svg',
  '/brands/livspace.svg',
  '/brands/arisinfra.svg',
];

const investorLogos = [
  { src: '/investors/Accel.svg', alt: 'Accel' },
  { src: '/investors/Ycombinator.svg', alt: 'Y Combinator' },
  { src: '/investors/jungle.svg', alt: 'Jungle' },
  { src: '/investors/trifecta.svg', alt: 'Trifecta' },
  { src: '/investors/GFC.svg', alt: 'GFC' },
  { src: '/investors/BVP.svg', alt: 'Bessemer Venture Partners' },
];

interface TrustedProps {
  variant?: 'home' | 'about' | 'services';
}

export const Trusted = ({ variant = 'home' }: TrustedProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [transition, setTransition] = useState(true);

  // Responsive logic
  useEffect(() => {
    const updateMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    updateMobile();
    window.addEventListener('resize', updateMobile);
    return () => window.removeEventListener('resize', updateMobile);
  }, []);

  const itemsToShow = isMobile ? 1 : 4;
  const slideWidth = isMobile ? 180 : 200; // px
  const totalItems = brandLogos.length;

  // Clone items for infinite loop
  const clonesBefore = brandLogos.slice(-itemsToShow);
  const clonesAfter = brandLogos.slice(0, itemsToShow);
  const carouselItems = [...clonesBefore, ...brandLogos, ...clonesAfter];
  const startIndex = itemsToShow; // where the real items start

  // Set initial index to first real item
  useEffect(() => {
    setCurrentIndex(startIndex);
    setTransition(false);
    // eslint-disable-next-line
  }, [isMobile]);

  // Handle transition end for infinite loop
  const handleTransitionEnd = () => {
    let idx = currentIndex;
    if (currentIndex >= totalItems + startIndex) {
      // Jump to real first
      idx = startIndex;
      setTransition(false);
      setCurrentIndex(idx);
    } else if (currentIndex < startIndex) {
      // Jump to real last
      idx = totalItems + startIndex - 1;
      setTransition(false);
      setCurrentIndex(idx);
    }
  };

  // Re-enable transition after jump
  useEffect(() => {
    if (!transition) {
      // Wait for the DOM to update before re-enabling transition
      const id = setTimeout(() => setTransition(true), 20);
      return () => clearTimeout(id);
    }
  }, [transition]);

  const goLeft = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentIndex((prev) => prev - 1);
    setTimeout(() => setIsSliding(false), 500);
  };

  const goRight = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentIndex((prev) => prev + 1);
    setTimeout(() => setIsSliding(false), 500);
  };

  // Calculate the total width of the carousel
  const containerWidth = slideWidth * itemsToShow;
  const trackWidth = carouselItems.length * slideWidth;
  const translateX = -(currentIndex * slideWidth);

  useEffect(() => {
    const interval = setInterval(() => {
      goRight();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Variant-specific content
  const getVariantContent = () => {
    switch (variant) {
      case 'about':
        return {
          smallHeader: 'LEADING BRANDS',
          bigHeader: 'Our Clients',
          copy: "We've helped over 100 businesses kick start their journey. And they love working with us!",
          bgColor: 'bg-[#FCFCFC]',
          carouselContainerStyle: ''
        };
      case 'services':
        return {
          smallHeader: 'TRUSTED BY',
          bigHeader: 'Leading Brands',
          copy: "We've helped over 100+ businesses go to the market with amazing products we helped them build. And everytime, our clients, and the market just loved it!",
          bgColor: 'bg-[#FCF3F6]',
          carouselContainerStyle: 'bg-white rounded-lg border border-[#E74177]/20 p-4'
        };
      default: // home
        return {
          smallHeader: 'TRUSTED BY',
          bigHeader: 'Leading Brands',
          copy: "We've helped over 100+ businesses go to the market with amazing products we helped them build. And everytime, our clients, and the market just loved it!",
          bgColor: 'bg-[#FCFCFC]',
          carouselContainerStyle: ''
        };
    }
  };

  const content = getVariantContent();

  return (
    <section className={`w-full py-12 px-2 md:px-0 ${content.bgColor}`}>
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="text-center mb-8">
          <div className="text-[#E74177] text-base md:text-2xl font-semibold tracking-widest mb-2" style={{ letterSpacing: 2 }}>{content.smallHeader}</div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#3A0E6D] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{content.bigHeader}</h2>
          {variant !== 'home' && (
            <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">{content.copy}</p>
          )}
        </div>
        {/* Brand Logos Carousel */}
        <div className="relative w-full flex items-center justify-center mb-8">
          {/* Left Arrow */}
          <button
            className="absolute left-0 md:-left-16 z-20 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-[#FCE4EC] transition-colors disabled:opacity-40"
            onClick={goLeft}
            aria-label="Previous"
            disabled={isSliding}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#E74177" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          {/* Carousel Container */}
          <div
            className="overflow-hidden mx-16 md:mx-20"
            style={{ width: isMobile ? 180 : 800 }}
          >
            <div
              className="flex"
              style={{
                transition: transition ? 'transform 0.5s cubic-bezier(0.4,0,0.2,1)' : 'none',
                transform: `translateX(${translateX}px)`,
                width: trackWidth,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {carouselItems.map((src, idx) => (
                <div
                  key={`${src}-${idx}`}
                  style={{
                    width: slideWidth,
                    flex: `0 0 ${slideWidth}px`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  className={`${!isMobile ? 'px-4' : ''}`}
                >
                  <div className={`${content.carouselContainerStyle}`}>
                    <img
                      src={src}
                      alt="Brand logo"
                      className="h-24 md:h-32 w-auto object-contain max-w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right Arrow */}
          <button
            className="absolute right-0 md:-right-16 z-20 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-[#FCE4EC] transition-colors disabled:opacity-40"
            onClick={goRight}
            aria-label="Next"
            disabled={isSliding}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#E74177" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
        <hr className="w-full border-t border-gray-200 my-8" />
        <div className="text-center mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-[#3A0E6D] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Some of the best investors have backed our startups/clients
          </h3>
        </div>
        {/* Investors grid: 2x3 on mobile, 1x6 on desktop */}
        <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-6 md:grid-rows-1 gap-x-10 gap-y-8 w-full max-w-md md:max-w-5xl mx-auto">
          {investorLogos.map((inv) => (
            <div key={inv.alt} className="flex items-center justify-center">
              <img
                src={inv.src}
                alt={inv.alt}
                className="h-20 w-auto object-contain"
                style={{ maxHeight: 80 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trusted;