import React from "react";

export type ReviewerProps = {
  image: React.ReactNode | string;
  name: React.ReactNode;
  rating?: React.ReactNode;
  paragraph1: React.ReactNode;
  paragraph2: React.ReactNode;
  paragraph3: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const Reviewer: React.FC<ReviewerProps> = ({
  image,
  name,
  rating,
  paragraph1,
  paragraph2,
  paragraph3,
  className = "",
  style = {},
}) => (
  <div
    className={`flex flex-col items-center justify-center w-full max-w-2xl mx-auto px-4 py-8 ${className}`}
    style={style}
  >
    {/* Reviewer Image */}
    <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden flex items-center justify-center mb-4">
      {typeof image === 'string' ? (
        <img src={image} alt={typeof name === 'string' ? name : 'Reviewer photo'} className="w-full h-full object-cover" />
      ) : (
        image
      )}
    </div>
    {/* Name */}
    <div className="text-xl md:text-2xl font-bold text-center mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{name}</div>
    {/* Rating (stars) */}
    {rating && <div className="flex items-center justify-center mb-4">{rating}</div>}
    {/* Paragraphs */}
    <p className="text-base md:text-lg text-center mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{paragraph1}</p>
    <p className="text-base md:text-lg text-center mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{paragraph2}</p>
    <p className="text-base md:text-lg text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>{paragraph3}</p>
  </div>
);

export default Reviewer; 