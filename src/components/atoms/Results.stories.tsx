import React from "react";
import Results from "./Results";

const placeholderImg = (
  <img src="https://placehold.co/300x200/svg" alt="Placeholder" className="w-60 h-40 object-contain" />
);
const icon1 = <span className="inline-block w-8 h-8 bg-[#E74177] rounded-full" />;
const icon2 = <span className="inline-block w-8 h-8 bg-[#3A0E6D] rounded-full" />;
const icon3 = <span className="inline-block w-8 h-8 bg-[#FFD700] rounded-full" />;

export default {
  title: "Atoms/Results",
  component: Results,
};

export const Default = () => (
  <Results
    header={<><div>2 Line Header Example</div><div>With Montserrat</div></>}
    description={<><div>This is a 2-line description for the Results component.</div><div>It is fully customizable and responsive.</div></>}
    image={placeholderImg}
    boxes={[
      {
        icon: icon1,
        header: "Box One",
        description: "This is a regular description for the first box.",
      },
      {
        icon: icon2,
        header: "Box Two",
        description: "This is a regular description for the second box.",
      },
      {
        icon: icon3,
        header: "Box Three",
        description: "This is a regular description for the third box.",
      },
    ]}
  />
);

export const WithLists = () => (
  <Results
    header={<><div>Results With Lists</div><div>Second Line</div></>}
    description={<><div>Some description here.</div><div>Another line here.</div></>}
    image={placeholderImg}
    boxes={[
      {
        icon: icon1,
        header: "Box One",
        description: "This is a regular description for the first box.",
      },
      {
        icon: icon2,
        header: "Box Two",
        description: ["First bullet point", "Second bullet point", "Third bullet point"],
        isList: true,
      },
      {
        icon: icon3,
        header: "Box Three",
        description: ["Another bullet", "And one more"],
        isList: true,
      },
    ]}
  />
); 