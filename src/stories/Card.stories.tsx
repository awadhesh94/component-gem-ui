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
    className: 'bg-light-green text-coal',
    icon: <PostImage color="#0f0d0e" />,
    subTitle: '01',
    title,
    description,
  },
};

export const NoIcon: Story = {
  args: {
    className: 'bg-yellow text-coal',
    subTitle: '01',
    title,
    description,
  },
};

export const NoSubTitle: Story = {
  args: {
    className: 'bg-pink text-coal',
    title,
    description,
  },
};

export const NoTitle: Story = {
  args: {
    className: 'bg-purple text-white',
    description,
  },
};

export const NoDescription: Story = {
  args: {
    className: 'bg-coal text-biege',
    title,
  },
};
