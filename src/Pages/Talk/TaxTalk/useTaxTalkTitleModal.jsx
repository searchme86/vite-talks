import { useState } from "react";

function useTaxTalkTitleModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [changedTitle, setChangedTitle] = useState("");

  const handleModalOpen = () => {
    setIsModalOpen((prev) => !prev);
  };

  return { isModalOpen, handleModalOpen, changedTitle, setChangedTitle };
}

export default useTaxTalkTitleModal;
