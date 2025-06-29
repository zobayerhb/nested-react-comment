import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
export default router;
