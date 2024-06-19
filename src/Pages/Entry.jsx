import { useState } from "react";
import LayOut from "./../Util/LayOut/LayOut";
import Tab from "./../Components/Tab/Tab";
import { tabData } from "./../Components/Tab/TabUtil/TabData";

function Entry() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <LayOut>
      <Tab dataTab={tabData} tabIndex={activeTab} setTabIndex={setActiveTab} />
    </LayOut>
  );
}

export default Entry;
