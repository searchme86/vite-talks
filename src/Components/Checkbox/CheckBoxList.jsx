import { useState, useEffect } from "react";
import CheckBox from "./CheckBox";
import Person01 from "../../Assets/Images/person01.svg";
import Person02 from "../../Assets/Images/person02.svg";
import Person03 from "../../Assets/Images/person03.svg";
import Person04 from "../../Assets/Images/person04.svg";
import Person05 from "../../Assets/Images/person05.svg";
import "./CheckBoxList.style.scss";

function CheckBoxList() {
  // 체크한 인풋을 모아두는 상태
  const [currentCheckedInputs, setCurrentCheckedInputs] = useState(new Set());
  // 모든 인풋을 체크하기 위한 상태
  const [isAllInputChecked, setIsAllInputChecked] = useState(false);

  const checkData = [
    {
      isOline: true,
      key: "이성계",
      nameValue: "이성계",
      rank: "본부장",
      srcValue: Person01,
      altValue: "이성계 본부장 프로필 이미지",
    },
    {
      isOline: false,
      key: "김희선",
      nameValue: "김희선",
      rank: "대리",
      srcValue: Person02,
      altValue: "김희선 대리 프로필 이미지",
    },
    {
      isOline: true,
      key: "임꺽정",
      nameValue: "임꺽정",
      rank: "과장",
      srcValue: Person03,
      altValue: "임꺽정 과장 프로필 이미지",
    },
    {
      isOline: true,
      key: "서희",
      nameValue: "서희",
      rank: "과장",
      srcValue: Person04,
      altValue: "서희 과장 프로필 이미지",
    },
    {
      isOline: true,
      key: "장보고",
      nameValue: "장보고",
      rank: "주임",
      srcValue: Person05,
      altValue: "장보고 주임 프로필 이미지",
    },
  ];

  const handleCurrentCheckInput = (id, isChecked) => {
    const updatedCheckedInputs = new Set(currentCheckedInputs);
    if (isChecked) {
      updatedCheckedInputs.add(id);
      console.log("current updatedCheckedInputs", updatedCheckedInputs);
      console.log("typeof updatedCheckedInputs", typeof updatedCheckedInputs);
    } else {
      updatedCheckedInputs.delete(id);
      console.log("current updatedCheckedInputs", updatedCheckedInputs);
    }
    setCurrentCheckedInputs(updatedCheckedInputs);

    // 전체 체크 상태 업데이트
    setIsAllInputChecked(updatedCheckedInputs.size === checkData.length);
  };

  const handleAllCheckHandler = ({ target: { checked } }) => {
    if (checked) {
      setCurrentCheckedInputs(new Set(checkData.map(({ key }) => key)));
      setIsAllInputChecked(true);
    } else {
      setCurrentCheckedInputs(new Set());
      setIsAllInputChecked(false);
    }
  };

  // 전체 체크 상태를 업데이트하기 위해 추가된 useEffect
  useEffect(() => {
    setIsAllInputChecked(currentCheckedInputs.size === checkData.length);
  }, [currentCheckedInputs, checkData.length]);

  return (
    <>
      <header>
        <div>
          <input
            type="checkbox"
            id="all"
            checked={isAllInputChecked} // 전체 선택 체크박스의 상태를 설정
            onChange={handleAllCheckHandler}
          />
          <label htmlFor="all">전체선택</label>
        </div>
      </header>
      <ul className="list_checkbox">
        {checkData.map(({ key, rank, nameValue, srcValue, altValue }) => (
          <CheckBox
            key={key}
            rank={rank}
            nameValue={nameValue}
            id={key}
            srcValue={srcValue}
            altValue={altValue}
            checked={currentCheckedInputs.has(key)} // 개별 체크박스의 상태 전달
            handleCurrentCheckInput={handleCurrentCheckInput}
          />
        ))}
      </ul>
    </>
  );
}

export default CheckBoxList;
