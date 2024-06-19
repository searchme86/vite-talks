import "./TabMenu.style.scss";

function TabMenu({ menus, setActiveTab, currentTab }) {
  return (
    <div className="tab_Menu">
      <ul className="list_tab">
        {menus.map(({ key, content }, index) => (
          <li
            key={key}
            className={`item_tab ${index === currentTab ? "active" : ""}`}
          >
            <button
              type="button"
              className="button_tab"
              onClick={() => setActiveTab(index)}
            >
              <span className="text_button">{content}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TabMenu;
