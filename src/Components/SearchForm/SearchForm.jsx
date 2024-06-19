import { useState, useEffect } from "react";
import useDebounce from "./useDebounce";
import "./SearchForm.style.scss";

function SearchForm({
  inputTitle,
  placeHolderValue,
  currentInputValue,
  setDebouncedUserInputValue,
}) {
  const [userInputValue, setUserInputValue] = useState(currentInputValue || "");

  /**
   * debouncedUserInputValue
   * 유저가 입력한 텍스트 value를 참조함
   */
  const debouncedUserInputValue = useDebounce(userInputValue, 300);

  // 버튼을 클릭으로나, 키보드 입력으로나 변경될 값에 대한 처리
  useEffect(() => {
    setDebouncedUserInputValue(debouncedUserInputValue);
  }, [debouncedUserInputValue, setDebouncedUserInputValue]);

  const onChangeHandler = (e) => {
    setUserInputValue(e.target.value);
  };
  /**
   * debouncedUserInputValue
   * 유저가 입력한 텍스트 value를 참조함
   */
  console.log("debouncedUserInputValue", debouncedUserInputValue);

  const handleMessageSubmit = async (e) => {
    if (e.key === "Enter") {
      if (debouncedUserInputValue) {
        console.log("유저가 엔터키를 눌렀고, 메세지가 있을 경우 입니다.");
        console.log(`입력된 메세지 : ${debouncedUserInputValue}`);
        // API 호출 등 추가 동작을 작성해주세요
        setUserInputValue("");
      } else {
        console.log("유저가 엔터키를 눌렀지만, 메세지가 없는 경우 입니다.");
        console.log(
          `현재 인풋창에 있는 값(빈값이 나오는것이 정상입니다.) : ${debouncedUserInputValue}`
        );
      }
    }
  };

  return (
    <div className="searchInput">
      <input
        type="text"
        className="form_input"
        title={inputTitle}
        value={userInputValue}
        placeholder={placeHolderValue}
        onChange={onChangeHandler}
        onKeyDown={handleMessageSubmit}
      />
    </div>
  );
}

export default SearchForm;
