import Trusted from '@/components/organisms/trusted';
import { Stats } from '@/components/organisms/Stats';
import Contact from '@/components/organisms/contact';
import OurClients from '@/components/organisms/ourclients';
import ServicesHero from '@/components/organisms/serviceshero';
import BusinessesScaleSection from '@/components/organisms/BusinessesScaleSection';




export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <Stats />
      <Trusted variant="services" />
      <BusinessesScaleSection variant="white" />
      <Contact variant="bgimg" />
      <OurClients />
      <BusinessesScaleSection variant="lightpink" />
    </>
  );
}
