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
    icon: <PostImage color="#0f0d0e" />,
    subTitle: '01',
    title,
    description,
  },
};

export const _NoDescription = {
  args: {
    className: 'bg-brand-yellow text-brand-coal',
    icon: <FormatImage color="#0f0d0e" />,
    subTitle: '02',
    title,
  },
};

export const _NoSubTitle = {
  args: {
    className: 'bg-brand-pink text-brand-coal',
    icon: <GalleryImage color="#0f0d0e" />,
    title,
    description,
  },
};

export const _NoIcon = {
  args: {
    className: 'bg-brand-coal text-brand-biege',
    subTitle: '04',
    title,
    description,
  },
};

export const _WithDarkTheme = {
  args: {
    className: 'bg-brand-coal text-brand-biege',
    icon: <PostImage color="#f9f4da" />,
    subTitle: '05',
    title,
    description,
  },
};
