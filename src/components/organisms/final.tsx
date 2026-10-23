import React, { useState } from 'react';

const whatsappLink = "https://wa.me/919087411480";
const emailAddress = "buildmyproject@mvprockets.com";

const Final = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("The field is required.");
    } else {
      setError("");
      // No actual submit for now
    }
  };

  return (
    <section className="w-full bg-teal-950 py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Heading and Form */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-0">
          <h2 className="text-white text-2xl md:text-3xl font-extrabold leading-tight md:max-w-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Start Transforming Your Vision <br className="hidden md:block" />
            Into Reality, Today!
          </h2>
          <form className="flex flex-col md:flex-row md:items-center gap-4 md:gap-4 w-full md:w-auto relative" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="rounded-lg px-4 py-3 text-base md:text-base w-full md:w-[400px] focus:outline-none focus:ring-2 focus:ring-teal-300 bg-white text-teal-950 placeholder-subtle font-medium"
            />
            <button
              type="submit"
              className="bg-teal-800 text-white px-6 py-3 rounded-lg text-base md:text-base font-semibold hover:bg-teal-700 transition-colors duration-200 w-full md:w-auto"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Talk to an expert
            </button>
            {error && (
              <div className="text-red-500 text-xs absolute -bottom-6 left-0">{error}</div>
            )}
          </form>
        </div>
        
        {/* Divider */}
        <hr className="border-t border-nav-text/30 my-4" />
        
        {/* Contact Cards */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full md:justify-start">
          {/* WhatsApp Card */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 md:flex-none md:w-[400px] flex items-center gap-4 border border-white rounded-2xl px-6 py-6 md:py-3 bg-transparent hover:bg-white/5 transition-all duration-200 group"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white group-hover:bg-teal-800 transition-all duration-200 min-w-[56px] min-h-[56px] max-w-[56px] max-h-[56px]">
              {/* WhatsApp Icon SVG */}
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:text-white text-teal-800 transition-colors duration-200"
              >
                <path 
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.463 3.488"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="flex flex-col text-white">
              <span className="text-xl font-bold">WhatsApp</span>
              <span className="text-base font-medium text-white/80">Send a message</span>
            </span>
          </a>
          
          {/* Email Card */}
          <a
            href={`mailto:${emailAddress}`}
            className="flex-1 md:flex-none md:w-[400px] flex items-center gap-4 border border-white rounded-2xl px-6 py-6 md:py-3 bg-transparent hover:bg-white/5 transition-all duration-200 group"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white group-hover:bg-teal-800 transition-all duration-200 min-w-[56px] min-h-[56px] max-w-[56px] max-h-[56px]">
              {/* Email Icon SVG */}
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:text-white text-teal-800 transition-colors duration-200"
              >
                <path 
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <polyline 
                  points="22,6 12,13 2,6" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="flex flex-col text-white">
              <span className="text-xl font-bold">Email Us</span>
              <span className="text-base font-medium text-white/80">{emailAddress}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Final;