import React, { useState } from 'react';

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Case Study', href: '#' },
  { label: 'Testimonials', href: '#' },
  { label: 'Contact Us', href: '#' },
  { label: 'Venture Studios', href: '#' },
];

const alsoFromUs = [
  { label: 'DBDaddy', href: '#' },
  { label: 'Slingshot.is', href: '#' },
  { label: 'StoriesWithDory', href: '#' },
];

const legalLinks = [
  { label: 'Support', href: '#' },
  { label: 'Privacy', href: '#' },
  { label: 'Terms & Condition', href: '#' },
  { label: 'FAQs', href: '#' },
  { label: 'GDPR', href: '#' },
  { label: 'Security Disclosure', href: '#' },
];

const socialLinks = [
  { label: 'Facebook', href: '#', icon: (
    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
  ) },
  { label: 'Twitter', href: '#', icon: (
    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 00-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.93-.856 2.01-.857 3.17 0 2.188 1.115 4.116 2.823 5.247a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.058 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.015-.634A9.936 9.936 0 0024 4.557z"/></svg>
  ) },
  { label: 'YouTube', href: '#', icon: (
    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 00-2.112-2.112C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.386.574A2.994 2.994 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a2.994 2.994 0 002.112 2.112C4.5 20.5 12 20.5 12 20.5s7.5 0 9.386-.574a2.994 2.994 0 002.112-2.112C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
  ) },
  { label: 'Pinterest', href: '#', icon: (
    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.387 7.633 11.093-.106-.943-.202-2.39.042-3.42.221-.956 1.423-6.096 1.423-6.096s-.363-.726-.363-1.797c0-1.684.977-2.943 2.192-2.943 1.033 0 1.532.775 1.532 1.705 0 1.04-.662 2.594-1.003 4.037-.286 1.21.607 2.197 1.8 2.197 2.16 0 3.82-2.278 3.82-5.563 0-2.91-2.093-4.946-5.083-4.946-3.465 0-5.5 2.6-5.5 5.287 0 1.05.404 2.177.91 2.788.1.12.114.225.083.346-.09.36-.293 1.144-.333 1.303-.05.2-.162.243-.376.147-1.4-.573-2.273-2.37-2.273-3.818 0-3.108 2.626-6.825 7.824-6.825 4.18 0 6.927 3.025 6.927 6.27 0 4.29-2.385 7.49-5.915 7.49-1.183 0-2.295-.64-2.675-1.364l-.728 2.775c-.21.8-.623 1.8-.927 2.41.697.215 1.432.332 2.2.332 6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
  ) },
  { label: 'LinkedIn', href: '#', icon: (
    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.6v5.596zm-7-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75z"/></svg>
  ) },
  { label: 'Instagram', href: '#', icon: (
    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344c-.98.98-1.212 2.092-1.271 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.282.291 2.394 1.271 3.374.98.98 2.092 1.212 3.374 1.271C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.282-.059 2.394-.291 3.374-1.271.98-.98 1.212-2.092 1.271-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.282-.291-2.394-1.271-3.374-.98-.98-2.092-1.212-3.374-1.271C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z"/></svg>
  ) },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email.trim()) {
      setError("The field is required.");
    } else {
      setError("");
      // No actual submit for now
    }
  };

  return (
    <footer className="w-full bg-teal-900 text-white pt-12 pb-0">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-y-8 md:gap-y-0 md:gap-12 md:justify-between">
        {/* Left: Logo and Description */}
        <div className="flex-1 min-w-[220px] flex flex-col gap-4 md:gap-6 mb-8 md:mb-0">
          <div className="flex items-center gap-3 mb-2">
            <img src="/mvprockets-logo.svg" alt="MVPROCKETS Logo" className="h-16 w-auto" />
          </div>
          <div className="text-nav-text text-base md:text-lg max-w-xs md:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Empowering startups & enterprises to turn vision into reality with rapid, scalable product development and amazing support.
          </div>
          <div className="text-nav-text text-base mt-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Wyoming, USA<br />Bangalore, India
          </div>
        </div>
        {/* Center: Quick Links */}
        <div className="flex-1 min-w-[180px] flex flex-col gap-2 mb-6 md:mb-0">
          <div className="text-nav-text text-lg font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Quick Links</div>
          <ul className="flex flex-col gap-1">
            {quickLinks.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-white hover:text-teal-300 transition-colors duration-200 text-base md:text-lg font-medium mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Right: Newsletter and Also From Us */}
        <div className="flex-1 min-w-[220px] flex flex-col gap-4 md:gap-6">
          <div className="text-nav-text text-lg font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Join Our Newsletter</div>
          <div className="flex flex-col gap-3 w-full md:max-w-xs">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="rounded-lg px-5 py-3 text-base w-full focus:outline-none focus:ring-2 focus:ring-teal-300 bg-white text-teal-950 placeholder-subtle font-medium"
            />
            <button
              onClick={handleSubmit}
              className="bg-teal-800 text-white px-5 py-3 rounded-lg text-base font-semibold hover:bg-teal-700 transition-colors duration-200 w-full"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Receive Newsletter
            </button>
            {error && (
              <div className="text-red-500 text-xs mt-1">{error}</div>
            )}
          </div>
          <div className="text-nav-text text-lg font-bold mt-4 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Also From Us</div>
          <ul className="flex flex-col gap-1">
            {alsoFromUs.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-white hover:text-teal-300 transition-colors duration-200 text-base md:text-lg font-medium"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Bottom Bar with darker background */}
      <div className="w-full bg-teal-950 mt-10 pt-6 pb-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm text-nav-text">
            <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
              {legalLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white hover:text-teal-300 transition-colors duration-200"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex gap-4 items-center justify-center md:justify-end">
              {socialLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white hover:text-teal-300 transition-colors duration-200"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="w-full text-center text-xs text-nav-text mt-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            © 2025 MVPRockets. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;