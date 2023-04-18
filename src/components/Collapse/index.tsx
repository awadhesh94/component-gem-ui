import React from 'react';
import { AddIcon } from '../../icons/AddIcon';
import { MinusIcon } from '../../icons/MinusIcon';
import { CollapseProps } from '../../types/Collapse';

export const Collapse: React.FC<CollapseProps> = ({
  title,
  description,
  className,
  open,
  setOpen,
}) => {
  const hideIcon = <AddIcon width={25} height={25} />;
  const showIcon = <MinusIcon width={25} height={25} />;

  const icon = open ? showIcon : hideIcon;
  const randerClass = open && 'bg-lightBlue';

  return (
    <div className={`flex flex-col max-w-lg m-8 py-9 rounded-2xl ${randerClass} ${className}`}>
      <button
        className="flex justify-between items-center px-10 gap-8"
        onClick={() => setOpen(!open)}
      >
        <h4 className="font-brandBold text-2xl text-inherit leading-snug max-w-sm break-words">
          {title}
        </h4>
        <div>{icon}</div>
      </button>
      {open && (
        <div className="mr-3 px-10 mt-5 font-light text-base leading-normal">{description}</div>
      )}
    </div>
  );
};
