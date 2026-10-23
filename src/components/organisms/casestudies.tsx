import React, { useState, useEffect, useRef } from "react";
import Results from "../atoms/Results";

const caseStudies = [
  {
    header: (
      <div className="flex flex-col">
        <span className="block">Transformation team for Nirogstreet</span>
        <span className="block">[Duration - 3 Months]</span>
      </div>
    ),
    description: (
      <>
        <div>Nirogstreet is a series A funded market leader operating with a vision of making alternate medicinal practices mainstream.</div>
      </>
    ),
    image: <img src="/design/casestudies/NirogStreet-Portfolio.png" alt="Nirogstreet" className="w-full h-auto" />,
    boxes: [
      {
        icon: <img src="/design/icons/pink-doc.svg" alt="Project Requirement" className="w-8 h-8" />,
        header: "Project Requirement",
        description: "Revamp core product experience & make the core tech stable + create new Mobile App.",
      },
      {
        icon: <img src="/design/icons/pink-people.svg" alt="Team Size" className="w-8 h-8" />,
        header: "Team Size",
        description: ["1 PM", "1 Designer", "6 Developers + Architect + QA", "1 DevOps"],
        isList: true,
      },
      {
        icon: <img src="/design/icons/pink-outcome.svg" alt="Outcome" className="w-8 h-8" />,
        header: "Outcome",
        description: ["Transformation complete", "New mobile app launched", "30% Revenue growth"],
        isList: true,
      },
    ],
  },
  {
    header: (
      <div className="flex flex-col">
        <span className="block">Innovation team for Livspace</span>
        <span className="block">[Duration - 3.5 Months]</span>
      </div>
    ),
    description: (
      <>
        <div>Livspace is a 1.2B USD tech startup organising the home interiors space for new home owners in India.</div>
      </>
    ),
    image: <img src="/design/casestudies/Livspace-Portfolio.png" alt="Livspace" className="w-full h-auto" />,
    boxes: [
      {
        icon: <img src="/design/icons/pink-doc.svg" alt="Project Requirement" className="w-8 h-8" />,
        header: "Project Requirement",
        description: "Build a home needs services market place for existing home owners.",
      },
      {
        icon: <img src="/design/icons/pink-people.svg" alt="Team Size" className="w-8 h-8" />,
        header: "Team Size",
        description: ["1 PM", "1 Designer", "8 Developers + Architect + QA", "1 DevOps"],
        isList: true,
      },
      {
        icon: <img src="/design/icons/pink-outcome.svg" alt="Outcome" className="w-8 h-8" />,
        header: "Outcome",
        description: ["Successful launch on time.", "Multiple millions of USD in revenues in 1 year.", "Team continue to support roadmap."],
        isList: true,
      },
    ],
  },
  {
    header: (
      <div className="flex flex-col">
        <span className="block">Innovation team for ANSR</span>
        <span className="block">[Duration - 3 Months]</span>
      </div>
    ),
    description: (
      <>
        <div>ANSR is a market leader in providing workforce transformation services to large fortune 500 companies across the world.</div>
      </>
    ),
    image: <img src="/design/casestudies/ANSR-Portfolio.png" alt="ANSR" className="w-full h-auto" />,
    boxes: [
      {
        icon: <img src="/design/icons/pink-doc.svg" alt="Project Requirement" className="w-8 h-8" />,
        header: "Project Requirement",
        description: "Build a HR tech SaaS product to increase their customer's hiring efficiencies.",
      },
      {
        icon: <img src="/design/icons/pink-people.svg" alt="Team Size" className="w-8 h-8" />,
        header: "Team Size",
        description: ["1 PM", "1 Designer", "4 Developers + Lead + QA", "1 DevOps"],
        isList: true,
      },
      {
        icon: <img src="/design/icons/pink-outcome.svg" alt="Outcome" className="w-8 h-8" />,
        header: "Outcome",
        description: ["Successful launch on time", "Product under beta with early customers", "Team continues roadmap support."],
        isList: true,
      },
    ],
  },
  {
    header: (
      <div className="flex flex-col">
        <span className="block">MVP for Alaanpay</span>
        <span className="block">[Duration - 3.5 Months]</span>
      </div>
    ),
    description: (
      <>
        <div>Alaanpay is a fintech platform founded by 2 Ex-McKinsey consultants for MENA that helps SMBs and startups keep track of their employee spends through a virtual card platform.</div>
      </>
    ),
    image: <img src="/design/casestudies/Alanpay-Portfolio.png" alt="Alaanpay" className="w-full h-auto" />,
    boxes: [
      {
        icon: <img src="/design/icons/pink-doc.svg" alt="Project Requirement" className="w-8 h-8" />,
        header: "Project Requirement",
        description: "Build the MVP for Alaanpay, integrating with M2P platform, backed by top banks & provide virtual cards for SMBs.",
      },
      {
        icon: <img src="/design/icons/pink-people.svg" alt="Team Size" className="w-8 h-8" />,
        header: "Team Size",
        description: ["1 PM", "1 Designer", "4 Developers + Lead + QA", "1 DevOps"],
        isList: true,
      },
      {
        icon: <img src="/design/icons/pink-outcome.svg" alt="Outcome" className="w-8 h-8" />,
        header: "Outcome",
        description: ["Successful launch", "100s of SMBs onboarded", "One of the top fintechs in the region."],
        isList: true,
      },
    ],
  },
  {
    header: (
      <div className="flex flex-col">
        <span className="block">MVP for StreamAlive</span>
        <span className="block">[Duration - 2.5 Months]</span>
      </div>
    ),
    description: (
      <>
        <div>StreamAlive is a influencer-Audience engagement platform started by serial entrepreneurs targeting Youtube livestreamers & Corporate users on Zoom.</div>
      </>
    ),
    image: <img src="/design/casestudies/StreamAlive-Portfolio.png" alt="StreamAlive" className="w-full h-auto" />,
    boxes: [
      {
        icon: <img src="/design/icons/pink-doc.svg" alt="Project Requirement" className="w-8 h-8" />,
        header: "Project Requirement",
        description: "Build the MVP for Streamalive integrating with Youtube, process comments on livestreams & increase audience engagement.",
      },
      {
        icon: <img src="/design/icons/pink-people.svg" alt="Team Size" className="w-8 h-8" />,
        header: "Team Size",
        description: ["1 PM", "1 Designer", "3 Developers + Lead + QA", "1 DevOps"],
        isList: true,
      },
      {
        icon: <img src="/design/icons/pink-outcome.svg" alt="Outcome" className="w-8 h-8" />,
        header: "Outcome",
        description: ["Product hunt #5 product of the week", "Processed over 1 Million comments, peaking at 15k comments/second."],
        isList: true,
      },
    ],
  },
  {
    header: (
      <div className="flex flex-col">
        <span className="block">MVP for Jiraaf</span>
        <span className="block">[Duration - 2.5 Months]</span>
      </div>
    ),
    description: (
      <>
        <div>Jiraaf.com is an Indian fintech platform that enables retail participation in corporate debt.</div>
      </>
    ),
    image: <img src="/design/casestudies/Jiraaf-Portfolio.png" alt="Jiraaf" className="w-full h-auto" />,
    boxes: [
      {
        icon: <img src="/design/icons/pink-doc.svg" alt="Project Requirement" className="w-8 h-8" />,
        header: "Project Requirement",
        description: "Build the MVP for Jiraaf that enables retail investors to invest in a debt instrument & receive payments back.",
      },
      {
        icon: <img src="/design/icons/pink-people.svg" alt="Team Size" className="w-8 h-8" />,
        header: "Team Size",
        description: ["1 PM", "1 Designer", "3 Developers + Lead + QA", "1 DevOps"],
        isList: true,
      },
      {
        icon: <img src="/design/icons/pink-outcome.svg" alt="Outcome" className="w-8 h-8" />,
        header: "Outcome",
        description: ["$80M in investments", "$40M in disbursements", "$7.5M Funding from Accel."],
        isList: true,
      },
    ],
  },
  {
    header: (
      <div className="flex flex-col">
        <span className="block">MVP for Bimaplan</span>
        <span className="block">[Duration - 2 Months]</span>
      </div>
    ),
    description: (
      <>
        <div>Bimaplan is a YC 2021 Insuretech startup founded by a Harvard Alum increasing the risk coverage for the next billion internet users in India.</div>
      </>
    ),
    image: <img src="/design/casestudies/Bimaplan-Portfolio.png" alt="Bimaplan" className="w-full h-auto" />,
    boxes: [
      {
        icon: <img src="/design/icons/pink-doc.svg" alt="Project Requirement" className="w-8 h-8" />,
        header: "Project Requirement",
        description: "Build the MVP for Bimaplan that enables byte sized insurance products @ < 2 USD for a year's coverage.",
      },
      {
        icon: <img src="/design/icons/pink-people.svg" alt="Team Size" className="w-8 h-8" />,
        header: "Team Size",
        description: ["1 PM", "1 Designer", "3 Developers + Lead + QA", "1 DevOps"],
        isList: true,
      },
      {
        icon: <img src="/design/icons/pink-outcome.svg" alt="Outcome" className="w-8 h-8" />,
        header: "Outcome",
        description: ["Successful demo on demo day", "$3M Funding from Marquee investors."],
        isList: true,
      },
    ],
  },
];

const CaseStudies = () => {
  const [current, setCurrent] = useState(0);
  const [imageKey, setImageKey] = useState(0); // Force image animation on each slide change
  const trackRef = useRef<HTMLDivElement>(null);
  const numSlides = caseStudies.length;
  // For infinite loop, we add a clone of the last at the start and a clone of the first at the end
  const slides = [caseStudies[numSlides - 1], ...caseStudies, caseStudies[0]];
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateMobile = () => setIsMobile(window.innerWidth < 768);
    updateMobile();
    window.addEventListener('resize', updateMobile);
    return () => window.removeEventListener('resize', updateMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      goRight();
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  // Handle transition end for infinite loop
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (current === -1) {
      setCurrent(numSlides - 1);
      if (trackRef.current) {
        trackRef.current.style.transition = 'none';
        trackRef.current.style.transform = `translateX(-${numSlides * 100}%)`;
        // Force reflow to apply the style immediately
        void trackRef.current.offsetWidth;
        trackRef.current.style.transition = '';
      }
    } else if (current === numSlides) {
      setCurrent(0);
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
    setImageKey(prev => prev + 1); // Trigger new image animation
    setCurrent((prev) => prev - 1);
  };

  const goRight = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setImageKey(prev => prev + 1); // Trigger new image animation
    setCurrent((prev) => prev + 1);
  };

  return (
    <section className="w-full py-16 px-2 md:px-0 bg-teal-50 relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-8">
          <div className="text-teal-800 text-sm font-semibold tracking-widest mb-2" style={{ letterSpacing: 2 }}>OUR</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-teal-950 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Case Studies</h2>
        </div>
        <div className="relative w-full flex items-center justify-center min-h-[600px]">
          {/* Left Arrow */}
          <button
            className="absolute left-0 md:-left-8 top-1/2 z-20 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-teal-100 transition-colors disabled:opacity-40"
            onClick={goLeft}
            aria-label="Previous"
            style={{ transform: 'translateY(-50%)' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#0E5964" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          {/* Carousel Content */}
          <div className="w-full max-w-7xl mx-auto relative min-h-[1000px] overflow-visible">
            <div className="w-full h-full relative overflow-x-hidden" style={{ minHeight: 1000 }}>
              <div
                ref={trackRef}
                className="flex transition-transform duration-[1200ms] ease-in-out w-full h-full"
                style={{ transform: `translateX(-${(current + 1) * 100}%)` }}
                onTransitionEnd={handleTransitionEnd}
              >
                {slides.map((cs, idx) => (
                  <div key={idx} className="w-full flex-shrink-0">
                    <Results
                      key={`${idx}-${imageKey}`} // Force re-render for image animation
                      header={cs.header}
                      description={cs.description}
                      image={cs.image}
                      boxes={cs.boxes as [typeof caseStudies[0]['boxes'][0], typeof caseStudies[0]['boxes'][1], typeof caseStudies[0]['boxes'][2]]}
                      animateImage={true}
                      imageDirection={'right'}
                      showImage={true} // Always show image, animation is handled by imageKey
                      boxesAlignHigher={true}
                      imageDuration={1200}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right Arrow */}
          <button
            className="absolute right-0 md:-right-8 top-1/2 z-20 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-teal-100 transition-colors disabled:opacity-40"
            onClick={goRight}
            aria-label="Next"
            style={{ transform: 'translateY(-50%)' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#0E5964" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;