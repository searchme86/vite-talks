import AccordionList from "../../Components/Accordion/AccordionList";
import usePeopleAccordion from "./usePeopleAccordion";
import "./PeopleAccordion.style.scss";
import "../../Components/Accordion/Accordion.style.scss";

function PopleAccordion() {
  const { renderMyCompanyAccordion } = usePeopleAccordion();

  return (
    <div className="accordion">
      <AccordionList muitipleOpen={false} render={renderMyCompanyAccordion} />
    </div>
  );
}

export default PopleAccordion;
