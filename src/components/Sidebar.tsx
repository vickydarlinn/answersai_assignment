import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdHome } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { MdWorkHistory } from "react-icons/md";
import { IoCloudUpload } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

// todo:make this file color global
const Sidebar = ({
  isAbsolute,
  onClose,
}: {
  isAbsolute?: boolean;
  onClose?: () => void;
}) => {
  return (
    <div
      className={`fixed left-0 top-0 z-20 hidden h-screen w-20 flex-col items-center gap-5 bg-sidebar py-9 text-sidebar-foreground sm:flex ${
        isAbsolute ? "!flex w-screen" : "hidden"
      }`}
    >
      <div className="flex w-full flex-col items-center sm:w-auto sm:gap-6">
        <GiHamburgerMenu
          onClick={onClose}
          className="cursor-pointer"
          size={20}
        />
        {navButtons.map((nav) => (
          <NavLink
            key={nav.url}
            onClick={onClose}
            to={nav.url}
            className={({ isActive }) =>
              `flex w-full cursor-pointer items-center gap-3   p-5  sm:p-[7px]  ${
                isActive
                  ? "border border-border bg-card text-foreground sm:rounded-md"
                  : "text-[#858882] border border-transparent"
              }`
            }
          >
            {nav.icon}
            <span className="sm:hidden">{nav.name}</span>
          </NavLink>
        ))}
      </div>
      <FaUserCircle onClick={onClose} className=" mt-auto" size={20} />
    </div>
  );
};

export default Sidebar;

const navButtons = [
  {
    name: "Home",
    url: "/",
    icon: <IoMdHome size={24} />,
  },
  {
    name: "Notification",
    url: "/notification",
    icon: <IoNotifications size={24} />,
  },
  {
    name: "Work",
    url: "/work",
    icon: <MdWorkHistory size={24} />,
  },
  {
    name: "Upload",
    url: "/upload",
    icon: <IoCloudUpload size={24} />,
  },
  {
    name: "Settings",
    url: "/settings",
    icon: <IoSettingsSharp size={24} />,
  },
];
