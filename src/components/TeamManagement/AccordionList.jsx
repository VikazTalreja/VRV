import React from "react";
import AccordionItem from "./AccordionItem";

const AccordionList = ({ accordions, colors, handleToggle }) => {
  return (
    <div className="flex md:flex-col w-full scroll-smooth">
      {accordions.map((accordion, index) => (
        <AccordionItem
          key={index}
          accordion={accordion}
          index={index}
          colors={colors}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default AccordionList;
