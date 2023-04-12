import { Meta, StoryObj } from '@storybook/react';
import { Collapse } from '../components/Collapse';

import { title, description } from '../content/collapse.json';

const meta = {
  title: 'Component/Collapse',
  component: Collapse,
  tags: ['autodocs'],
} satisfies Meta<typeof Collapse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Collapse: Story = {
  args: {
    title,
    description,
    open: true,
  },
};
