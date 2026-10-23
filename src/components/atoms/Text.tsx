import React from "react";

export type TextProps = {
  children: React.ReactNode;
  as?: React.ElementType;
  color?: string;
  size?: string;
  weight?: string;
  align?: string;
  className?: string;
  style?: React.CSSProperties;
  fontFamily?: string;
};

const Text: React.FC<TextProps> = ({
  children,
  as = "span",
  color = "text-inherit",
  size = "text-base",
  weight = "font-normal",
  align = "text-left",
  className = "",
  style = {},
  fontFamily = 'Montserrat, sans-serif',
}) => {
  const Comp: React.ElementType = as;
  return React.createElement(
    Comp,
    {
      className: `${color} ${size} ${weight} ${align} ${className}`.trim(),
      style: { fontFamily, ...style },
    },
    children
  );
};

export default Text;