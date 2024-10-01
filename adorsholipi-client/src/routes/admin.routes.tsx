import AdminUser from "@/components/pages/dashboard/adminUser/AdminUser";
import GuestUser from "@/components/pages/dashboard/guestUser/GuestUser";
import KidsProfile from "@/components/pages/dashboard/kidsProfile/KidsProfile";
import ParentAccount from "@/components/pages/dashboard/parentAccount/ParentAccount";
import { TUserPath } from "@/type/paths.type";
import { LayoutDashboard, User, UserCog } from "lucide-react";

export const adminPaths: TUserPath[] = [
  {
    label: "Dashboard",
    href: "/",
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
        element: <KidsProfile />,
      },
      {
        label: "Guest User",
        href: "guest-user",
        icon: User,
        element: <GuestUser />,
      },
    ],
  },
  {
    label: "User Management",
    icon: UserCog,
    children: [
      {
        label: "Admin User",
        href: "admin-user",
        icon: User,
        element: <AdminUser />,
      },
      {
        label: "Admin Roles",
        href: "admin-roles",
        icon: User,
        element: <h3>Admin User</h3>,
      },
    ],
  },
];
