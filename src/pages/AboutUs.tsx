import AboutUs from '@/components/organisms/aboutus';
import Trusted from '@/components/organisms/trusted';
import { Stats } from '@/components/organisms/Stats';
import Progress from '@/components/organisms/Progress';
import Team from '@/components/organisms/team';


export default function AboutUsPage() {
  return (
    <>
      <AboutUs />
      <Stats />
      <Trusted variant="about" />
      <Progress />
      <Team />
    </>
  );
}
