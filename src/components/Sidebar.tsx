import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdHome } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { MdWorkHistory } from "react-icons/md";
import { IoCloudUpload } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-sidebar text-sidebar-foreground w-16 flex h-screen flex-col items-center gap-10 p-2 pt-5">
      <GiHamburgerMenu className=" cursor-pointer " size={20} />
      <div className="flex items-center flex-col gap-5  p-2 ">
        {navButtons.map((nav) => (
          <NavLink
            to={nav.url}
            className={({ isActive }) =>
              `cursor-pointer p-2  ${
                isActive ? "bg-card rounded-md text-foreground" : ""
              }`
            }
          >
            {nav.icon}
          </NavLink>
        ))}
      </div>
      <FaUserCircle className="mt-auto" size={20} />
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
    name: "notification",
    url: "/notification",
    icon: <IoNotifications size={20} />,
  },
  {
    name: "work",
    url: "/work",
    icon: <MdWorkHistory size={20} />,
  },
  {
    name: "upload",
    url: "/upload",
    icon: <IoCloudUpload size={20} />,
  },
  {
    name: "settings",
    url: "/settings",
    icon: <IoSettingsSharp size={20} />,
  },
];
