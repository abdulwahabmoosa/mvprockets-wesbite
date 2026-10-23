import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface LinkAtomProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const Link: React.FC<LinkAtomProps> = ({ href, children, className = '', ...rest }) => (
  <RouterLink
    to={href}
    className={`text-teal-950 hover:underline transition-colors text-base md:text-lg font-medium ${className}`}
    {...rest}
    data-testid="link-atom"
  >
    {children}
  </RouterLink>
);

export default Link;
