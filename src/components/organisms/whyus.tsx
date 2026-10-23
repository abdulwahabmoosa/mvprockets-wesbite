import React, { useEffect, useState, useRef } from "react";
import FeatureCard from "../atoms/FeatureCard";

const features = [
  {
    title: "Product Leadership",
    desc: "Our founders have decades of product leadership experience in some of the best companies (Yahoo, Microsoft, Thoughtworks, SAP)",
    icon: (
      <img src="/design/icons/badgeribbon.svg" alt="Product Leadership" />
    ),
  },
  {
    title: "Proven Frameworks",
    desc: "We know what works and what doesn't work, thanks to our silicon valley expertise and years of success that ensures business transformation.",
    icon: (
      <img src="/design/icons/doublecheck.svg" alt="Proven Frameworks" />
    ),
  },
  {
    title: "Timeline Guarantee",
    desc: "We give timeline guarantee. We deliver on time every time. If there is a delay, we pay for the delay!",
    icon: (
      <img src="/design/icons/thumbsup.svg" alt="Timeline Guarantee" />
    ),
  },
  {
    title: "Dedicated Product Team",
    desc: "Best in the industry experts who commit to work on one thing at a time to ensure the best outputs that your business deserves.",
    icon: (
      <img src="/design/icons/3people.svg" alt="Dedicated Product Team" />
    ),
  },
  {
    title: "Safe, Secure & Robust",
    desc: "We don't build just another MVP. We built \"THE MVP\", ensuring it's safe, secure, scalable and just everything you need.",
    icon: (
      <img src="/design/icons/shield.svg" alt="Safe, Secure & Robust" />
    ),
  },
  {
    title: "Support, Till You Need It",
    desc: "At MVPRockets, we support you during the launch and to the point where you get a new CTO and are ready to take the product in-house.",
    icon: (
      <img src="/design/icons/headphoewmic.svg" alt="Support, Till You Need It" />
    ),
  },
];

export const WhyUs = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Detect mobile/desktop
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          // Once triggered, disconnect the observer to prevent re-animation
          observer.disconnect();
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible (later trigger)
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before the section is fully in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Calculate delay for each card
  const getCardDelay = (index: number) => {
    if (isMobile) {
      // Mobile: 500ms delay between each card (0, 500, 1000, 1500, 2000, 2500)
      return index * 500;
    } else {
      // Desktop: first row (0-2) starts immediately, second row (3-5) starts after 200ms delay
      const isSecondRow = index >= 3;
      return isSecondRow ? 200 : 0;
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-8 md:py-16 px-3 md:px-16 bg-white overflow-hidden border-t border-teal-800/30"
    >
      {/* Blue dots top left, responsive: small circle on mobile, square grid on desktop */}
      <div className="absolute left-0 top-0 z-0">
        {/* Mobile: small circle of dots */}
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          className="block md:hidden"
        >
          {Array.from({ length: 3 }).map((_, row) => (
            Array.from({ length: 3 }).map((_, col) => (
              <circle key={row + '-' + col} cx={col * 16 + 8} cy={row * 16 + 8} r="3" fill="#D5ECEE" />
            ))
          ))}
        </svg>
        {/* Desktop: square grid of dots */}
        <svg
          width="110"
          height="110"
          viewBox="0 0 110 110"
          fill="none"
          className="hidden md:block"
        >
          {Array.from({ length: 5 }).map((_, row) => (
            Array.from({ length: 5 }).map((_, col) => (
              <circle key={row + '-' + col} cx={col * 22 + 8} cy={row * 22 + 8} r="4" fill="#D5ECEE" />
            ))
          ))}
        </svg>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        <div className="text-center mb-8 md:mb-12">
          <div className="text-2xl md:text-xl text-teal-800 font-semibold tracking-widest mb-2" style={{ letterSpacing: 2 }}>MVPROCKETS</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-teal-950 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Why Us?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-12 gap-y-4 md:gap-y-10 w-full">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`transition-all duration-1500 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: visible ? `${getCardDelay(i)}ms` : '0ms'
              }}
            >
              <FeatureCard
                icon={f.icon}
                title={f.title}
                text={f.desc}
                iconBg="bg-teal-800 w-14 h-14 rounded-[26px] md:w-12 md:h-12 md:rounded-full flex items-center justify-center"
                iconClassName="w-4 h-4 md:w-6 md:h-6"
                className="!items-start"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;