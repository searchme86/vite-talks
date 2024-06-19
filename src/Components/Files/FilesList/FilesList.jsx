import Image from "../../Image/Image";
import FileDownload from "../FileDownload/FileDownload";
import "./FilesList.style.scss";

function FilesList({ fileInfo }) {
  return (
    <>
      {fileInfo &&
        fileInfo.map(
          ({
            key = `${Math.random()}`,
            imageSrc = "",
            alt = "",
            fileNm = "",
            fileType = "txt",
            fileUrl = "#",
          }) => {
            return (
              <li key={key} className="item_savedFiles">
                <div className="item_savedFile">
                  <div className="item_FileType">
                    <Image srcValue={imageSrc} altValue={alt} />
                  </div>
                  <p className="text_downFile">
                    <span className="text_downFileName">{fileNm}</span>
                    <span className="text_downFileType">{`.${fileType}`}</span>
                  </p>
                </div>
                <FileDownload
                  fileName={fileNm}
                  fileType={fileType}
                  fileUrl={fileUrl}
                />
              </li>
            );
          }
        )}
    </>
  );
}

export default FilesList;
