import { useEffect, useState } from "react";

function AccordionItem({
  handleAddActiveClass,
  id,
  handleAddTransition,
  handleItemExpand,
  accordionTitleText,
  children,
  currentExpandItems,
}) {
  return (
    <li
      className={`item_accordion ${handleAddActiveClass(
        id
      )} ${handleAddTransition()}`}
      aria-expanded={currentExpandItems.includes(id) ? "true" : "false"}
    >
      <div
        className="accordion-title"
        onClick={() => {
          handleItemExpand(id);
        }}
      >
        <button
          type="button"
          className="button_arrow"
          aria-controls="accordion-content"
        >
          <span className="offscreen">{`${accordionTitleText} 컨텐츠 보기`}</span>
        </button>
        <p className="accordion-title">{accordionTitleText}</p>
      </div>
      <div className="accordion-content" id="accordion-content">
        {children}
      </div>
    </li>
  );
}

export default AccordionItem;
