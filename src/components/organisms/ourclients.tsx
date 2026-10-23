import React, { useState, useRef, useEffect } from "react";
import Reviewer from "../atoms/Reviewer";

const reviews = [
  {
    name: 'Lux Narayan',
    role: 'Founder, StreamAlive',
    image: '/people/Lux-DP.svg',
    linkedin: 'https://www.linkedin.com/in/luxnarayan/',
    paragraphs: [
      'We were introduced to MVPRockets when we sought a partner to help make StreamAlive’s SaaS v1. I couldn’t be more grateful to our investors for this introduction! Our very first meeting with Giri and his co‑founders was refreshingly candid and they preferred to let their work do the talking. My co‑founders and I had a great feeling about working with them.',
      'Fast forward a year (and more just our MVP), and I can confidently say that “feeling” has been ratified in many more ways than we expected. The team at MVPRockets is truly an extension of our own and treats StreamAlive as their own product. They’ve made a habit of exceeding expectations and continue to challenge us to think in exciting new ways. We wish we had partners like this in every sphere of our business operations!'
    ]
  },
  {
    name: 'Saurav Ghosh',
    role: 'Co‑Founder, Jiraaf',
    image: '/people/Saurav-DP.svg',
    linkedin: 'https://www.linkedin.com/in/saurav-ghosh-5345905/',
    paragraphs: [
      'MVP rockets is one of the best things that happened to Jiraaf early on in our journey. Giri, Praveen and team bring decades of experience in building products and they played an instrumental role in building Jiraaf – a startup with no “tech” founder. One thing that stands out for me is their commitment to best practices and processes. These are big value adds for early stage startups because we are geared to scale products in the right way from day zero (from unit testing, test coverage to writing test automations today).',
      'The MVP team are true partners, they understand the importance of delivering product as per business timelines as well as being extremely flexible with bandwidth requirements when business needs them the most.',
      'Lastly, Praveen, Sathish, Giri have been great mentors for the entire team. As a result of the comfort with them, we did not have a CTO / HOE for a whole year and that I think speaks volumes for the trust and faith that we had in the MVP team.'
    ]
  },
  {
    name: 'Karun Kurien',
    role: 'Co‑founder, Alaanpay',
    image: '/people/Karun-DP.svg',
    linkedin: 'https://www.linkedin.com/in/karun-kurien-3020504b/',
    paragraphs: [
      'As a semi‑technical founder, I was apprehensive about outsourcing my MVP building. But I was more apprehensive about hiring an in‑house team in a hurry.',
      'MVPRockets was fantastic as a partner in our initial months. They are a smart group of people and have done this many times and hence are able to start releasing functional products in no time. We eventually built an in‑house team with MVPRockets’ help.',
      'However, Giri and Praveen continue to be thought partners for us and are always willing to help when needed. They were strangers when we began and are friends now.'
    ]
  }
];

const sampleStars = (
  <div className="flex justify-center mt-2 mb-2">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="#FFC107" className="mx-0.5">
        <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" />
      </svg>
    ))}
  </div>
);

const OurClients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const numSlides = reviews.length;
  const slides = [reviews[numSlides - 1], ...reviews, reviews[0]];

  useEffect(() => {
    const handleResize = () => {
      setCurrentIndex((i) => i);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex === -1) {
      setCurrentIndex(numSlides - 1);
      if (trackRef.current) {
        trackRef.current.style.transition = 'none';
        trackRef.current.style.transform = `translateX(-${numSlides * 100}%)`;
        void trackRef.current.offsetWidth;
        trackRef.current.style.transition = '';
      }
    } else if (currentIndex === numSlides) {
      setCurrentIndex(0);
      if (trackRef.current) {
        trackRef.current.style.transition = 'none';
        trackRef.current.style.transform = `translateX(-100%)`;
        void trackRef.current.offsetWidth;
        trackRef.current.style.transition = '';
      }
    }
  };

  const goLeft = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const goRight = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  useEffect(() => {
    const id = setInterval(() => {
      goRight();
    }, 12000);
    return () => clearInterval(id);
  }, [isTransitioning]);

  return (
    <section className="w-full bg-teal-950 py-20 font-montserrat overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12">
          <div className="text-teal-300 text-2xl md:text-3xl font-extrabold tracking-widest mb-2 uppercase" style={{ letterSpacing: 2 }}>
            OUR
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Clients Love Us
          </h2>
        </div>
        {/* Carousel */}
        <div className="relative w-full flex items-center justify-center min-h-[420px]">
          {/* Left Arrow */}
          <button
            className="absolute left-0 md:-left-16 z-20 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-teal-100 transition-colors"
            onClick={goLeft}
            aria-label="Previous"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
            disabled={isTransitioning}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#0E5964" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          {/* Carousel Content */}
          <div className="w-full max-w-xs md:max-w-4xl lg:max-w-6xl mx-auto relative overflow-x-hidden">
            <div
              ref={trackRef}
              className="flex transition-transform duration-[900ms] ease-in-out w-full"
              style={{ transform: `translateX(-${(currentIndex + 1) * 100}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {slides.map((review, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-2">
                  <div className="flex flex-col items-center text-center">
                    {/* Reviewer Image */}
                    <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden flex items-center justify-center mb-8 bg-white">
                      <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                    </div>
                    {/* Stars */}
                    {sampleStars}
                    {/* Name and Role */}
                    <div className="flex flex-row items-center justify-center gap-2 mb-6">
                      <a
                        href={review.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base md:text-lg font-bold text-white hover:underline"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        {review.name}
                      </a>
                      <span className="text-sm md:text-base font-medium text-nav-text" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {review.role}
                      </span>
                    </div>
                    {/* Review Text */}
                    <div className="text-md md:text-lg text-white font-medium leading-relaxed max-w-xs md:max-w-4xl lg:max-w-6xl mx-auto space-y-3" style={{ minHeight: '170px' }}>
                      {review.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right Arrow */}
          <button
            className="absolute right-0 md:-right-16 z-20 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-teal-100 transition-colors"
            onClick={goRight}
            aria-label="Next"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
            disabled={isTransitioning}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#0E5964" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurClients; 