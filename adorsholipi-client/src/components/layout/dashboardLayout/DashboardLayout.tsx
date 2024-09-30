import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div>
      <Sidebar />
      <div className="lg:ml-[300px]">
        <div className="h-[68px] bg-[#F8F9FA] px-4 flex items-center text-lg pl-20 lg:pl-0">
          Wellcome to Adorsholipi
        </div>
        <div className="p-4 min-h-[calc(100vh-68px)]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
