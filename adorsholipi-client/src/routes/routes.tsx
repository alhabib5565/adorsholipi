import { routeGenerator } from "@/utils/routesGenerator";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { adminPaths } from "./admin.routes";
import DashboardLayout from "@/components/layout/dashboardLayout/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/dashboard"} />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: routeGenerator(adminPaths),
  },
]);
