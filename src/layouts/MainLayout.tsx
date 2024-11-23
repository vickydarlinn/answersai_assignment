import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <div className=" sm:pl-16 grow overflow-hidden rounded-md">
        <Header />
        <main className="md:pt-16 pt-36">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default MainLayout;
