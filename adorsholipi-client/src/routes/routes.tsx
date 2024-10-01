import { routeGenerator } from "@/utils/routesGenerator";
import { createBrowserRouter } from "react-router-dom";
import { adminPaths } from "./admin.routes";
import DashboardLayout from "@/components/layout/dashboardLayout/DashboardLayout";
import Login from "@/components/pages/auth/Login";
import Register from "@/components/pages/auth/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
