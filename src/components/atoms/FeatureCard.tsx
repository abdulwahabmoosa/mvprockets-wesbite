"use client";
import React from "react";

export type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  subheader?: string;
  text: string;
  iconBg?: string;
  iconClassName?: string;
  className?: string;
  style?: React.CSSProperties;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  subheader,
  text,
  iconBg = "bg-[#E74177]",
  iconClassName = "",
  className = "",
  style = {},
}) => (
  <div
    className={`flex items-start gap-4 md:gap-5 py-1 md:py-0 w-full ${className}`}
    style={style}
  >
    <div className={`flex-shrink-0 flex items-center justify-center ${iconBg}`}>
      {typeof icon === 'string'
        ? <img src={icon} className={iconClassName} />
        : icon}
    </div>
    <div className="w-full">
      <h3 className="text-2xl md:text-xl font-semibold text-[#3A0E6D] mb-1 md:mb-2 text-left" style={{ fontFamily: 'Montserrat, sans-serif' }}>{title}</h3>
      {subheader && <div className="text-lg font-semibold mb-1 text-[#E74177] font-sans">{subheader}</div>}
      <p className="text-base font-normal md:text-base text-gray-500 leading-snug md:leading-snug text-left">{text}</p>
    </div>
  </div>
);

export default FeatureCard; 