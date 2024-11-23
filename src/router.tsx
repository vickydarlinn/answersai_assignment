import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/homePage/HomePage";
import ComingSoon from "./pages/comingSoon";
import NotFound from "./pages/notFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/notification",
        element: <ComingSoon />,
      },
      {
        path: "/work",
        element: <ComingSoon />,
      },
      {
        path: "/upload",
        element: <ComingSoon />,
      },
      {
        path: "/settings",
        element: <ComingSoon />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
