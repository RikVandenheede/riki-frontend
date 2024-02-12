// Dependencies
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

// Helpers
import { sidebarFilterItems } from "../../utils/config";
import { clearTokens } from "../../helpers/Tokens";

// Components
import { MainLogo } from "../atoms/Svg";

interface SidebarProps {
  filterOption: string;
  setFilterOption: Dispatch<SetStateAction<string>>;
}

export const Sidebar = ({ filterOption, setFilterOption }: SidebarProps) => {
  const nav = useNavigate();

  const handleLogout = () => {
    clearTokens();
    nav("/");
  };

  return (
    <aside className="sidebar">
      <MainLogo />
      <div className="sidebar__search"></div>
      <ul className="sidebar__filters">
        {sidebarFilterItems().map((item, index) => {
          return (
            <li
              key={`menuItem-${index}`}
              onClick={() => setFilterOption(item)}
              className={filterOption == item ? "active" : undefined}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <button className="btn btn--secondary" onClick={handleLogout}>
        Log out
      </button>
    </aside>
  );
};
