import TextInput from "./TextInput";
import useStore, { TabKey } from "../store";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Header = () => {
  const { currentTabKey, setCurrentTabKey } = useStore();
  const [isShowingSideBar, setIsShowingSideBar] = useState(false);
  return (
    <>
      <div className="z-10 bg-sidebar text-sidebar-foreground p-4 sm:pl-20 flex md:flex-row  flex-col-reverse items-center gap-5 justify-between fixed left-0 top-0 w-screen">
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
        <div className="flex items-center justify-between gap-3  w-full sm:w-auto">
          <GiHamburgerMenu
            className=" cursor-pointer sm:hidden "
            size={25}
            onClick={() => setIsShowingSideBar(true)}
          />
          <TextInput placeholder="Search" className="md:max-w-48 " />
        </div>
      </div>
      {isShowingSideBar && (
        <Sidebar isAbsolute={true} onClose={() => setIsShowingSideBar(false)} />
      )}
    </>
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
