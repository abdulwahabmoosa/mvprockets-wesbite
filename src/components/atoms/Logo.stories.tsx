import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Logo from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Atoms/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  render: () => <Logo />, 
}; 