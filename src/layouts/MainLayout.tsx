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
      <div className="md:pl-20 sm:pl-16 ">
        <Header />
        <main className="md:pt-20 pt-32 ">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default MainLayout;
