import ParentAccount from "@/components/pages/dashboard/parentAccount/ParentAccount";
import { TUserPath } from "@/type/paths.type";
import { LayoutDashboard, User } from "lucide-react";

export const adminPaths: TUserPath[] = [
  {
    label: "Dashboard",
    href: "dashboard",
    icon: LayoutDashboard,
    element: <h1>dashboard home</h1>,
  },
  {
    label: "User Account",
    icon: User,
    children: [
      {
        label: "Parent Account",
        href: "parent-account",
        icon: User,
        element: <ParentAccount />,
      },
      {
        label: "Kids Profile",
        href: "kids-profile",
        icon: User,
        element: <h1>kids profile</h1>,
      },
    ],
  },
];
