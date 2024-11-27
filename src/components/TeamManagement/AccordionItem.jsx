import React from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

const AccordionItem = ({ accordion, index, colors, handleToggle }) => {
  return (
    <Accordion
      className="py-2 md:w-full bg-white my-2 rounded-md"
      open={accordion.isOpen}
    >
      <div className="h-fit rounded-lg mx-1">
        <AccordionHeader className="border-0 cursor-pointer py-3 mt-0">
          <div className="flex flex-row w-full justify-center space-x-1 h-[40px]">
            <div className={`w-1/6 p-2`}>
              <div
                className={`border-[1.5px] border-black ${
                  colors[index % colors.length]
                } w-[16px] h-[16px] mt-2 flex items-center justify-center text-white rounded-[4px]`}
                onClick={() => handleToggle(index)}
              >
                {accordion.isOpen ? "-" : "+"}
              </div>
            </div>
            <div className="w-[60px] text-start mt-4 font-extrabold text-xs">
              {accordion.title}
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="text-xs font-semibold text-gray-400 flex justify-start text-start mb-2 py-1">
          <ul className="mt-0 ml-11">
            {accordion.items.map((item, itemIndex) => (
              <li key={itemIndex} className="mb-5 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </AccordionBody>
      </div>
    </Accordion>
  );
};

export default AccordionItem;
