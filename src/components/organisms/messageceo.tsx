import React from "react";
import Reviewer from "../atoms/Reviewer";

const ceoImg = "/people/Giridharan-Natarajan-1.jpg"; // Use the actual CEO image from public/people

const MessageCeo = () => (
  <section className="w-full flex flex-col items-center justify-center py-14 px-2" style={{ background: '#EEF6F7' }}>
    {/* Section Header */}
    <div className="flex flex-col items-center mb-6">
      <div className="text-teal-800 text-lg font-semibold tracking-widest mb-2 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: 2 }}>
        How it started!
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-teal-950 text-center mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        Message from CEO
      </h2>
    </div>
    <Reviewer
      image={ceoImg}
      name={<span style={{
        marginBottom: 30,
        color: '#0B2A2E',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: 24,
        fontWeight: 800,
        display: 'block',
        lineHeight: '1.3',
      }}>Giridharan Natarajan</span>}
      paragraph1={<span style={{
        textAlign: 'center',
        color: '#4F5B61',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: 16,
        fontWeight: 500,  
        lineHeight: '28px',
        display: 'block',
        marginBottom: 20,
      }}>Welcome to MVPRockets! We believe startups and new tech businesses can change the world, and launching a successful product has never been easier. However, there’s a lot of noise around this. I & my co-founder founded MVPRockets with a singular vision of creating/helping create 1000 successful ventures and impact over a billion lives.</span>}
      paragraph2={<span style={{
        textAlign: 'center',
        color: '#4F5B61',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: 16,
        fontWeight: 500,
        lineHeight: '28px',
        display: 'block',
        marginBottom: 20,
      }}>As the CEO of MVPRockets today, I’m proud to lead a <span style={{ color: '#0E5964', fontWeight: 800 }}>team of 140+ Rockstars</span> building high quality products for high quality businesses. In just four years, we’ve partnered with over 30 businesses, launched multiple high-quality products, and impacted millions of lives and have built very strong reputation of being the best in New product development. We are on an exciting journey to do so much more.</span>}
      paragraph3={<span style={{
        textAlign: 'center',
        color: '#4F5B61',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: 16,
        fontWeight: 500,
        lineHeight: '28px',
        display: 'block',
        marginBottom: 20,
      }}>If you have an idea and need a partner to build a generation-defining company, talk to us.</span>}
      className="max-w-md md:max-w-5xl"
    />
    {/* LinkedIn CTA */}
    <div className="w-full flex flex-col items-center mt-6">
      <div className="text-center text-[20px] md:text-[22px] font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#0B2A2E', letterSpacing: 0.2 }}>
        Hello <span role="img" aria-label="wave">👋</span> Reach me on <a href="https://www.linkedin.com/in/giridharann/" target="_blank" rel="noopener noreferrer" className="text-teal-800 font-bold underline underline-offset-4 decoration-teal-800 hover:text-teal-700">LinkedIn</a>
      </div>
    </div>
  </section>
);

export default MessageCeo; 