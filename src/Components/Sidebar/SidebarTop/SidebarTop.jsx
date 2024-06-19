import "./SidebarTop.style.scss";

function SidebarTop({ chatInfo }) {
  const { roomCategory, roomTitle, roomEstablished, memberCount } = chatInfo;
  return (
    <div className="sidebar_info">
      <p className="sidebar_text">
        <span className="text_roomCategory">{roomCategory}</span>
        <span className="text_roomTitle">{roomTitle}</span>
        <span className="text_memberCount">{memberCount}</span>
      </p>
      <p className="text_chatDate">
        개설일 : <span className="text_date">{roomEstablished}</span>{" "}
      </p>
    </div>
  );
}

export default SidebarTop;
