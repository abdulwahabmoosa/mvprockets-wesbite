import React from 'react';

const services = [
  {
    image: '/design/Product-Development-1.jpg',
    title: 'Product Development',
    desc: 'Build tailored, robust & scalable products for your business with MVPRockets.',
  },
  {
    image: '/design/MVP-Development-1.jpg',
    title: 'MVP Development',
    desc: 'Start small and scale big. Build the best MVP products in no time, starting today.',
  },
  {
    image: '/design/Tech-Stack-Modernization-1.jpg',
    title: 'Tech Stack Modernization',
    desc: 'Make your product agile and user-friendly by using state-of-the-art technology.',
  },
  {
    image: '/design/GenAI-Product-Development.jpg',
    title: 'GenAI Product Development',
    desc: 'Build intelligent products with cutting-edge Generative AI for your business.',
  },
];

interface BusinessesScaleSectionProps {
  variant: 'white' | 'lightpink';
}

const BusinessesScaleSection: React.FC<BusinessesScaleSectionProps> = ({ variant }) => {
  const isPink = variant === 'lightpink';
  return (
    <section className={`w-full py-12 px-4 ${isPink ? 'bg-[#FCF3F6]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#3A0E6D] text-3xl md:text-5xl font-extrabold text-center mb-4 md:mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          How We Help Businesses Scale?
        </h2>
        {isPink && (
          <p className="text-gray-600 text-lg md:text-xl text-center mb-10 md:mb-12 px-2 md:px-0" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Choose from our diverse range of services and get started with what you need!
          </p>
        )}
        <div className={`grid grid-cols-1 ${isPink ? 'md:grid-cols-4' : 'md:grid-cols-2'} gap-8 md:gap-10 max-w-5xl mx-auto`}>
          {services.map((service) => (
            <div key={service.title} className="flex flex-col items-center">
              <a href="/contact-us" className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md mb-6 transition-all duration-200 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#E74177]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </a>
              <div className="w-full text-center">
                <h3 className="text-[#3A0E6D] text-xl md:text-2xl font-extrabold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{service.title}</h3>
                <p className="text-gray-600 text-base md:text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessesScaleSection; 