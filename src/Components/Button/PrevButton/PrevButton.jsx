import { Link } from "react-router-dom";
import Image from "../../Image/Image";
import leftArrow from "../../../Assets/Images/leftArrow.svg";
import "./PrevButton.style.scss";

function PrevButton({ path, title }) {
  return (
    <div className="section_indicator">
      <Link to={path} className="link_prevPage">
        <button
          type="button"
          className="button__prevPage"
          aria-label="이전 화면으로 이동"
        >
          <Image srcValue={leftArrow} altValue="왼쪽 화살표 이미지" />
        </button>
        <p className="text_chatTitle">{title}</p>
      </Link>
    </div>
  );
}

export default PrevButton;
