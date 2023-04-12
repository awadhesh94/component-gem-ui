import React from 'react';
import { SvgProps } from '../types/Svg';

export const GalleryImage: React.FC<SvgProps> = ({ width = 60, height = 60, color }) => {
  return (
    <svg width={width} height={height} viewBox="0 -0.5 21 21" version="1.1">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-379.000000, -680.000000)" fill={color}>
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <path
              d="M336.65,538 L341.9,538 L341.9,533 L336.65,533 L336.65,538 Z M334.55,540 L344,540 L344,531 L334.55,531 L334.55,540 Z M336.65,527 L341.9,527 L341.9,522 L336.65,522 L336.65,527 Z M334.55,529 L344,529 L344,520 L334.55,520 L334.55,529 Z M325.1,538 L330.35,538 L330.35,522 L325.1,522 L325.1,538 Z M323,540 L332.45,540 L332.45,520 L323,520 L323,540 Z"
              id="gallery_grid_view-[#1402]"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};
