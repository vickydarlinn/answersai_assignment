import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <div className=" pl-16 grow overflow-hidden rounded-md">
        <Header />
        <main className="pt-16">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default MainLayout;
