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
  iconBg = "bg-teal-800",
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
      <h3 className="text-2xl md:text-xl font-semibold text-teal-950 mb-1 md:mb-2 text-left" style={{ fontFamily: 'Montserrat, sans-serif' }}>{title}</h3>
      {subheader && <div className="text-lg font-semibold mb-1 text-teal-800 font-sans">{subheader}</div>}
      <p className="text-base font-normal md:text-base text-muted leading-snug md:leading-snug text-left">{text}</p>
    </div>
  </div>
);

export default FeatureCard; 