import { useState, useEffect } from "react";
import Image from "./../Image/Image";

function CheckBox({
  checked,
  handleCurrentCheckInput,
  id,
  nameValue,
  srcValue,
  altValue,
  rank,
}) {
  // 개별 인풋의 상태
  const [singleCheckInput, setSinglecheckInput] = useState(checked);

  // 개별 인풋의 핸들러
  // 개별 인풋을 체크하면
  const handEachInputHandler = ({ target: { checked, id } }) => {
    // checked된 상태와, 해당 인풋의 id를 받아서
    // [#개별] 개별 인풋의 상태를 변경하고
    setSinglecheckInput(checked);
    // [#전체] 현재 어떤 인풋들을 체크했는지, 어떤 인풋의 정보를 변경함
    handleCurrentCheckInput(id, checked);
  };

  // 부모 컴포넌트로부터 전달된 checked 상태를 내부 상태로 설정
  useEffect(() => {
    setSinglecheckInput(checked);
  }, [checked]);

  return (
    <>
      <li className="item_checkbox">
        <div className="section_user">
          <div className="image_checkbox">
            <Image srcValue={srcValue} altValue={altValue} />
          </div>
          <div className="text_userRank">
            <label htmlFor={id} className="text_label">
              {nameValue}
            </label>
            <span className="text_rank">{rank}</span>
          </div>
        </div>
        <div className="section_checkbox">
          <input
            id={id}
            className="form_input"
            type="checkbox"
            checked={singleCheckInput} // 내부 상태를 사용하여 체크박스 상태 설정
            onChange={handEachInputHandler}
          />
        </div>
      </li>
    </>
  );
}

export default CheckBox;
