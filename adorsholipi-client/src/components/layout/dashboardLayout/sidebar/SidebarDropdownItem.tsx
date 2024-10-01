import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { TUserPath } from "@/type/paths.type";
import SingleSidebarItem from "./SingleSidebarItem";

const SidebarDropdownItem = ({ item }: { item: TUserPath }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const handleDropdownOpen = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  return (
    <div className={cn({ "bg-[#EDF4FC80]": isDropdownOpen })}>
      <button
        onClick={handleDropdownOpen}
        className="hover:bg-secondary w-full flex gap-2 items-center justify-between rounded-[8px] p-4 text-[16px] leading-[22.4px] tracking-[0.2px] text-light-subtext"
      >
        <div className="w-full flex justify-start gap-4 cursor-pointer">
          <item.icon className="size-6 text-primary" />
          <span className="grow text-left"> {item?.label}</span>
        </div>
        <ChevronDown
          className={cn("text-light-subtext size-5", {
            "rotate-180 duration-300 ": isDropdownOpen,
            "rotate-0 duration-300 ": !isDropdownOpen,
          })}
        />
      </button>

      {isDropdownOpen && (
        <div className="space-y-2 w-full h-full">
          {item.children?.map((dropdownItem, index) => (
            <SingleSidebarItem
              key={index}
              item={dropdownItem}
              isDropdownItem={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarDropdownItem;
