import React from "react";

const Framworks = () => (
  <section className="w-full py-16 md:py-30 px-4 md:px-28 flex flex-col md:flex-row items-center justify-between" style={{ fontFamily: 'Montserrat, sans-serif', background: '#fcfcfc' }}>
    {/* Text Content */}
    <div className="w-full md:w-1/2 flex flex-col items-start md:pr-12 mb-8 md:mb-0">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#3A0E6D] text-center md:text-left">
        Robust Tech Stack
      </h2>
      <p className="text-base md:text-lg mb-6 text-[#666] leading-relaxed md:font-normal text-left">
        We are experts in NestJS, NextJS, TypeScript, Flutter, MySQL, NoSQL, GraphDB, Elastic search, Redis, AWS, Azure, Terraform, SonarQube, Cucumber, Playwright, Appium, and React Storybook.
      </p>
      <p className="text-base md:text-lg text-[#666] leading-relaxed md:font-normal text-left">
        We use Extreme Programming, Test-Driven Development, CI/CD, Functional Automation, Atomic Design, SOLID Principles, and Saga Pattern to build high quality, scalable, production ready products in record time.
      </p>
    </div>
    {/* Image */}
    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
      <img src="/design/teckstack.png" alt="Robust Tech Stack" className="w-full max-w-xl h-60 md:h-100 object-contain" />
    </div>
  </section>
);

export default Framworks; 