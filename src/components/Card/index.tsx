import React from 'react';
import { CardProps } from '../../types/Card';

export const Card: React.FC<CardProps> = ({
  className,
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
            <h3 className="text-2xl font-brandMedium leading-relaxed capitalize">
              {title}
            </h3>
            {description && (
              <>
                <hr className="border-1 rounded my-5 bg-inherit" />
                <p className="font-brandLight leading-relaxed text-sm">
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
