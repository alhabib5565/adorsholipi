import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, LogOut, Settings, User } from "lucide-react";
import { cn } from "@/lib/utils";

const DashboardNav = () => {
  return (
    <div className="bg-white px-6 pt-6 pb-[10px] border-b flex justify-between items-center">
      <Button className="text-primary bg-[#fbf6fe] hover:bg-[#fbf6fe]">
        Dashboard
      </Button>
      <div className=" flex justify-between items-center gap-4 ">
        <div className="flex gap-4">
          <Input placeholder="Search..." />
          <button className="h-11 relative p-[11px] rounded-lg justify-center items-center gap-2.5 text-primary">
            <Bell className="w-6 h-6" />
            <span className="absolute top-1 right-2 bg-red-600 size-4 grid place-items-center text-[10px] text-white rounded-full">
              1
            </span>
          </button>
        </div>
        <div className="flex gap-2">
          <div className="h-[41px] flex-col justify-center items-end gap-0.5 inline-flex">
            <p className="text-[#343a40] text-sm font-normal leading-[21px] tracking-tight">
              Karim Ahmed
            </p>
            <p className="text-[#6c757d] text-xs font-normal leading-[18px] tracking-tight">
              Admin
            </p>
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="size-[42px] rounded-lg">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="space-y-4 p-4 ">
            <DropdownMenuItem>
              <User className="size-5 mr-4" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="size-5 mr-4" /> Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Button
              className={cn("text-red-600 bg-transparent hover:bg-transparent")}
            >
              <LogOut className="size-5 mr-4" /> Logout
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default DashboardNav;
