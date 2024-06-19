import useFetchBlob from "./useFetchBlob";

function FileDownload({ fileName, fileType, fileUrl }) {
  const { loading, data, error } = useFetchBlob(fileUrl);

  const handleDownload = () => {
    const link = document.createElement("a");

    if (error || (error && !data) || data === null || data === undefined) {
      console.error("data가 존재하지 않습니다. 확인해주세요.");
      return;
    }

    const url = window.URL.createObjectURL(data);
    link.href = url;
    link.setAttribute("download", `${fileName}.${fileType}`);
    document.body.appendChild(link);
    link.click();
    setTimeout((_) => {
      window.URL.revokeObjectURL(url);
    }, 60000);
    link.parentNode.removeChild(link);
  };

  return (
    <button
      type="button"
      onClick={!loading && handleDownload}
      className="button_download"
    >
      <span className="offscreen">{`${fileName} 다운로드 버튼`}</span>
    </button>
  );
}

export default FileDownload;
