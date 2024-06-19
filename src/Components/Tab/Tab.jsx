import TabMenu from "./TabMenu/TabMenu";
import TabPanel from "./TabPanel/TabPanel";
import "./Tab.style.scss";

function Tab({ dataTab, tabIndex, setTabIndex }) {
  const { menu, menuContent } = dataTab;

  return (
    <div className="tab_chat">
      <TabMenu menus={menu} currentTab={tabIndex} setActiveTab={setTabIndex} />
      <TabPanel panelContent={menuContent[tabIndex]} />
    </div>
  );
}

export default Tab;
