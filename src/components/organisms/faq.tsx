import React, { useState } from 'react';

const faqs = [
  {
    question: 'How are you different from any other product development shops?',
    answer: `What a tech startup needs is a high quality product team, that consists of a product manager, designers, developers, QA and Analytics team – not just a group of developers.\n\nThe MVPRockets leaders have started, run and exited tech product companies before – They have occupied senior positions in v successful tech startups & learnt from their experiences\n\nThey have essentially walked the path the tech entrepreneurs are expected to walk the first few years & they have walked it multiple times. MVPRockets do not only take care of your tech, but also advise you on best practices on Product, Design, UX, GTM, Blitzscaling etc. & help set your company up for success from all these fronts. So, when you work with MVPRockets, you not only get a product developed, but you also benefit from the experience of the entire team in building & running tech startups.\n\nThis is the difference between a traditional product dev shop and MVPRockets – we understand how a successful product team is built & have experience building this multiple times in the past. This makes us different 🙂`
  },
  {
    question: 'How can you launch an MVP so fast?',
    answer: `We have built a ton of modules thats required for product building – like Sign Up/Login, Forgot password, Email Integration, Payment Gateway integration etc.. Which we either re-use & that helps us reduce time to market significantly`
  },
  {
    question: 'What techologies do you use?',
    answer: `We use Javascript frameworks for backend, Flutter for App development, Mongo for DB and AWS for hosting. We build products in clean, micro services architecture`
  },
  {
    question: 'Do we have to change technologies when we are ready to scale?',
    answer: `No. Absolutely not. The tech choices we make are good to get you to millions of users in scale & beyond. We do not make sub-par tech choices for the sake of speed.`
  },
  {
    question: 'Do you work for equity in startups?',
    answer: `No, Sorry. Its your company and we think you should completely own it. We are happy with money 🙂`
  },
  {
    question: 'Do you also help with marketing?',
    answer: `While we will be involved in marketing & also build features that would help in organic growth, at this point, we do not do complete marketing for you. We have recommendations though`
  },
  {
    question: 'Can I get design done elsewhere?',
    answer: `One of our core strengths is that we understand how startups work – this is our 4th startup as founders. We would encourage you to use our expertise in identifing the scope of MVPs. Post that if you wish, we are open to collaborating with another design agency.`
  },
  {
    question: 'Can I get only the designs done with you?',
    answer: `We are open to exploring different models with our customers, but would love to work the entire way with our clients.`
  },
];

const Faq = () => {
  const [open, setOpen] = useState(Array(faqs.length).fill(false));

  const toggle = (idx: number) => {
    setOpen((prev) => {
      const next = [...prev];
      next[idx] = !next[idx];
      return next;
    });
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 px-4 md:px-8 items-start">
        {/* Left: Section Header and Copy */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-xl w-full mb-8 md:mb-0">
          <div className="text-teal-800 text-lg font-semibold tracking-widest mb-2 uppercase" style={{ letterSpacing: 2 }}>
            Some
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-teal-950 mb-4 md:mb-16" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Frequently Asked<br />Questions
          </h2>
          <p className="text-muted text-lg md:text-xl mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            As seasoned innovators and technology pioneers, we partner in your success, driving digital transformation and advancing your business through cutting-edge solutions and strategic insights.
          </p>
          <button className="bg-teal-800 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors duration-200" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Ask any Question
          </button>
        </div>
        {/* Right: FAQ List */}
        <div className="flex-1 w-full max-w-2xl bg-white rounded-2xl shadow-md border border-line pt-2 pb-4 px-0 md:px-0" style={{ boxShadow: '0 4px 32px 0 rgba(14,89,100,0.07)' }}>
          <div className="h-2 w-full rounded-t-2xl bg-gradient-to-r from-teal-800 to-[#fff] mb-2" />
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-line last:border-b-0">
              <button
                className={`w-full text-left px-6 py-5 focus:outline-none flex items-center justify-between transition-colors ${open[idx] ? 'text-teal-800 font-bold bg-teal-50' : 'text-teal-950 font-semibold bg-white hover:bg-teal-50'}`}
                onClick={() => toggle(idx)}
                aria-expanded={open[idx]}
                aria-controls={`faq-panel-${idx}`}
              >
                <span className="text-lg md:text-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>{faq.question}</span>
                <svg
                  className={`ml-4 transition-transform duration-300 ${open[idx] ? 'rotate-180' : ''}`}
                  width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke={open[idx] ? '#0E5964' : '#0B2A2E'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {open[idx] && (
                <div
                  id={`faq-panel-${idx}`}
                  className="px-6 pb-6 text-teal-950 text-base md:text-lg whitespace-pre-line"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq; 