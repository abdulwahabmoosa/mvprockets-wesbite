"use client"
import React, { useState, useEffect } from 'react';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Testimonials', href: '/testimonials' },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (open) {
      setShowDrawer(true);
      setTimeout(() => setIsAnimating(true), 10); // Start animation after mount
    } else if (showDrawer) {
      setIsAnimating(false);
      const timeout = setTimeout(() => setShowDrawer(false), 400); // Wait for animation to finish
      return () => clearTimeout(timeout);
    }
  }, [open]);

  return (
    <nav className="w-full flex items-center justify-between px-8 py-6 shadow-none">
      {/* Logo */}
      <div className="flex items-center gap-1">
        <img src="/mvprockets-logo.svg" alt="Logo" className="h-12 w-auto" />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-10 items-center">
        {navLinks.map(link => (
          <a key={link.label} href={link.href} className="hover:underline">
            <Text label={link.label} weight="bold" className="text-[#3A0E6D] text-lg" as="span" />
          </a>
        ))}
        <a href="/contact-us" className="ml-4">
          <Button
            label="Contact Us"
            backgroundColor="#E74177"
            primary
            size="medium"
          />
        </a>
      </div>

      {/* Hamburger for Mobile */}
      <button
        className="md:hidden flex flex-col gap-1"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <span className="w-8 h-0.5 bg-gray-400 rounded"></span>
        <span className="w-8 h-0.5 bg-gray-400 rounded"></span>
        <span className="w-8 h-0.5 bg-gray-400 rounded"></span>
      </button>

      {/* Mobile Drawer and Overlay */}
      {showDrawer && (
        <>
          {/* Overlay */}
          <div
            className={`fixed inset-0 z-40 bg-black/10 backdrop-blur-sm transition-opacity duration-400 ease-in-out`}
            style={{ opacity: isAnimating ? 1 : 0 }}
            onClick={() => setOpen(false)}
            aria-label="Close menu overlay"
          />
          {/* Drawer */}
          <div
            className="fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white z-50 flex flex-col p-8 shadow-lg transition-transform duration-400 ease-in-out"
            style={{
              transform: isAnimating ? 'translateX(0)' : 'translateX(-100%)',
            }}
          >
            <button
              className="absolute top-2 right-3 text-3xl p-0 m-0"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              style={{ fontWeight: 400 }}
            >
              &times;
            </button>
            <div className="mt-6" />
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="border-b border-gray-200 py-4 px-0 w-full"
                onClick={() => setOpen(false)}
              >
                <Text label={link.label} weight="semibold" className="text-[#3A0E6D] text-base w-full" as="span" />
              </a>
            ))}
          </div>
        </>
      )}
    </nav>
  );
}; 