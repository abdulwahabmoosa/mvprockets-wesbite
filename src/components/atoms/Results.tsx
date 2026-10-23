import React, { useEffect, useState } from "react";

export type ResultsBox = {
  icon: React.ReactNode;
  header: string;
  description: string | string[];
  isList?: boolean;
};

export type ResultsProps = {
  header: React.ReactNode;
  description: React.ReactNode;
  image: React.ReactNode;
  boxes: [ResultsBox, ResultsBox, ResultsBox];
  className?: string;
  style?: React.CSSProperties;
  animateImage?: boolean;
  imageDirection?: 'left' | 'right';
  showImage?: boolean;
  boxesAlignHigher?: boolean;
  imageDuration?: number; // in ms
};

const Results: React.FC<ResultsProps> = ({
  header,
  description,
  image,
  boxes,
  className = "",
  style = {},
  animateImage = false,
  imageDirection = 'right',
  showImage = true,
  boxesAlignHigher = false,
  imageDuration = 1200,
}) => {
  const [imgVisible, setImgVisible] = useState(false);
  useEffect(() => {
    if (animateImage) {
      setImgVisible(false);
      const timeout = setTimeout(() => setImgVisible(true), 50);
      return () => clearTimeout(timeout);
    } else {
      setImgVisible(true);
    }
  }, [image, animateImage, imageDirection]);

  return (
    <div className={`w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 py-12 md:py-20 px-4 md:px-12 max-w-full md:max-w-6xl lg:max-w-7xl mx-auto ${className}`} style={{ fontFamily: 'Montserrat, sans-serif', ...style }}>
      {/* Left: Text and Image */}
      <div className="w-full md:w-1/2 flex flex-col items-start">
        {/* Header */}
        <div className="mb-2 text-2xl md:text-3xl font-extrabold text-teal-950 leading-tight text-left md:min-h-[60px] flex items-end" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {header}
        </div>
        {/* Description */}
        <div className="mb-2 text-base md:text-lg text-teal-950 font-semibold leading-tight text-left" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {/* Time frame (second line of header) if present */}
          {Array.isArray(header) && header.length > 1 ? header[1] : null}
        </div>
        <div className="mb-4 text-sm md:text-base text-muted font-medium leading-relaxed text-left md:min-h-[56px] flex items-start" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {description}
        </div>
        {/* Animated Image */}
        <div className="w-full flex justify-center md:justify-start">
          <div className={`md:w-[700px] md:h-[540px] w-full h-auto flex items-center justify-center min-h-[200px] md:min-h-[540px] transition-all duration-[${imageDuration}ms] ease-in-out
            ${animateImage ?
              (imgVisible && showImage
                ? 'opacity-100 translate-x-0'
                : imageDirection === 'right'
                  ? 'opacity-0 translate-x-32'
                  : 'opacity-0 -translate-x-32')
              : (showImage ? 'opacity-100 translate-x-0' : 'opacity-0')}
          `}>
            {React.isValidElement(image) && (image as any).props ?
              React.cloneElement(image as React.ReactElement<any>, {
                className:
                  ((image as any).props.className || "") +
                  " w-full h-auto md:w-[700px] md:h-[540px] object-contain",
              })
              : image}
          </div>
        </div>
      </div>
      {/* Right: Boxes */}
      <div className={`w-full md:w-1/2 flex flex-col gap-6 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl ${boxesAlignHigher ? 'md:mt-[-60px]' : ''}`}>
        {boxes.map((box, idx) => (
          <div
            key={idx}
            className="group rounded-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-row items-start gap-4 cursor-pointer bg-teal-50 border border-teal-800/10"
          >
            <div className="flex-shrink-0 flex items-center justify-center w-[60px] h-[60px] rounded-full bg-teal-50">
              {box.icon}
            </div>
            <div className="flex-1 flex flex-col gap-1 justify-center">
              <span className="text-lg font-bold text-teal-950 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{box.header}</span>
              {box.isList && Array.isArray(box.description) ? (
                <ul className="flex flex-col gap-2 mt-1 list-none">
                  {box.description.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-sm text-muted font-medium leading-snug" style={{ fontFamily: 'Montserrat, sans-serif' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted font-medium leading-snug mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{box.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results; 