import React from 'react';
import { CardProps } from '../../types/Card';

export const Card: React.FC<CardProps> = ({ className, icon, subTitle, title, description }) => {
  const mainStyle = `max-w-[350px] ${icon && 'min-h-[500px]'}`;
  const customStyle = `${icon && 'gap-10'} ${className}`;

  return (
    <section className={`flex break-words relative min-w-0 h-auto ${mainStyle}`}>
      <div className={`p-8 flex flex-col justify-between rounded-2xl ${customStyle}`}>
        {icon && (
          <div className="cardIcon" data-testid="card-icon">
            {icon}
          </div>
        )}
        <div className="flex flex-col justify-between">
          <div className="cardHeader">
            {subTitle && (
              <span className="font-brandMedium" data-testid="card-subTitle">
                {subTitle}
              </span>
            )}
            {title && (
              <h4
                className="font-brandBold text-2xl text-inherit leading-snug"
                data-testid="card-title"
              >
                {title}
              </h4>
            )}
          </div>
          {title && description && (
            <hr className="border-[1px] rounded bg-inherit my-4" data-testid="card-underline" />
          )}
          {description && (
            <p className="flex font-brandLight leading-normal" data-testid="card-description">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
