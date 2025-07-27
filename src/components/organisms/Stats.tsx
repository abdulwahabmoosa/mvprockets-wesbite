"use client"
import React, { useState, useEffect } from 'react';

const stats = [
  { number: 45, label: 'Products Built' },
  { number: 140, label: 'Growing Team' },
  { number: 5, label: 'Countries & Expanding' },
];

export const Stats: React.FC = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState([0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateNumbers();
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateNumbers = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setAnimatedNumbers(
        stats.map((stat) => Math.floor(stat.number * progress))
      );

      if (currentStep >= steps) {
        clearInterval(interval);
        setAnimatedNumbers(stats.map(stat => stat.number));
      }
    }, stepDuration);
  };

  return (
    <section 
      id="stats-section"
      className="w-full bg-[#3A0E6D] py-8 md:py-6"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-4">
        {/* Desktop: Horizontal Layout */}
        <div className="hidden md:flex items-center justify-center">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="text-left px-8">
                <div className="flex items-center justify-start gap-6">
                  <div
                    className="text-5xl font-bold text-white"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {animatedNumbers[index]}+
                  </div>
                  <div
                    className="text-2xl font-bold text-white/90 leading-tight whitespace-nowrap"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {stat.label === 'Products Built' && (
                      <>Products<br />Built</>
                    )}
                    {stat.label === 'Growing Team' && (
                      <>Growing<br />Team</>
                    )}
                    {stat.label === 'Countries & Expanding' && (
                      <>Countries &<br />Expanding</>
                    )}
                  </div>
                </div>
              </div>

              {/* Separator only between items */}
              {index < stats.length - 1 && (
                <div
                  className="w-px h-20 bg-white/40 rounded-full mx-6"
                  aria-hidden="true"
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile: Vertical Layout */}
        <div className="md:hidden space-y-2">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className="text-3xl font-bold text-white mb-1 leading-tight"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {animatedNumbers[index]}+
              </div>
              <div
                className="text-xl font-bold text-white/90 leading-tight"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {stat.label === 'Products Built' && (
                  <>Products<br />Built</>
                )}
                {stat.label === 'Growing Team' && (
                  <>Growing<br />Team</>
                )}
                {stat.label === 'Countries & Expanding' && (
                  <>
                    Countries<br/>& Expanding
                  </>
                )}
              </div>
              {index < stats.length - 1 && (
                <div className="w-full h-px bg-white/20 mt-2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};