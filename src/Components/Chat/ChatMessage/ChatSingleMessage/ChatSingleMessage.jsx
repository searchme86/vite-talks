import { useLayoutEffect, useRef } from "react";
import Image from "../../../Image/Image";
import userImage from "../../../../Assets/Images/user.svg";
import "./ChatSingleMessage.style.scss";

function ChatSingleMessage({ message: { txt, id, user, time } }) {
  const messageTextRef = useRef(null);
  const messageActionRef = useRef(null);

  let isSentByCurrentUser = false;
  let trimmedName;
  const trimmeduserId = false;

  if (id === trimmeduserId) {
    isSentByCurrentUser = true;
  }
  trimmedName = user;

  useLayoutEffect(() => {
    if (messageTextRef.current && messageActionRef.current) {
      const messageTextHeight = messageTextRef.current.offsetHeight;
      messageActionRef.current.style.top = `${messageTextHeight + 15}px`;
    }
  }, [txt]);

  return isSentByCurrentUser ? (
    <div className="message_group message_coworker">
      <div className="userImage">
        <Image srcValue={userImage} altValue="유저이미지" />
      </div>
      <div className="message_item">
        <div className="message_user">
          <span className="message_userName">{trimmedName}</span>
          <div className="message_space">
            <p className="message_text" ref={messageTextRef}>
              {txt}
            </p>
            <div className="message_action" ref={messageActionRef}>
              <span className="offscreen">메세지 액션</span>
              <ul className="list_action">
                {/* <li className="item_action">
                  <button
                    type="button"
                    className="button_message button_delete"
                  >
                    메세지 삭제
                  </button>
                </li> */}
                <li className="item_action">
                  <button
                    type="button"
                    className="button_message button_replay"
                  >
                    메세지 답장
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="message_info">
          <span className="message_isRead">읽음</span>
          <span className="message_time">{time}</span>
        </div>
      </div>
    </div>
  ) : (
    <div className="message_group message_currentUser">
      <div className="message_item">
        <div className="message_info">
          <span className="message_isRead">읽음</span>
          <span className="message_time">{time}</span>
        </div>

        <div className="message_user">
          <div className="message_space">
            <p className="message_text">{txt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatSingleMessage;
