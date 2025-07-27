import React from 'react';
import { notFound } from 'next/navigation';

const teamMembers = [
  {
    slug: 'giridharan-n',
    image: '/people/Giridharan-Natarajan-1.jpg',
    name: 'Giridharan N (CEO)',
    role: 'IIMB, Ex - Yahoo, Microsoft, Simplilearn, Babajob (CPO)',
    linkedin: 'https://www.linkedin.com/in/giridharann/',
  },
  {
    slug: 'praveen-mv',
    image: '/people/Praveen-1.jpg',
    name: 'Praveen MV (COO)',
    role: 'Ex - Thoughtworks, Babajob (CTO), 3x Entrepreneur, 1 exit',
    linkedin: 'https://www.linkedin.com/in/mvprav/',
  },
  {
    slug: 'satish-bhat',
    image: '/people/Satish-Bhat.jpg',
    name: 'Satish Bhat (CTO)',
    role: 'Architecture, CTO of various companies, 4x Entrepreneur',
    linkedin: 'https://www.linkedin.com/in/bhatsatish/',
  },
  {
    slug: 'ashitha-shetty',
    image: '/people/Ashitha-Shetty-CPO.jpg',
    name: 'Ashitha Shetty (CPO)',
    role: 'Ex - SAP, Product leadership',
    linkedin: 'https://www.linkedin.com/in/ashitha-shetty-8ba22bb2/',
  },
];

export default function TeamMemberProfile({ params }: { params: { slug: string } }) {
  const member = teamMembers.find(m => m.slug === params.slug);
  if (!member) return notFound();

  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-8">
        <img
          src={member.image}
          alt={member.name}
          className="w-full max-w-xs aspect-[3/5] object-cover rounded-lg"
          style={{ maxHeight: 320, minHeight: 160 }}
        />
        <div className="flex-1 w-full mt-6 md:mt-0 md:ml-8">
          <h1 className="text-[#3A0E6D] text-xl md:text-2xl font-extrabold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>{member.name}</h1>
          <div className="text-gray-500 text-base md:text-lg font-medium mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{member.role}</div>
          <div className="text-gray-400 text-sm md:text-base mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>{member.role}</div>
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-block mt-2">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="28" height="28" rx="6" fill="#3A0E6D"/>
              <path d="M19.333 19.333h-2.334v-3.5c0-.833-.667-1.5-1.5-1.5s-1.5.667-1.5 1.5v3.5h-2.333v-7h2.333v1c.5-.667 1.333-1 2.167-1 1.667 0 3 1.333 3 3v4zM9.667 11.667c-.646 0-1.167-.521-1.167-1.167 0-.646.521-1.167 1.167-1.167.646 0 1.166.521 1.166 1.167 0 .646-.52 1.167-1.166 1.167zm-1.167 7.666h2.334v-7H8.5v7z" fill="#fff"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 