import TextInput from "./TextInput";
import { useStore } from "../store";
import { TabKey } from "../types";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Header = () => {
  const { currentTabKey, setCurrentTabKey } = useStore();
  const [isShowingSideBar, setIsShowingSideBar] = useState(false);
  return (
    <>
      <div
        className="z-10 bg-sidebar text-sidebar-foreground p-5  flex md:flex-row  flex-col-reverse items-center gap-5 justify-between fixed left-0 top-0 w-full md:pl-24 pr-6
     font-roobert"
      >
        <div className="flex items-center justify-between sm:justify-start   w-full sm:w-auto sm:gap-6 gap:2  flex-wrap font-medium">
          {tabs.map((tab) => (
            <span
              key={tab.name}
              className={`cursor-pointer py-[7px] px-[10px]  ${
                currentTabKey === tab.name
                  ? "bg-card rounded-[5px] text-foreground border border-border"
                  : "border border-transparent"
              }`}
              onClick={() => setCurrentTabKey(tab.name as TabKey)}
            >
              {tab.name}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between gap-3  w-full sm:w-auto  ">
          <GiHamburgerMenu
            className=" cursor-pointer sm:hidden "
            size={25}
            onClick={() => setIsShowingSideBar(true)}
          />
          <TextInput placeholder="Search" className="sm:w-[237px] px-3 py-2 " />
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
