import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-sidebar text-sidebar-foreground p-4 flex items-center justify-between">
      <div className="flex items-center gap-6">
        {tabs.map((tab) => (
          <NavLink
            to={tab.url}
            className={({ isActive }) =>
              `cursor-pointer p-1  ${
                isActive ? "bg-red-300 rounded-md text-foreground" : ""
              }`
            }
          >
            {tab.name}
          </NavLink>
        ))}
      </div>
      <input type="text" placeholder="Search" />
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
