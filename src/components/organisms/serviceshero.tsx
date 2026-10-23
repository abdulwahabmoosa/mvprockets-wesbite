import React, { useEffect, useState } from 'react';
import { Button } from '../atoms/Button';

const ServicesHero = () => {
  const [showTestimonials, setShowTestimonials] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTestimonials(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full py-12 md:py-16 px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <h1 className="text-teal-950 text-4xl md:text-6xl font-extrabold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Let's Build Amazing Things, Together!
          </h1>
          <p className="text-muted text-lg md:text-xl mb-8 max-w-2xl mx-auto md:mx-0" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            We are a leading venture studio company that bolsters innovation and growth into your business by building market fit MVPs.
          </p>
          <Button
            primary
            label="Talk to an expert"
            backgroundColor="#0E5964"
            size="large"
          />
        </div>

        {/* Right: Image with Testimonials */}
        <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative w-72 h-72 md:w-[540px] md:h-[540px]">
            {/* Main Circular Image */}
            <div className="w-full h-full rounded-full overflow-hidden shadow-xl">
              <img
                src="/design/Services-Review-Hero-Section-Circle.jpg"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top Testimonial - Slides from left */}
            <div 
              className={`hidden md:block absolute top-8 md:-left-12 bg-teal-50 rounded-2xl p-4 shadow-lg max-w-60 transition-all duration-1000 ease-out
                ${showTestimonials ? 'md:translate-x-0 md:opacity-100' : 'md:-translate-x-full md:opacity-0'}
              `}
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <p className="text-teal-950 text-sm leading-relaxed">
                    "MVPRockets treats StreamAlive like their own, always exceeding expectations. We wish all partners were this exceptional"
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="/people/Lux-DP.svg"
                    alt="Testimonial"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Testimonial - Slides from right */}
            <div 
              className={`hidden md:block absolute bottom-8 md:-right-10 bg-teal-950 rounded-2xl p-4 shadow-lg max-w-60 transition-all duration-1000 ease-ou
                ${showTestimonials ? 'md:translate-x-0 md:opacity-100' : 'md:translate-x-full md:opacity-0'}
              `}
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="/people/Saurav-DP.svg"
                    alt="Testimonial"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm leading-relaxed">
                    "MVPRockets, led by Giri and Praveen, were crucial in building Jiraaf early on"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero; 