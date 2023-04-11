import React, { useState } from 'react';
import { AccordionProps } from '../../types/Accordion';
import { AddIcon } from '../../icons/AddIcon';
import { MinusIcon } from '../../icons/MinusIcon';

export const Accordion: React.FC<AccordionProps> = ({
  title,
  description,
  accordionList,
}) => {
  const activeClass = 'py-8 bg-brand-lightBlue mb-6';
  const [activeKey, setActiveKey] = useState<number>(0);
  return (
    <div className="flex">
      <div className="accordionContainer">
        <div className="accordionWrapper">
          <div className="accordionContent">
            <div className="accordionAbout">
              <h3 className="text-brand-coal">{title}</h3>
              <p className="subDescription">{description}</p>
            </div>
            <div className="accordionList">
              {accordionList?.map((accordion, key) => {
                return (
                  <div
                    key={key}
                    className={`w-full px-11 rounded-2xl ${
                      activeKey === key ? activeClass : 'mb-6'
                    }`}
                  >
                    <button
                      className="w-full flex flex-row justify-between items-center"
                      onClick={() => setActiveKey(key)}
                    >
                      <div className="text-xl font-brandBold font-bold">
                        {accordion?.title}
                      </div>
                      {activeKey === key ? (
                        <MinusIcon width={28} height={28} />
                      ) : (
                        <AddIcon width={28} height={28} />
                      )}
                    </button>
                    {activeKey === key && (
                      <div className="text-base pt-3 font-normal ">
                        {accordion?.description}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="accordionImage ml-32">
          <img
            className="rounded-2xl object-cover"
            src={require(`../../images/image-${activeKey + 1}.png`)}
          />
        </div>
      </div>
    </div>
  );
};
