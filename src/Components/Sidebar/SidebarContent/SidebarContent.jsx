import Image from "../../Image/Image";
import Members from "../../Members/Members";
import { Link } from "react-router-dom";
import "./SidebarContent.style.scss";

function SidebarContent({ menuContent }) {
  return (
    <>
      <ul className="list_chatMenu">
        {menuContent.map(
          ({
            type,
            key,
            path,
            srcValue,
            altValue,
            textValue,
            fileInfo,
            clickHandler,
          }) => {
            if (type === "button") {
              return (
                <li key={key} className="item_sideBarMenu">
                  <button
                    type="button"
                    className="button_sideBarMenu"
                    onClick={clickHandler}
                  >
                    <div className="image_sideBarIcon">
                      <Image srcValue={srcValue} altValue={altValue} />
                    </div>
                    <span className="text_sideBar">{textValue}</span>
                  </button>
                </li>
              );
            }

            if (type === "link") {
              return (
                <li key={key} className="item_sideBarMenu">
                  <Link to={path} state={fileInfo}>
                    <button
                      type="button"
                      className="button_sideBarMenu"
                      onClick={clickHandler}
                    >
                      <div className="image_sideBarIcon">
                        <Image srcValue={srcValue} altValue={altValue} />
                      </div>
                      <span className="text_sideBar">{textValue}</span>
                    </button>
                  </Link>
                </li>
              );
            }
          }
        )}
        <Members />
      </ul>
    </>
  );
}

export default SidebarContent;
