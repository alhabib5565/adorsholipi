import AdminUser from "@/components/pages/dashboard/adminUser/AdminUser";
import CreateUser from "@/components/pages/dashboard/adminUser/CreateUser";
import DashboardHome from "@/components/pages/dashboard/dashboardHome/DashboardHome";
import GuestUser from "@/components/pages/dashboard/guestUser/GuestUser";
import KidsProfile from "@/components/pages/dashboard/kidsProfile/KidsProfile";
import ParentAccount from "@/components/pages/dashboard/parentAccount/ParentAccount";
import QRActivation from "@/components/pages/dashboard/QRManagement/QRActivation";
import QRGenerate from "@/components/pages/dashboard/QRManagement/QRGenerate";
import { TUserPath } from "@/type/paths.type";
import { LayoutDashboard, QrCode, User, UserCog } from "lucide-react";

export const adminPaths: TUserPath[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
    element: <DashboardHome />,
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
        label: "Create User",
        href: "user-management/create-user",
        icon: User,
        element: <CreateUser />,
      },
      {
        label: "Admin Roles",
        href: "admin-roles",
        icon: User,
        element: <h3>Admin User</h3>,
      },
    ],
  },
  {
    label: "QR Management",
    icon: QrCode,
    children: [
      {
        label: "Generate QR",
        href: "qr-management/generate-new-qr",
        icon: QrCode,
        element: <QRGenerate />,
      },
      {
        label: "QR Activation",
        href: "qr-management/activation-qr",
        icon: QrCode,
        element: <QRActivation />,
      },
    ],
  },
];
