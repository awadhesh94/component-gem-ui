import React from 'react';
import { CardProps } from '../../types/Card';

export const Card: React.FC<CardProps> = ({ className, icon, subTitle, title, description }) => {
  return (
    <section className="min-h-[500px] p-0 m-0 flex max-w-[350px] h-auto">
      <div className={`p-8 flex justify-between flex-col gap-10 rounded-2xl ${className}`}>
        <div className="cardIcon">{icon}</div>
        <div className="flex flex-col justify-between gap-4">
          <div className="cardHeader">
            <span className="font-brandMedium">{subTitle}</span>
            <h4 className="font-brandBold text-2xl text-inherit leading-snug">{title}</h4>
          </div>
          {description && (
            <>
              <hr className="border-[1px] rounded bg-inherit" />
              <p className="flex font-brandLight leading-normal">{description}</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
