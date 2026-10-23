import { useEffect } from "react";
import { HeroSection } from '@/components/organisms/HeroSection';
import { Stats } from '@/components/organisms/Stats';
import { Trusted } from '@/components/organisms/trusted';
import { WhyUs } from '@/components/organisms/whyus';
import Puzzle  from '@/components/organisms/puzzle';
import { DomainsExpertise } from '@/components/organisms/domainsexpertise';
import MessageCeo  from '@/components/organisms/messageceo';
import  Frameworks  from '@/components/organisms/framworks';
import CaseStudies from '@/components/organisms/casestudies';
import Contact from '@/components/organisms/contact';
import OurClients from '@/components/organisms/ourclients';
import Faq from '@/components/organisms/faq';

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.replace('#', ''));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // slight delay to ensure DOM is ready
      }
    }
  }, []);

  return (
    <>
      <HeroSection />
      <Stats />
      <Trusted />
      <WhyUs />
      <Puzzle />
      <Frameworks />
      <DomainsExpertise />
      <MessageCeo />
      <section id="case-studies">
        <CaseStudies />
      </section>
      <Contact />
      <section id="testimonials">
        <OurClients />
      </section>
      <Faq />
    </>
  );
}