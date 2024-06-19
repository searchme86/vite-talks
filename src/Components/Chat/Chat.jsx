import ChatTop from "./ChatTop/ChatTop";
import ChatBottom from "./ChatBottom/ChatBottom";
import ChatMessageRow from "./ChatMessage/ChatMessageRow/ChatMessageRow";
import "./Chat.style.scss";

function Chat({ title, message, bs, ba, ss, sa, tt, ph, rec, ib }) {
  return (
    <>
      <ChatTop title={title} />
      <ChatMessageRow data={message} />
      <ChatBottom
        bs={bs}
        ba={ba}
        ss={ss}
        sa={sa}
        tt={tt}
        ph={ph}
        rec={rec}
        ib={ib}
      />
    </>
  );
}

export default Chat;
