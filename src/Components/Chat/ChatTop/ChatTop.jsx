import { useState } from "react";
import ChatTitle from "./ChatTitle/ChatTitle";
import ChatUtil from "./ChatUtil/ChatUtil";
import Finder from "../../Finder/Finder";
import "./ChatTop.style.scss";

function ChatTop({ title }) {
  const [isMute, setIsMute] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleMuteAlert = () => {
    setIsMute((prev) => !prev);
  };

  const handleVisible = () => {
    setIsVisible((prev) => !prev);
  };

  const menuData = {
    mute: { isMute, handleMuteAlert },
    visible: { handleVisible },
  };

  return (
    <div className="chat_top">
      <nav className="chat_navigation">
        <h1 className="offscreen">채팅창 네비게이션</h1>
        <ChatTitle path={"/"} textTitle={title} />
        <ChatUtil menuData={menuData} />
      </nav>
      {isVisible && <Finder />}
    </div>
  );
}

export default ChatTop;
