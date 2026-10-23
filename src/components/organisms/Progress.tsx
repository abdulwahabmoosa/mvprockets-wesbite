import React from "react";

const Progress = () => {
  return (
    <section className="relative w-full py-4 md:py-8 px-3 md:px-16 bg-teal-50 overflow-hidden ">
      {/* Blue dots top left using image */}
      <img
        src="/design/dots-shape.svg"
        alt="Blue dots background"
        className="absolute left-0 top-0 z-0 w-16 md:w-40"
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      />
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        <div className="text-center my-10 md:my-16">
          <div className="text-lg md:text-xl text-teal-800 font-semibold tracking-widest mb-2 uppercase" style={{ letterSpacing: 2 }}>TIMELINE</div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-teal-950" style={{ fontFamily: 'Montserrat, sans-serif' }}>Progress</h2>
        </div>
      </div>
    </section>
  );
};

export default Progress; 