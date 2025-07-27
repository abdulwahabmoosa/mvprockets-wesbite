import React from 'react';

interface TeamMemberCardProps {
  image: string;
  name: string;
  role: string;
  profileUrl: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ image, name, role, profileUrl }) => (
  <a href={profileUrl} className="block hover:shadow-lg transition-shadow duration-200 rounded-2xl">
    <div className="bg-white rounded-2xl flex flex-col items-start p-4 w-full max-w-md mx-auto">
      <img
        src={image}
        alt={name}
        className="w-full aspect-[3/5] object-cover rounded-md mb-4"
        style={{ maxHeight: 500, minHeight: 220 }}
      />
      <div className="w-full">
        <div className="text-[#3A0E6D] text-xl font-extrabold mb-1 text-left" style={{ fontFamily: 'Montserrat, sans-serif' }}>{name}</div>
        <div className="text-gray-500 text-base font-medium text-left" style={{ fontFamily: 'Montserrat, sans-serif' }}>{role}</div>
      </div>
    </div>
  </a>
);

export default TeamMemberCard; 