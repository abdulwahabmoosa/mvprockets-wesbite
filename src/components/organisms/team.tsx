import React from 'react';
import TeamMemberCard from '../atoms/TeamMemberCard';

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/\(.*?\)/g, '') // remove parentheses and their content
    .replace(/[^a-z0-9]+/g, '-') // replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, ''); // trim hyphens
}

const teamMembers = [
  {
    image: '/people/Giridharan-Natarajan-1.jpg',
    name: 'Giridharan N (CEO)',
    role: 'IIMB, Ex - Yahoo, Microsoft, Simplilearn, Babajob (CPO)',
  },
  {
    image: '/people/Praveen-1.jpg',
    name: 'Praveen MV (COO)',
    role: 'Ex - Thoughtworks, Babajob (CTO), 3x Entrepreneur, 1 exit',
  },
  {
    image: '/people/Satish-Bhat.jpg',
    name: 'Satish Bhat (CTO)',
    role: 'Architecture, CTO of various companies, 4x Entrepreneur',
  },
  {
    image: '/people/Ashitha-Shetty-CPO.jpg',
    name: 'Ashitha Shetty (CPO)',
    role: 'Ex - SAP, Product leadership',
  },
];

const JoinTeamCard = () => (
  <div className="bg-white rounded-2xl flex flex-col items-start justify-center p-6 w-full max-w-xs mx-auto h-full min-h-[320px]">
    <div className="text-[#3A0E6D] text-2xl font-extrabold mb-6 text-left" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      Interested to join our team ?
    </div>
    <a href="https://www.linkedin.com/company/mvprockets/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#E74177] text-xl font-semibold mt-2 text-left" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      Apply now <span className="text-2xl">→</span>
    </a>
  </div>
);

const Team = () => (
  <section className="w-full py-12 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, idx) => (
          <TeamMemberCard
            key={member.name + idx}
            image={member.image}
            name={member.name}
            role={member.role}
            profileUrl={`/team/${slugify(member.name)}`}
          />
        ))}
        <JoinTeamCard />
      </div>
    </div>
  </section>
);

export default Team; 