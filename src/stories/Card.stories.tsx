import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Card } from '../components/Card';
import { PostImage } from '../images/PostImage';

import { title, description } from '../content/card.json';

const meta = {
  title: 'Component/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'hidden',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Card: Story = {
  args: {
    className: 'bg-brand-light-green text-brand-coal',
    icon: <PostImage color="#0f0d0e" />,
    subTitle: '01',
    title,
    description,
  },
};
