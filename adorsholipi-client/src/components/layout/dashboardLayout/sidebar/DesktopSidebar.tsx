import { adminPaths } from "@/routes/admin.routes";
import { Link } from "react-router-dom";
import SidebarDropdownItem from "./SidebarDropdownItem";
import SingleSidebarItem from "./SingleSidebarItem";
import logo from "../../../../assets/logo/logo.png";

const DesktopSidebar = () => {
  return (
    <div className=" w-[300px] fixed top-0 left-0 min-h-screen overflow-y-scroll p-6">
      <Link to={"#"}>
        <img alt="logo" src={logo} className="mx-auto my-4 w-full" />
      </Link>
      <hr className=" mb-6" />

      <div className="space-y-6">
        {adminPaths.map((item, index) => {
          return item.children && item.children.length > 0 ? (
            <SidebarDropdownItem item={item} key={index} />
          ) : (
            <SingleSidebarItem key={index} item={item} />
          );
        })}
      </div>
    </div>
  );
};

export default DesktopSidebar;
