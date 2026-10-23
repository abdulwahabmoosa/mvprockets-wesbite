import React, { useState, useEffect, useRef } from "react";

const puzzleData = [
  {
    key: "ideation",
    title: "Ideation",
    desc: "Brainstorming and concept development.",
    icon: "/design/puzzle/Ideation-puzzle.png",
    bgSvg: "/design/puzzle/hexes/ideation.svg",
    iconPosition: { x: -10, y: 0 },
    circleSize: { width: 12, height: 12 },
    iconSize: { width: 8, height: 8 },
    checkmarkPosition: { x: 180, y: 10 },
    checkmarkSize: { width: 5, height: 5 },
    textPosition: { x: 0, y: 300 },
  },
  {
    key: "product-management",
    title: "Product Management",
    desc: "Defining product goals and roadmap.",
    icon: "/design/puzzle/Product-management-puzzle.svg",
    bgSvg: "/design/puzzle/hexes/productmanagement.svg",
    iconPosition: { x: -10, y: 0 },
    circleSize: { width: 12, height: 12 },
    iconSize: { width: 8, height: 8 },
    checkmarkPosition: { x: 180, y: 10 },
    checkmarkSize: { width: 5, height: 5 },
    textPosition: { x: 0, y: 300 },
  },
  {
    key: "design",
    title: "Design",
    desc: "User-friendly interfaces and visuals.",
    icon: "/design/puzzle/Design-puzzle.svg",
    bgSvg: "/design/puzzle/hexes/design.svg",
    iconPosition: { x: -10, y: 0 },
    circleSize: { width: 12, height: 12 },
    iconSize: { width: 14, height: 14 },
    checkmarkPosition: { x: 180, y: 10 },
    checkmarkSize: { width: 5, height: 5 },
    textPosition: { x: 0, y: 300 },
  },
  {
    key: "project-management",
    title: "Project Management",
    desc: "Planning, organizing, and executing the project.",
    icon: "/design/puzzle/Project-management-puzzle.svg",
    bgSvg: "/design/puzzle/hexes/projectmanagement.svg",
    iconPosition: { x: -10, y: 0 },
    circleSize: { width: 12, height: 12 },
    iconSize: { width: 8, height: 8 },
    checkmarkPosition: { x: 180, y: 10 },
    checkmarkSize: { width: 5, height: 5 },
    textPosition: { x: 0, y: 300 },
  },
  {
    key: "development",
    title: "Development",
    desc: "Building the product's features and functionality.",
    icon: "/design/puzzle/Development-puzzle.svg",
    bgSvg: "/design/puzzle/hexes/development.svg",
    iconPosition: { x: -15, y: 10 },
    circleSize: { width: 12, height: 12 },
    iconSize: { width: 8, height: 8 },
    checkmarkPosition: { x: 180, y: 10 },
    checkmarkSize: { width: 5, height: 5 },
    textPosition: { x: 0, y: 300 },
  },
  {
    key: "quality-assurance",
    title: "Quality Assurance",
    desc: "Testing and calibrating the product.",
    icon: "/design/puzzle/Quality-assurance-puzzle.svg",
    bgSvg: "/design/puzzle/hexes/qualityassurance.svg",
    iconPosition: { x: -10, y: 0 },
    circleSize: { width: 12, height: 12 },
    iconSize: { width: 8, height: 8 },
    checkmarkPosition: { x: 180, y: 10 },
    checkmarkSize: { width: 5, height: 5 },
    textPosition: { x: 0, y: 300 },
  },
  {
    key: "infrastructure-security",
    title: "Infrastructure & Security",
    desc: "Building and maintaining the technical foundation.",
    icon: "/design/puzzle/infra-sec-puzzle.svg",
    bgSvg: "/design/puzzle/hexes/infrasec.svg",
    iconPosition: { x: -10, y: 0 },
    circleSize: { width: 12, height: 12 },
    iconSize: { width: 8, height: 8 },
    checkmarkPosition: { x: 180, y: 10 },
    checkmarkSize: { width: 5, height: 5 },
    textPosition: { x: 0, y: 300 },
  },
  {
    key: "compliance",
    title: "Compliance",
    desc: "Testing and calibrating the product.",
    icon: "/design/puzzle/Compliance-puzzle.svg",
    bgSvg: "/design/puzzle/hexes/compliance.svg",
    iconPosition: { x: -10, y: 0 },
    circleSize: { width: 12, height: 12 },
    iconSize: { width: 8, height: 8 },
    checkmarkPosition: { x: 180, y: 10 },
    checkmarkSize: { width: 5, height: 5 },
    textPosition: { x: 0, y: 300 },
  },
];

const finalPositions = [
  { x: 100, y: 100 },      // Ideation - moved down from 0
  { x: 300, y: 0 },        // Product Management - moved down from -100
  { x: 300, y: 216 },      // Design - moved down from 116
  { x: 500, y: 120 },      // Project Management - moved down from 20
  { x: 500, y: 330 },      // Development - moved down from 230
  { x: 700, y: 0 },        // Quality Assurance - moved down from -100
  { x: 700, y: 216 },      // Infrastructure & Security - moved down from 116
  { x: 900, y: 100 },      // Compliance - moved down from 0
];

// Scattered starting positions - pieces scattered around the screen
const scatteredPositions = [
  { x: -200, y: -300, rotation: -180 },  // Ideation - off screen top-left
  { x: 1200, y: -400, rotation: 90 },   // Product Management - off screen top-right
  { x: -300, y: 600, rotation: -90 },   // Design - off screen bottom-left
  { x: 1100, y: 500, rotation: 270 },   // Project Management - off screen bottom-right
  { x: -400, y: 200, rotation: 180 },   // Development - off screen left
  { x: 1300, y: -200, rotation: -45 },  // Quality Assurance - off screen right
  { x: 800, y: -500, rotation: 135 },   // Infrastructure & Security - off screen top
  { x: 200, y: 700, rotation: -135 },   // Compliance - off screen bottom
];

const Puzzle: React.FC = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        
        if (entry.intersectionRatio >= 0.5) {
          // 50% or more visible - animate in
          setIsAnimated(true);
        } else if (entry.intersectionRatio <= 0.2) {
          // 20% or less visible - animate out
          setIsAnimated(false);
        }
      },
      {
        threshold: [0, 0.2, 0.5, 1] // Multiple thresholds to catch transitions
      }
    );

    observer.observe(currentSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-teal-950">
      {/* Main Container - Controls overall spacing */}
      <div className="w-full px-4 md:px-8 mx-auto pt-6 pb-8 md:pt-16 md:pb-32">
        
        {/* Header Section */}
        <header className="w-full mb-4 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center font-['Montserrat']">
            End-to-End Product Development
          </h2>
        </header>
        
        {/* Mobile Content */}
        <div className="block md:hidden">
          <div className="w-full flex justify-center">
            <img
              src="/design/puzzle/mobile/puzzel2-528x1024.png"
              alt="Puzzle mobile overview"
              className="w-full max-w-md h-auto"
              draggable="false"
            />
          </div>
        </div>
        
        {/* Desktop Puzzle Grid */}
        <div className="hidden md:block">
          {/* Puzzle Container - Controls spacing around puzzle */}
          <div className="w-full max-w-7xl mx-auto mt-30">
            {/* Puzzle Canvas - Fixed height container for absolute positioning */}
            <div className="relative w-full h-[600px] overflow-hidden">
              {puzzleData.map((item, idx) => {
                const finalPos = finalPositions[idx];
                const scatteredPos = scatteredPositions[idx];
                
                return (
                  <div
                    key={item.key}
                    className="absolute transition-all duration-[2000ms] ease-out"
                    style={{
                      left: isAnimated ? finalPos.x : scatteredPos.x,
                      top: isAnimated ? finalPos.y : scatteredPos.y,
                      width: 250,
                      height: 250,
                      transformOrigin: 'center',
                      transform: `rotate(${isAnimated ? 0 : scatteredPos.rotation}deg)`,
                      opacity: isAnimated ? 1 : 0.7,
                    }}
                  >
                    {/* Checkmark Badge */}
                    <div 
                      className="absolute z-10 transition-all duration-1000 ease-out"
                      style={{
                        left: item.checkmarkPosition.x,
                        top: item.checkmarkPosition.y,
                        width: `${item.checkmarkSize.width * 4}px`,
                        height: `${item.checkmarkSize.height * 4}px`,
                        opacity: isAnimated ? 1 : 0,
                        transform: `scale(${isAnimated ? 1 : 0})`,
                      }}
                    >
                      <img
                        src="/design/puzzle/checkpuzzle.svg"
                        alt=""
                        className="w-full h-full object-contain"
                        draggable="false"
                      />
                    </div>

                    {/* Desktop Hexagon SVG - Using individual bgSvg files */}
                    <img
                      src={item.bgSvg}
                      alt=""
                      className="absolute inset-0 w-full h-full object-contain"
                      draggable="false"
                    />

                    {/* Content Container */}
                    <div 
                      className="absolute inset-0 flex flex-col items-center justify-start pt-12 transition-all duration-1000 ease-out"
                      style={{
                        opacity: isAnimated ? 1 : 0,
                        transform: `translateY(${isAnimated ? 0 : 20}px)`,
                      }}
                    >
                      {/* Icon Container */}
                      <div className="relative flex items-center justify-center mb-1 -ml-4">
                        {/* Purple Circle Background */}
                        <div 
                          className="absolute rounded-full bg-teal-950 z-10 flex items-center justify-center"
                          style={{
                            left: item.iconPosition.x,
                            top: item.iconPosition.y,
                            width: `${item.circleSize.width * 4}px`,
                            height: `${item.circleSize.height * 4}px`,
                          }}
                        >
                          {/* Icon */}
                          <img
                            src={item.icon}
                            alt=""
                            className="object-contain"
                            style={{
                              width: `${item.iconSize.width * 4}px`,
                              height: `${item.iconSize.height * 4}px`,
                            }}
                            draggable="false"
                          />
                        </div>
                      </div>
                      
                      {/* Text Content */}
                      <div className="text-center">
                        <h3 className="font-bold text-white mb-1 mt-15 leading-tight font-['Montserrat'] max-w-24 mx-auto text-md">
                          {item.title}
                        </h3>
                        <p className="text-white opacity-90 leading-snug max-w-32 mx-auto font-bold text-xs">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Puzzle;

