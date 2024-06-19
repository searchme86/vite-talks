import InputBox from "./../../InputBox/InputBox";
import "./ChatBottom.style.scss";

function ChatBottom({ bs, ba, ss, sa, tt, ph, rec, ib }) {
  return (
    <div className="chat_bottom">
      <InputBox
        boxSrc={bs}
        boxAlt={ba}
        isButtonExist={ib}
        sendSrc={ss}
        sendAlt={sa}
        title={tt}
        placeholder={ph}
        isRectangle={rec}
      />
    </div>
  );
}

export default ChatBottom;
