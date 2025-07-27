import React from 'react';

const LocationMap = () => (
  <section className="w-full flex flex-col items-center py-12 px-4">
    <h2 className="text-[#3A0E6D] text-2xl md:text-3xl font-extrabold mb-6 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      Our Location
    </h2>
    <div className="w-full max-w-8xl rounded-2xl overflow-hidden border border-[#E74177]/20 shadow-md">
      <iframe
        title="MVPRockets Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.393964479836!2d-106.9783566844646!3d44.78255397909809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x534e6f7e2e2b7e2b%3A0x7e2b7e2b7e2b7e2b!2s1309%20Coffeen%20Ave%20STE%201200%2C%20Sheridan%2C%20WY%2082801%2C%20USA!5e0!3m2!1sen!2sin!4v1718030000000!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
);

export default LocationMap; 