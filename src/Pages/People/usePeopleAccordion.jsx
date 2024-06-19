import AccordionList from "../../Components/Accordion/AccordionList";
import AccordionItem from "../../Components/Accordion/AccordionItem";
import CheckBoxList from "./../../Components/Checkbox/CheckBoxList";

function usePeopleAccordion() {
  const AccordiontTitleData = {
    topLevel: {
      topLevel01: "내 회사",
      topLevel02: "계열사(ㅇㅇㅇ)",
    },
    subLevel: {
      myWorks: {
        subLevelMyworks01: "내 부서 (전략기획본부) 5/7",
        subLevelMyworks02: "영업/마케팅 본부",
      },
      partner: {
        subLevelPartner01: "계열사 타이틀01",
        subLevelPartner02: "계열사 타이틀02",
      },
    },
  };

  const {
    topLevel: { topLevel01, topLevel02 },
    subLevel: {
      myWorks: { subLevelMyworks01, subLevelMyworks02 },
      partner: { subLevelPartner01, subLevelPartner02 },
    },
  } = AccordiontTitleData;

  const myDepartmentsAccordion = ({
    handleItemExpand,
    handleAddActiveClass,
    handleAddTransition,
    currentExpandItems,
  }) => {
    return (
      <>
        <AccordionItem
          id="1"
          accordionTitleText={subLevelMyworks01}
          handleItemExpand={handleItemExpand}
          handleAddActiveClass={handleAddActiveClass}
          handleAddTransition={handleAddTransition}
          currentExpandItems={currentExpandItems}
        >
          <CheckBoxList />
        </AccordionItem>
        <AccordionItem
          id="2"
          accordionTitleText={subLevelMyworks02}
          handleItemExpand={handleItemExpand}
          handleAddActiveClass={handleAddActiveClass}
          handleAddTransition={handleAddTransition}
          currentExpandItems={currentExpandItems}
        >
          영업/마케팅 본부 체크박스
        </AccordionItem>
      </>
    );
  };

  const partnerAccordion = ({
    handleItemExpand,
    handleAddActiveClass,
    handleAddTransition,
    currentExpandItems,
  }) => {
    return (
      <>
        <AccordionItem
          expanded={true}
          id="1"
          accordionTitleText={subLevelPartner01}
          handleItemExpand={handleItemExpand}
          handleAddActiveClass={handleAddActiveClass}
          handleAddTransition={handleAddTransition}
          currentExpandItems={currentExpandItems}
        >
          계열사01 본부 체크박스
        </AccordionItem>
        <AccordionItem
          id="2"
          accordionTitleText={subLevelPartner02}
          handleItemExpand={handleItemExpand}
          handleAddActiveClass={handleAddActiveClass}
          handleAddTransition={handleAddTransition}
          currentExpandItems={currentExpandItems}
        >
          계열사02 본부 체크박스
        </AccordionItem>
      </>
    );
  };

  const renderMyCompanyAccordion = ({
    handleItemExpand,
    handleAddActiveClass,
    handleAddTransition,
    currentExpandItems,
  }) => {
    return (
      <>
        <AccordionItem
          expanded={true}
          id="1"
          accordionTitleText={topLevel01}
          handleItemExpand={handleItemExpand}
          handleAddActiveClass={handleAddActiveClass}
          handleAddTransition={handleAddTransition}
          currentExpandItems={currentExpandItems}
        >
          <AccordionList
            muitipleOpen={true}
            accordionDepth={1}
            render={myDepartmentsAccordion}
          />
        </AccordionItem>
        <AccordionItem
          id="2"
          accordionTitleText={topLevel02}
          handleItemExpand={handleItemExpand}
          handleAddActiveClass={handleAddActiveClass}
          handleAddTransition={handleAddTransition}
          currentExpandItems={currentExpandItems}
        >
          <AccordionList
            muitipleOpen={true}
            accordionDepth={1}
            render={partnerAccordion}
          />
        </AccordionItem>
      </>
    );
  };

  return { renderMyCompanyAccordion };
}

export default usePeopleAccordion;
