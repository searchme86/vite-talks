import { Link } from "react-router-dom";
import SidebarTop from "./SidebarTop/SidebarTop";
import SidebarContent from "./SidebarContent/SidebarContent";
import Image from "../Image/Image";
import chatOut from "../../Assets/Images/chatOut.svg";
import "./Sidebar.style.scss";

function Sidebar({ isActive, data }) {
  const { menuTitle, menuContent } = data;

  return (
    <nav
      className={isActive ? "navigation_menu active" : "navigation_menu"}
      aria-expanded={isActive}
      aria-label="사이드바 메뉴"
      aria-controls="sidebarContent"
    >
      <div className="sidebar_Content" id="sidebarContent">
        <SidebarTop chatInfo={menuTitle} />
        <SidebarContent menuContent={menuContent} />
      </div>
      <Link to="/" title="홈으로 이동">
        <button type="button" className="button_chatOut">
          <Image
            srcValue={chatOut}
            altValue="사각형을 가리키는 화살표 이미지"
          ></Image>
          <span className="text_chatOut">채팅방 나가기</span>
        </button>
      </Link>
    </nav>
  );
}

export default Sidebar;
