import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdHome } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { MdWorkHistory } from "react-icons/md";
import { IoCloudUpload } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({
  isAbsolute,
  onClose,
}: {
  isAbsolute?: boolean;
  onClose?: () => void;
}) => {
  return (
    <div
      className={`hidden bg-sidebar text-sidebar-foreground w-16 sm:flex h-screen flex-col items-center gap-5  pt-5 fixed left-0 top-0 z-20 ${
        isAbsolute ? "!flex  w-screen" : "hidden"
      }`}
    >
      <GiHamburgerMenu
        onClick={onClose}
        className="  cursor-pointer "
        size={20}
      />
      <div className="flex items-center flex-col sm:gap-5   w-full sm:w-auto">
        {navButtons.map((nav) => (
          <NavLink
            onClick={onClose}
            to={nav.url}
            className={({ isActive }) =>
              `cursor-pointer sm:p-2  p-5 flex items-center gap-3 w-full border border-border  sm:border-none  ${
                isActive ? "bg-card sm:rounded-md text-foreground" : ""
              }`
            }
          >
            {nav.icon}
            <span className="sm:hidden">{nav.name}</span>
          </NavLink>
        ))}
      </div>
      <FaUserCircle onClick={onClose} className="mt-auto mb-4" size={20} />
    </div>
  );
};

export default Sidebar;

const navButtons = [
  {
    name: "Home",
    url: "/",
    icon: <IoMdHome size={20} />,
  },
  {
    name: "Notification",
    url: "/notification",
    icon: <IoNotifications size={20} />,
  },
  {
    name: "Work",
    url: "/work",
    icon: <MdWorkHistory size={20} />,
  },
  {
    name: "Upload",
    url: "/upload",
    icon: <IoCloudUpload size={20} />,
  },
  {
    name: "Settings",
    url: "/settings",
    icon: <IoSettingsSharp size={20} />,
  },
];
