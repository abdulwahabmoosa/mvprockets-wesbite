import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Link from './Link';

const meta: Meta<typeof Link> = {
  title: 'Atoms/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  render: () => <Link href="/about-us">About Us</Link>,
}; 