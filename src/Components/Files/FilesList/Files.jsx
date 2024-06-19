import FilesList from "./FilesList";
import useTransformData from "./useTransformData";
import "./Files.style.scss";

function Files({ fileBox }) {
  let transformedFileList = useTransformData(fileBox);

  console.log("transformedFileList", transformedFileList);

  return (
    <ul className="list_files">
      {transformedFileList.map(({ key, savedDate, files }) => {
        return (
          <li key={key} className="item_files">
            <p className="text_savedDate">{savedDate}</p>
            <ul className="list_savedFiles">
              <FilesList fileInfo={files} />
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

export default Files;
