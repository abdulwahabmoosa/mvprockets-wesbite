import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Text } from './Text';

const meta = {
  title: 'Atoms/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl'],
    },
    weight: {
      control: { type: 'radio' },
      options: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'],
    },
    label: { control: 'text', defaultValue: 'Sample Text' },
    className: { control: 'text' },
    as: { control: 'text', defaultValue: 'span' },
  },
  args: {
    size: 'base',
    weight: 'normal',
    label: 'Sample Text',
    as: 'span',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomColor: Story = {
  args: {
    label: 'Custom Green Text',
    className: "text-amber-700",
  },
};
