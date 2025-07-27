import React from 'react';
import NextLink, { LinkProps } from 'next/link';

interface LinkAtomProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const Link: React.FC<LinkAtomProps> = ({ href, children, className = '', ...rest }) => (
  <NextLink href={href} passHref legacyBehavior>
    <a
      className={`text-[#3A0E6D] hover:underline transition-colors text-base md:text-lg font-medium ${className}`}
      {...rest}
      data-testid="link-atom"
    >
      {children}
    </a>
  </NextLink>
);

export default Link; 