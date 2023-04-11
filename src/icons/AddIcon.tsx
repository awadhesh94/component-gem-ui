import React from 'react';
import { SvgProps } from '../types/Svg';

export const AddIcon: React.FC<SvgProps> = ({ width = 60, height = 60 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="14" fill="#D5E4F9"></circle>
      <rect
        x="8"
        y="14.5"
        width="1"
        height="12"
        rx="0.5"
        transform="rotate(-90 8 14.5)"
        fill="#162C49"
      ></rect>
      <rect x="13.5" y="8" width="1" height="12" rx="0.5" fill="#162C49"></rect>
    </svg>
  );
};
