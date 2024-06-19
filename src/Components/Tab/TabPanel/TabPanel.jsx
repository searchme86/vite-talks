import { Link } from "react-router-dom";
import "./TabPanel.style.scss";

function TabPanel({ panelContent }) {
  const { list } = panelContent;
  return (
    <div className="tab_panel">
      <ul className="list_tabPanel">
        {list.map(({ key, path, content, messageCount }) => (
          <li key={key} className="item_tabPanel">
            <div className="section_chatRoom">
              <Link to={path} className="link_chatRoom">
                <span className="title_chatRoom">{content}</span>
                <span className="count_message">{messageCount}</span>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TabPanel;
