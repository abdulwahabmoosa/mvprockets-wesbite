import React, { ElementType } from 'react';

/**
 * Primary UI component for text display
 */
export interface TextProps {
  /**
   * What size should the text be? (Tailwind text size)
   */
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';
  /**
   * What font weight should the text be? (Tailwind font weight)
   */
  weight?: 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  /**
   * The text content to display
   */
  label: React.ReactNode;
  /**
   * Additional class names (use for color and other styles)
   */
  className?: string;
  /**
   * The HTML element to render as (span, p, div, etc.)
   */
  as?: ElementType;
}

export const Text = ({
  size = 'base',
  weight = 'normal',
  label,
  className = '',
  as: Component = 'span',
  ...props
}: TextProps) => {
  // Tailwind size and weight maps
  const sizes: Record<string, string> = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
  };
  const weights: Record<string, string> = {
    thin: 'font-thin',
    extralight: 'font-extralight',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black',
  };

  // Default to black text if no color class is provided
  const hasColor = className.match(/text-\w+/);
  const defaultColor = hasColor ? '' : 'text-black';

  const classes = [
    sizes[size],
    weights[weight],
    defaultColor,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={classes} {...props}>
      {label}
    </Component>
  );
};