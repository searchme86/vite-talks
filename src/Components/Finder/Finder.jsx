import InputBox from "../InputBox/InputBox";
import searchTalk from "../../Assets/Images/searchTalk.svg";
import "./Finder.style.scss";

function Finder() {
  return (
    <div className="finder">
      <InputBox
        boxSrc={searchTalk}
        boxAlt="검색 돋보기 이미지"
        title="검색어 인풋"
        placeholder="검색어를 입력하세요"
        isRectangle={true}
        isButtonExist={false}
      />
    </div>
  );
}

export default Finder;
