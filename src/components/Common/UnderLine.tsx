import React from 'react';
import { UnderLineProps } from '../../types/common';

export const UnderLine: React.FC<UnderLineProps> = ({ className }) => {
  return <div className={`underLine ${className}`} />;
};
