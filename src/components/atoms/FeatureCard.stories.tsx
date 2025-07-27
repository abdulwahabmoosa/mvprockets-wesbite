import React from "react";
import FeatureCard from "./FeatureCard";

export default {
  title: "Atoms/FeatureCard",
  component: FeatureCard,
};

const icon = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#E74177" />
    <text x="16" y="22" textAnchor="middle" fontSize="18" fill="#fff" fontWeight="bold">🏅</text>
  </svg>
);

export const Default = () => (
  <FeatureCard
    icon={icon}
    title="Product Leadership"
    text="Our founders have decades of product leadership experience in some of the best companies (Yahoo, Microsoft, Thoughtworks, SAP)"
  />
);

export const WithSubheader = () => (
  <FeatureCard
    icon={icon}
    title="EdTech"
    subheader="3 Products"
    text="Transforming the EdTech industry by building solutions that empower students, educators and all-size institutions."
    bg="bg-[#3A0E6D]"
    textColor="text-white"
  />
);

export const CustomColors = () => (
  <FeatureCard
    icon={icon}
    title="Custom Card"
    subheader="Special"
    text="This card uses a custom background and text color."
    bg="bg-[#FDF6F0]"
    textColor="text-[#E74177]"
  />
);

export const ResponsiveGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[...Array(6)].map((_, i) => (
      <FeatureCard
        key={i}
        icon={icon}
        title={`Feature ${i + 1}`}
        subheader={i % 2 === 0 ? "Subheader" : undefined}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    ))}
  </div>
); 