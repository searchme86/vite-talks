import { useLocation } from "react-router-dom";
import PrevButton from "./../Button/PrevButton/PrevButton";
import Files from "./FilesList/Files";
import "./FileContainer.style.scss";

function FileContainer() {
  const location = useLocation();
  const {
    state: {
      chatInfo: { roomCategory, roomTitle },
      fileRoomInfo: { pathPrev, fileBox },
    },
  } = location;
  const titleText = `${roomCategory} ${roomTitle}`;

  return (
    <div className="fileContainer">
      <PrevButton path={pathPrev} title={titleText} />
      <Files fileBox={fileBox} />
    </div>
  );
}

export default FileContainer;
