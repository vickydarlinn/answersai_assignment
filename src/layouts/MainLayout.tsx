import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store";

const MainLayout = () => {
  const { user } = useAuthStore();

  if (user === null) {
    return <Navigate to="/login" replace />;
  }
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
