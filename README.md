# code structure

- [#페이지] Entry.jsx

- TabData.js (#상태)

  - [#컴포넌트] Tab.jsx
    - TabMenu.jsx
    - TabPanel.jsx

- [#라우터] RoutesPage.jsx

  - 페이지 라우터

        - TaxTalk.jsx (페이지)
        - FileContainer.jsx (페이지)
        - People.jsx (*제외함)

- [#페이지] TaxTalk.jsx (페이지)

  - Chat.jsx

  - [1.] ChatTop.jsx

    - Chat컴포넌트의 Top 영역

      - ChatTitle.jsx
      - ChatUtil.jsx

        - useSidebarData.jsx (#상태)
          - Sidebar.jsx
          - SidebarTop.jsx
          - SidebarContent.jsx
            - Members.jsx
            - People.jsx
          - ModalPortal.jsx
          - useTaxTalkTitleModal.jsx (#상태)
          - Modal.jsx
          - ModalTop.jsx
          - ModalContent.jsx
          - ModalBottom.jsx

    - [2.] ChatMessageRow.jsx

      - Chat컴포넌트의 메세지 영역
      - TaxTalkMessageData.js (#상태)
        - ChatMessageRow.jsx
          - ChatSingleMessage.jsx

    - [3.] ChatBottom.jsx
      - Chat컴포넌트의 메세지 인풋 영역

- [#페이지] FileContainer.jsx (페이지)

  - 파일보관함 페이지 및 파일관련 컴포넌트
  - TaxTalkFileData.js (#상태)
    - Files.jsx
      - useTransformData.jsx (훅)
      - FilesList.jsx
        - FileDownload.jsx
          - useFetchBlob.jsx (훅)

- [#페이지] People.jsx
  - PeopleAccordion.jsx
    - usePeopleAccordion.jsx
      - AccordionList.jsx
        - AccordionItem.jsx
          - CheckBoxList.jsx
            - CheckBox.jsx
