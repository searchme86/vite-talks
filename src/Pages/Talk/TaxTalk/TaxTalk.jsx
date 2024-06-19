import { Outlet, useLocation } from "react-router-dom";
import Chat from "../../../Components/Chat/Chat";
import LayOut from "./../../../Util/LayOut/LayOut";
import { messageSampleData } from "./TaxTalkMessageData";

import openBox from "../../../Assets/Images/openBox.svg";
import sendMessage from "../../../Assets/Images/sendMessage.svg";

function TaxTalk() {
  const location = useLocation();
  const hideChatPaths = ["/talk/taxTalk/file", "/talk/taxTalk/member"];
  const shouldHideChat = hideChatPaths.some((path) =>
    location.pathname.includes(path)
  );

  return (
    <LayOut>
      {!shouldHideChat && (
        <Chat
          title={"세무사와 텍스톡"}
          message={messageSampleData}
          bs={openBox}
          ba="플러스 이미지"
          ib={true}
          ss={sendMessage}
          sa="종이 비행기 이미지"
          tt="메세지 입력창"
          ph="메세지를 입력해주세요"
          rec={false}
        />
      )}
      <Outlet />
    </LayOut>
  );
}

export default TaxTalk;
