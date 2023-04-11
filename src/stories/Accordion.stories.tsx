import { Accordion } from '../components/Accordion';
import { Meta, StoryObj } from '@storybook/react';

import { title, description, accordionList } from '../content/accordion.json';

const meta = {
  title: 'Accordion',
  component: Accordion,
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithContent: Story = {
  args: {
    title,
    description,
    accordionList,
  },
};
