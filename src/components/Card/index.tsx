import React from 'react';
import { CardProps } from '../../types/card';
import { UnderLine } from '../Common/UnderLine';

export const Card: React.FC<CardProps> = ({
  className,
  textColor,
  icon,
  subTitle,
  title,
  description,
}) => {
  return (
    <div className="flex">
      <div className="cardContainer">
        <div className={`cardWrapper ${className}`}>
          <div className="card-icon">{icon}</div>
          <div className="grid mt-16">
            <span className="font-brandMedium">{subTitle}</span>
            <h3 className="text-2xl font-brandMedium capitalize">{title}</h3>
            {description && (
              <>
                <UnderLine className={textColor} />
                <p className="font-brandLight leading-normal text-sm">
                  {description}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
