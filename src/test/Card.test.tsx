import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Card } from '../components/Card';
import { CardProps } from '../types/Card';
import { PostImage } from '../images/PostImage';

import { title, description } from '../content/card.json';

test('Card renders correctly', () => {
  render(<Card />);
});

test('Card loads data', () => {
  const props: CardProps = {
    className: 'bg-light-green text-coal',
    icon: <PostImage color="#0f0d0e" />,
    subTitle: '01',
    title,
    description,
  };
  render(<Card {...props} />);

  const iconContent = screen.getByTestId('card-icon');
  const subTitleContent = screen.getByTestId('card-subTitle');
  const titleContent = screen.getByTestId('card-title');
  const descriptionContent = screen.getByTestId('card-description');

  expect(iconContent).toBeInTheDocument();
  expect(subTitleContent).toHaveTextContent('01');
  expect(titleContent).toHaveTextContent(title);
  expect(descriptionContent).toHaveTextContent(description);
});
