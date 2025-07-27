"use client";
import React from "react";
import FeatureCard from "../atoms/FeatureCard";

const domains = [
  {
    title: "EdTech",
    subheader: "3 Products",
    text: "Transforming the EdTech industry by building solutions that empower students, educators and all-size institutions.",
    icon: (
      <>
        <svg width="48" height="40" fill="none" viewBox="0 0 48 40" className="block md:hidden">
          <rect x="0" y="0" width="48" height="40" rx="20" fill="#E74177"/>
          <text x="24" y="27" textAnchor="middle" fontSize="22" fill="#fff" fontWeight="bold">💻</text>
        </svg>
        <svg width="44" height="44" fill="none" viewBox="0 0 44 44" className="hidden md:block">
          <circle cx="22" cy="22" r="22" fill="#E74177"/>
          <text x="22" y="30" textAnchor="middle" fontSize="24" fill="#fff" fontWeight="bold">💻</text>
        </svg>
      </>
    ),
  },
  {
    title: "Marketplaces",
    subheader: "3 Products",
    text: "User-friendly marketplaces with all the features needed to build a perfect eCommerce venture.",
    icon: (
      <>
        <svg width="48" height="40" fill="none" viewBox="0 0 48 40" className="block md:hidden">
          <rect x="0" y="0" width="48" height="40" rx="20" fill="#E74177"/>
          <text x="24" y="27" textAnchor="middle" fontSize="22" fill="#fff" fontWeight="bold">🏪</text>
        </svg>
        <svg width="44" height="44" fill="none" viewBox="0 0 44 44" className="hidden md:block">
          <circle cx="22" cy="22" r="22" fill="#E74177"/>
          <text x="22" y="30" textAnchor="middle" fontSize="24" fill="#fff" fontWeight="bold">🏪</text>
        </svg>
      </>
    ),
  },
  {
    title: "SaaS",
    subheader: "3 Products",
    text: "Re-inventing the SaaS industry by building reliable & SaaS products tailored to meet business needs.",
    icon: (
      <>
        <svg width="48" height="40" fill="none" viewBox="0 0 48 40" className="block md:hidden">
          <rect x="0" y="0" width="48" height="40" rx="20" fill="#E74177"/>
          <text x="24" y="27" textAnchor="middle" fontSize="22" fill="#fff" fontWeight="bold">☁️</text>
        </svg>
        <svg width="44" height="44" fill="none" viewBox="0 0 44 44" className="hidden md:block">
          <circle cx="22" cy="22" r="22" fill="#E74177"/>
          <text x="22" y="30" textAnchor="middle" fontSize="24" fill="#fff" fontWeight="bold">☁️</text>
        </svg>
      </>
    ),
  },
  {
    title: "Healthcare",
    subheader: "3 Products",
    text: "Making healthcare more safe by improving patient care and streamlining processes with technology.",
    icon: (
      <>
        <svg width="48" height="40" fill="none" viewBox="0 0 48 40" className="block md:hidden">
          <rect x="0" y="0" width="48" height="40" rx="20" fill="#E74177"/>
          <text x="24" y="27" textAnchor="middle" fontSize="22" fill="#fff" fontWeight="bold">🩺</text>
        </svg>
        <svg width="44" height="44" fill="none" viewBox="0 0 44 44" className="hidden md:block">
          <circle cx="22" cy="22" r="22" fill="#E74177"/>
          <text x="22" y="30" textAnchor="middle" fontSize="24" fill="#fff" fontWeight="bold">🩺</text>
        </svg>
      </>
    ),
  },
  {
    title: "Supply Chain/Logistics",
    subheader: "2 Products",
    text: "Doubling efficiency & cutting with innovative inventory management, real-time tracking and streamlining operations.",
    icon: (
      <>
        <svg width="48" height="40" fill="none" viewBox="0 0 48 40" className="block md:hidden">
          <rect x="0" y="0" width="48" height="40" rx="20" fill="#E74177"/>
          <text x="24" y="27" textAnchor="middle" fontSize="22" fill="#fff" fontWeight="bold">📦</text>
        </svg>
        <svg width="44" height="44" fill="none" viewBox="0 0 44 44" className="hidden md:block">
          <circle cx="22" cy="22" r="22" fill="#E74177"/>
          <text x="22" y="30" textAnchor="middle" fontSize="24" fill="#fff" fontWeight="bold">📦</text>
        </svg>
      </>
    ),
  },
  {
    title: "Automotive",
    subheader: "2 Products",
    text: "Transforming the automotive sector with advanced connected car software, driver-assistance software and more.",
    icon: (
      <>
        <svg width="48" height="40" fill="none" viewBox="0 0 48 40" className="block md:hidden">
          <rect x="0" y="0" width="48" height="40" rx="20" fill="#E74177"/>
          <text x="24" y="27" textAnchor="middle" fontSize="22" fill="#fff" fontWeight="bold">🚗</text>
        </svg>
        <svg width="44" height="44" fill="none" viewBox="0 0 44 44" className="hidden md:block">
          <circle cx="22" cy="22" r="22" fill="#E74177"/>
          <text x="22" y="30" textAnchor="middle" fontSize="24" fill="#fff" fontWeight="bold">🚗</text>
        </svg>
      </>
    ),
  },
  {
    title: "Fintech",
    subheader: "6 Products",
    text: "Making the Fintech space more safe with secure, robust and interactive digital banking applications, payment gateways, etc.",
    icon: (
      <>
        <svg width="48" height="40" fill="none" viewBox="0 0 48 40" className="block md:hidden">
          <rect x="0" y="0" width="48" height="40" rx="20" fill="#E74177"/>
          <text x="24" y="27" textAnchor="middle" fontSize="22" fill="#fff" fontWeight="bold">💳</text>
        </svg>
        <svg width="44" height="44" fill="none" viewBox="0 0 44 44" className="hidden md:block">
          <circle cx="22" cy="22" r="22" fill="#E74177"/>
          <text x="22" y="30" textAnchor="middle" fontSize="24" fill="#fff" fontWeight="bold">💳</text>
        </svg>
      </>
    ),
  },
  {
    title: "Others",
    subheader: "8 Products",
    text: "Customized tech solutions for any business sector - innovation tailored & delivered across industries!",
    icon: (
      <>
        <svg width="48" height="40" fill="none" viewBox="0 0 48 40" className="block md:hidden">
          <rect x="0" y="0" width="48" height="40" rx="20" fill="#E74177"/>
          <text x="24" y="27" textAnchor="middle" fontSize="22" fill="#fff" fontWeight="bold">🔧</text>
        </svg>
        <svg width="44" height="44" fill="none" viewBox="0 0 44 44" className="hidden md:block">
          <circle cx="22" cy="22" r="22" fill="#E74177"/>
          <text x="22" y="30" textAnchor="middle" fontSize="24" fill="#fff" fontWeight="bold">🔧</text>
        </svg>
      </>
    ),
  },
];

export const DomainsExpertise = () => {
  // Map domain title to icon file name
  const getIconFile = (title: string) => {
    switch (title) {
      case "EdTech": return "EdTech.svg";
      case "Marketplaces": return "Marketplaces.svg";
      case "SaaS": return "Saas.svg";
      case "Healthcare": return "healthcare.svg";
      case "Supply Chain/Logistics": return "SupplyChain.svg";
      case "Automotive": return "automotive.svg";
      case "Fintech": return "Fintech.svg";
      case "Others": return "others.svg";
      default: return "others.svg";
    }
  };
  return (
    <section className="w-full bg-[#3A0E6D] py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Domains Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 md:gap-x-12 gap-y-4 md:gap-y-10 w-full">
          {domains.map((domain, i) => (
            <div
              key={domain.title}
              className="flex flex-row items-start bg-transparent p-0"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <div className="flex-shrink-0 mr-4">
                <div className="bg-[#E74177] w-14 h-14 rounded-[26px] md:w-12 md:h-12 md:rounded-full flex items-center justify-center">
                  <img
                    src={`/design/icons/${getIconFile(domain.title)}`}
                    alt={domain.title + ' icon'}
                    className="w-6 h-6 md:w-7 md:h-7"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <h3
                  style={{
                    marginBottom: 10,
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 22,
                    fontWeight: 600,
                    lineHeight: '1.5em',
                    letterSpacing: -0.5,
                    color: '#fff',
                  }}
                >
                  {domain.title}
                </h3>
                <h5
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: '#ff7fb5',
                    marginTop: -10,
                    marginBottom: 15,
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  {domain.subheader}
                </h5>
                <p className="text-white text-base font-normal leading-snug" style={{ fontFamily: 'Montserrat, sans-serif' }}>{domain.text}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Certifications Section */}
        <div className="w-full flex flex-col items-center mt-16">
          <hr className="w-full max-w-5xl border-t border-white/50 mb-12 mt-8" />
          <div className="text-center mb-6">
            <div className="text-[#E74177] text-lg font-semibold tracking-widest mb-2 uppercase" style={{ letterSpacing: 2 }}>
              Our Products Are Compliant & Secure
            </div>
            <h3 className="text-2xl md:text-4xl font-normal text-white mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              We build ISO, SOC2, GDPR & VAPT compliant products
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <img src="/design/certifications/ISO.svg" alt="ISO" className="w-32 h-32 object-contain" />
            <img src="/design/certifications/AICPA.svg" alt="AICPA SOC2" className="w-32 h-32 object-contain" />
            <img src="/design/certifications/GDPR.svg" alt="GDPR" className="w-32 h-32 object-contain" />
            <img src="/design/certifications/VAPT.svg" alt="VAPT" className="w-32 h-32 object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainsExpertise; 