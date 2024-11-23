import TextInput from "./TextInput";
import useStore, { TabKey } from "../store";

const Header = () => {
  const { currentTabKey, setCurrentTabKey } = useStore();
  return (
    <div className="bg-sidebar text-sidebar-foreground p-4 pl-20 flex items-center justify-between fixed left-0 top-0 w-screen">
      <div className="flex items-center gap-6">
        {tabs.map((tab) => (
          <span
            className={`cursor-pointer py-1 px-2  ${
              currentTabKey === tab.name
                ? "bg-card rounded-md text-foreground"
                : ""
            }`}
            onClick={() => setCurrentTabKey(tab.name as TabKey)}
          >
            {tab.name}
          </span>
        ))}
      </div>
      <TextInput placeholder="Search" className="max-w-48" />
    </div>
  );
};

export default Header;

const tabs = [
  {
    name: "Charging Stations",
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
