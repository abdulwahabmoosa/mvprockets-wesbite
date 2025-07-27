import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import TeamMemberCard from './TeamMemberCard';

export default {
  title: 'Atoms/TeamMemberCard',
  component: TeamMemberCard,
} as Meta<typeof TeamMemberCard>;

const Template: StoryFn<typeof TeamMemberCard> = (args) => <TeamMemberCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: '/people/Giridharan-Natarajan.jpg',
  name: 'Giridharan N (CEO)',
  role: 'IIMB, Ex - Yahoo, Microsoft, Simplilearn, Babajob (CPO)',
};

export const Ashitha = Template.bind({});
Ashitha.args = {
  image: '/people/Ashitha-Shetty-CPO.jpg',
  name: 'Ashitha Shetty (CPO)',
  role: 'Ex - SAP, Product leadership',
}; 