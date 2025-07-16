import React from 'react';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Testimonials', href: '/testimonials' },
];

export const DesktopNavbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-10 py-3 shadow-none bg-white">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/mvprockets-logo.svg" alt="Logo" className="h-12 w-auto" />
      </div>
      {/* Nav Links and Button */}
      <div className="flex items-center">
        <div className="flex gap-x-10 ml-8">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} className="hover:underline">
              <Text label={link.label} weight="bold" className="text-[#3A0E6D] text-lg font-sans" as="span" />
            </a>
          ))}
        </div>
        <a href="/contact-us" className="ml-6">
          <Button
            label="Contact Us"
            backgroundColor="#E74177"
            primary
            size="medium"
          />
        </a>
      </div>
    </nav>
  );
}; 