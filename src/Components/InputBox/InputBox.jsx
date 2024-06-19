import { useState } from "react";
import Image from "./../Image/Image";
import SearchForm from "./../SearchForm/SearchForm";
import "./InputBox.style.scss";

function InputBox({
  boxSrc,
  boxAlt,
  sendSrc,
  sendAlt,
  title,
  placeholder,
  isRectangle,
  isButtonExist,
}) {
  const [showAnimation, setShowAnimationOverlay] = useState(false);
  const [debouncedUserInputValue, setDebouncedUserInputValue] = useState(""); // 추가된 상태
  const className = isRectangle ? "searchFinder" : "";

  const handleButtonClick = () => {
    if (debouncedUserInputValue) {
      console.log(
        "버튼 클릭했고, 다음의 내용을 서버에 요청합니다.",
        `"${debouncedUserInputValue}"`
      );
      /**
       * 메세지 값 : debouncedUserInputValue
       * 버튼을 클릭했고, 메세지가 있을 경우,
       * debouncedUserInputValue는 유저가 인풋창에 메세지로 입력한 값
       * 요청할 때 태워서 보낼 로직을 작성할 곳
       */
    } else {
      console.log("버튼을 클릭하였으나, 입력된 메시지가 없음");
      /**
       * 메세지 값 : debouncedUserInputValue
       * 버튼을 클릭했으나, 메세지가 없는 경우
       */
    }
    setShowAnimationOverlay(true);
    setTimeout(() => {
      setShowAnimationOverlay(false);
    }, 700);
  };

  return (
    <div className={`inputBox ${className}`}>
      <button type="button" className="button_showBox">
        <Image srcValue={boxSrc} altValue={boxAlt} />
      </button>
      <SearchForm
        inputTitle={title}
        placeHolderValue={placeholder}
        currentInputValue=""
        setDebouncedUserInputValue={setDebouncedUserInputValue}
      />
      {isButtonExist && (
        <button
          type="button"
          className={`button_sendMessage ${showAnimation ? "animate" : ""} `}
          onClick={handleButtonClick}
        >
          <Image srcValue={sendSrc} altValue={sendAlt} />
        </button>
      )}
    </div>
  );
}

export default InputBox;
