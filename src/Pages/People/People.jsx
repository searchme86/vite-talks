import { useLocation } from "react-router-dom";
import PrevButton from "../../Components/Button/PrevButton/PrevButton";
import Finder from "./../../Components/Finder/Finder";
import PeopleAccordion from "./PeopleAccordion";

function People() {
  const location = useLocation();
  const {
    state: { memberPageTitle, prevPathTo },
  } = location;

  return (
    <div className="people">
      <div className="people_top">
        <PrevButton path={prevPathTo} title={memberPageTitle} />
      </div>
      <div className="people_contents">
        <Finder />
        <PeopleAccordion />
      </div>
    </div>
  );
}

export default People;
