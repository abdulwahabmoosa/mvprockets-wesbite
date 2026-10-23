import React, { useState, useEffect } from 'react';

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
  const [isVisible, setIsVisible] = useState(true);
  const [hideBorder, setHideBorder] = useState(false);

  useEffect(() => {
    if (open) {
      setShowDrawer(true);
      setTimeout(() => setIsAnimating(true), 10);
    } else if (showDrawer) {
      setIsAnimating(false);
      const timeout = setTimeout(() => setShowDrawer(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      // Hide navbar when scrolling starts, show when passing 70% of first section
      const scrollThreshold = window.innerHeight * 0.7;
      const isScrolling = window.scrollY > 0;
      const shouldShow = window.scrollY > scrollThreshold;
      
      setIsVisible(isScrolling ? shouldShow : true);
      setHideBorder(isScrolling);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Animated Gradient Border */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 h-1 transition-opacity duration-300 ${
          hideBorder ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          background: 'linear-gradient(90deg, #0E5964, #0B2A2E, #0E5964, #0B2A2E)',
          backgroundSize: '200% 100%',
          animation: 'gradientShift 3s ease-in-out infinite',
        }}
      />
      {/* Navigation */}
      <nav 
        className={`w-full flex items-center justify-between px-8 md:px-20 py-3 bg-white transition-all duration-500 ease-out fixed top-0 left-0 right-0 z-40 ${
          hideBorder ? 'shadow-md' : ''
        }`}
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src="/mvprockets-logo.svg" 
            alt="MVPROCKETS Logo" 
            className="h-10 w-auto md:h-12" 
          />
        </div>
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-teal-950 text-lg font-medium hover:text-teal-800 transition-colors duration-200"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact-us"
            className="bg-teal-800 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors duration-200 ml-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Contact Us
          </a>
        </div>
        {/* Hamburger for Mobile */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <span className="w-8 h-0.5 bg-subtle rounded"></span>
          <span className="w-8 h-0.5 bg-subtle rounded"></span>
          <span className="w-8 h-0.5 bg-subtle rounded"></span>
        </button>
      </nav>
      
      {/* Mobile Drawer and Overlay - Outside nav element */}
      {showDrawer && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md transition-opacity duration-300 ease-in-out"
            style={{ opacity: isAnimating ? 1 : 0 }}
            onClick={() => setOpen(false)}
            aria-label="Close menu overlay"
          />
          {/* Drawer */}
          <div
            className="fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white z-50 flex flex-col shadow-xl transition-transform duration-300 ease-in-out"
            style={{
              transform: isAnimating ? 'translateX(0)' : 'translateX(-100%)',
            }}
          >
            <button
              className="absolute top-6 right-6 text-2xl text-muted hover:text-teal-950"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
            <div className="mt-20 px-8">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block border-b border-line py-6 text-teal-950 text-lg font-medium hover:text-teal-800 transition-colors"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/contact-us"
                className="mt-6 w-full bg-teal-800 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors text-center block"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                onClick={() => setOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}; 