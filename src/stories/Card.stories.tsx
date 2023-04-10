import React from 'react';
import { Card } from '../components/Card';
import { PostImage } from '../images/PostImage';
import { FormatImage } from '../images/FormatImage';
import { GalleryImage } from '../images/GalleryImage';

import { title, description } from '../content/card.json';

export default {
  title: 'Card',
  component: Card,
};

export const _WithContent = {
  args: {
    className: 'bg-brand-light-green text-brand-coal',
    icon: <PostImage />,
    subTitle: '01',
    title,
    description,
  },
};

export const _NoDescription = {
  args: {
    className: 'bg-brand-yellow text-brand-coal',
    icon: <FormatImage />,
    subTitle: '02',
    title,
  },
};

export const _NoSubTitle = {
  args: {
    className: 'bg-brand-pink text-brand-coal',
    icon: <GalleryImage />,
    title,
    description,
  },
};
