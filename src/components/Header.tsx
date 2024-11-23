import { NavLink } from "react-router-dom";
import TextInput from "./TextInput";

const Header = () => {
  return (
    <div className="bg-sidebar text-sidebar-foreground p-4 flex items-center justify-between">
      <div className="flex items-center gap-6">
        {tabs.map((tab) => (
          <NavLink
            to={tab.url}
            className={({ isActive }) =>
              `cursor-pointer py-1 px-2  ${
                isActive ? "bg-card rounded text-foreground" : ""
              }`
            }
          >
            {tab.name}
          </NavLink>
        ))}
      </div>
      <TextInput placeholder="Search" className="max-w-48" />
    </div>
  );
};

export default Header;

const tabs = [
  {
    name: "Charging Station",
    url: ".",
  },
  {
    name: "Fleet Sizing",
    url: "fleet-sizing",
  },
  {
    name: "Parking",
    url: "parking",
  },
];
