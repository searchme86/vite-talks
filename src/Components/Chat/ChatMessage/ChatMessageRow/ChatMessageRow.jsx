import ChatSingleMessage from "../ChatSingleMessage/ChatSingleMessage";
import "./ChatMessageRow.style.scss";

function ChatMessageRow({ data }) {
  return (
    <div className="chat_message">
      <p className="chat_date">2022년 10월 5일 수요일</p>
      <ul className="list_message">
        {data.map(({ key, information }) => {
          return (
            <li key={key} className="item_message">
              <ChatSingleMessage message={information} />
            </li>
          );
        })}
      </ul>
      <p className="chat_date">2022년 10월 5일 수요일</p>
    </div>
  );
}

export default ChatMessageRow;
