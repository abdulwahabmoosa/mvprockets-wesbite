import React from "react";
import Reviewer from "./Reviewer";

const sampleStars = (
  <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {[...Array(5)].map((_, i) => (
      <polygon
        key={i}
        points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9"
        fill="#FFC107"
        transform={`translate(${i * 24}, 0)`}
      />
    ))}
  </svg>
);

export default {
  title: "Atoms/Reviewer",
  component: Reviewer,
};

const placeholderImg1 = "https://randomuser.me/api/portraits/men/32.jpg";
const placeholderImg2 = "https://randomuser.me/api/portraits/women/44.jpg";

export const DesktopFull = () => (
  <div className="bg-[#3A0E6D] p-8">
    <Reviewer
      image={placeholderImg1}
      name="Saurav Ghosh"
      rating={sampleStars}
      paragraph1="MVP rockets is one of the best things that happened to JIRA early on in our journey. Giri, Praveen and team bring decades of experience in building products."
      paragraph2="The MVP team are true partners, they understand the importance of delivering product as per business timelines as well as being extremely flexible."
      paragraph3="Lastly, Praveen, Sathish, Giri have been great mentors for the entire team. We did not have a CTO/HOE for a whole year and that speaks volumes for the trust and faith that we had in the MVP team."
    />
  </div>
);

export const DesktopNoRating = () => (
  <div className="bg-[#3A0E6D] p-8">
    <Reviewer
      image={placeholderImg2}
      name="Jane Doe"
      paragraph1="This is a review without a rating. The component should handle it gracefully."
      paragraph2="All text and images are customizable."
      paragraph3="You can use this for testimonials, reviews, or any similar content block."
    />
  </div>
);

export const MobileFull = () => (
  <div className="bg-[#3A0E6D] p-2 max-w-xs">
    <Reviewer
      image={placeholderImg1}
      name="Saurav Ghosh"
      rating={sampleStars}
      paragraph1="MVP rockets is one of the best things that happened to JIRA early on in our journey. Giri, Praveen and team bring decades of experience in building products."
      paragraph2="The MVP team are true partners, they understand the importance of delivering product as per business timelines as well as being extremely flexible."
      paragraph3="Lastly, Praveen, Sathish, Giri have been great mentors for the entire team. We did not have a CTO/HOE for a whole year and that speaks volumes for the trust and faith that we had in the MVP team."
    />
  </div>
);

export const MobileNoRating = () => (
  <div className="bg-[#3A0E6D] p-2 max-w-xs">
    <Reviewer
      image={placeholderImg2}
      name="Jane Doe"
      paragraph1="This is a review without a rating. The component should handle it gracefully."
      paragraph2="All text and images are customizable."
      paragraph3="You can use this for testimonials, reviews, or any similar content block."
    />
  </div>
); 