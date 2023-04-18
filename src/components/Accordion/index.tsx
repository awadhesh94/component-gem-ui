import React, { useState } from 'react';
import { AccordionProps } from '../../types/Accordion';
import { AddIcon } from '../../icons/AddIcon';
import { MinusIcon } from '../../icons/MinusIcon';

export const Accordion: React.FC<AccordionProps> = ({ title, description, accordionList }) => {
  const activeClass = 'py-8 bg-lightBlue mb-6';
  const [activeKey, setActiveKey] = useState<number>(0);
  return (
    <div className="max-w-2xl">
      <div className="accordion-about mb-10">
        <h3>{title}</h3>
        <p className="text-base lg:text-lg leading-normal mt-5">{description}</p>
      </div>
      <div className="accordionList">
        {accordionList?.map((accordion, key) => {
          return (
            <div
              key={key}
              className={`w-full px-11 rounded-2xl ${activeKey === key ? activeClass : 'mb-6'}`}
            >
              <button
                className="w-full flex flex-row justify-between items-center"
                onClick={() => setActiveKey(key)}
              >
                <div className="text-sm xl:text-lg font-brandBold">{accordion?.title}</div>
                {activeKey === key ? (
                  <MinusIcon width={28} height={28} />
                ) : (
                  <AddIcon width={28} height={28} />
                )}
              </button>
              {activeKey === key && (
                <div className="text-sm lg:text-base mt-5 leading-normal">
                  {accordion?.description}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
