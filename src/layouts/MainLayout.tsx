import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="flex">
      <Sidebar />
      <div className="grow overflow-hidden rounded-md">
        <Header />
        <Outlet />
      </div>
    </main>
  );
};

export default MainLayout;
