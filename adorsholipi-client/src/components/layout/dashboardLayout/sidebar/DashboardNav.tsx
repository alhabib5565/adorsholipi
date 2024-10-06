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
import { Clock, Bell, LogOut, Settings, User } from "lucide-react";
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
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button className="h-11 relative p-[11px] rounded-lg justify-center items-center gap-2.5 text-primary">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-2 bg-red-600 size-4 grid place-items-center text-[10px] text-white rounded-full">
                  1
                </span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="space-y-4 p-6 w-[400px] h-[500px] overflow-y-scroll">
              <div className="flex justify-between items-center gap-10">
                <div className="text-[#1d2939] text-xl font-normal font-['Roboto'] leading-[30px]">
                  Notification
                </div>
                <Button
                  variant="link"
                  className="text-right hover:no-underline text-[#007bff] text-sm font-normal font-roboto h-fit p-0"
                >
                  View All
                </Button>
              </div>
              <DropdownMenuItem className="cursor-pointer">
                <div className=" justify-center items-start gap-4 inline-flex">
                  <div className="size-8 grid place-items-center bg-[#f2ffff] shrink-0 rounded-full">
                    <Bell className="size-6 text-primary" />
                  </div>
                  <div className="flex-col justify-start items-start gap-1 flex">
                    <h4 className="text-[#344054] text-base font-medium font-roboto leading-normal">
                      Title
                    </h4>
                    <p className="text-[#667085] text-sm font-normal font-roboto leading-tight tracking-tight">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <p className="justify-start items-center gap-2 inline-flex">
                      <Clock className="w-4 h-4 " />
                      <span className="text-[#667085] text-sm font-normal font-roboto leading-tight tracking-tight">
                        3 min ago
                      </span>
                    </p>
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <div className=" justify-center items-start gap-4 inline-flex">
                  <div className="size-8 grid place-items-center bg-[#f2ffff] shrink-0 rounded-full">
                    <Bell className="size-6 text-primary" />
                  </div>
                  <div className="flex-col justify-start items-start gap-1 flex">
                    <h4 className="text-[#344054] text-base font-medium font-roboto leading-normal">
                      Title
                    </h4>
                    <p className="text-[#667085] text-sm font-normal font-roboto leading-tight tracking-tight">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <p className="justify-start items-center gap-2 inline-flex">
                      <Clock className="w-4 h-4 " />
                      <span className="text-[#667085] text-sm font-normal font-roboto leading-tight tracking-tight">
                        3 min ago
                      </span>
                    </p>
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <div className=" justify-center items-start gap-4 inline-flex">
                  <div className="size-8 grid place-items-center bg-[#f2ffff] shrink-0 rounded-full">
                    <Bell className="size-6 text-primary" />
                  </div>
                  <div className="flex-col justify-start items-start gap-1 flex">
                    <h4 className="text-[#344054] text-base font-medium font-roboto leading-normal">
                      Title
                    </h4>
                    <p className="text-[#667085] text-sm font-normal font-roboto leading-tight tracking-tight">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <p className="justify-start items-center gap-2 inline-flex">
                      <Clock className="w-4 h-4 " />
                      <span className="text-[#667085] text-sm font-normal font-roboto leading-tight tracking-tight">
                        3 min ago
                      </span>
                    </p>
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <div className=" justify-center items-start gap-4 inline-flex">
                  <div className="size-8 grid place-items-center bg-[#f2ffff] shrink-0 rounded-full">
                    <Bell className="size-6 text-primary" />
                  </div>
                  <div className="flex-col justify-start items-start gap-1 flex">
                    <h4 className="text-[#344054] text-base font-medium font-roboto leading-normal">
                      Title
                    </h4>
                    <p className="text-[#667085] text-sm font-normal font-roboto leading-tight tracking-tight">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <p className="justify-start items-center gap-2 inline-flex">
                      <Clock className="w-4 h-4 " />
                      <span className="text-[#667085] text-sm font-normal font-roboto leading-tight tracking-tight">
                        3 min ago
                      </span>
                    </p>
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <div className=" justify-center items-start gap-4 inline-flex">
                  <div className="size-8 grid place-items-center bg-[#f2ffff] shrink-0 rounded-full">
                    <Bell className="size-6 text-primary" />
                  </div>
                  <div className="flex-col justify-start items-start gap-1 flex">
                    <h4 className="text-[#344054] text-base font-medium font-roboto leading-normal">
                      Title
                    </h4>
                    <p className="text-[#667085] text-sm font-normal font-roboto leading-tight tracking-tight">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <p className="justify-start items-center gap-2 inline-flex">
                      <Clock className="w-4 h-4 " />
                      <span className="text-[#667085] text-sm font-normal font-roboto leading-tight tracking-tight">
                        3 min ago
                      </span>
                    </p>
                  </div>
                </div>
              </DropdownMenuItem>

              <Button
                variant="link"
                className="w-full bg-secondary hover:no-underline text-[#007bff] text-sm font-normal font-roboto absolute bottom-0 left-0 "
              >
                View More...
              </Button>
            </DropdownMenuContent>
          </DropdownMenu>
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
