import AdminUser from "@/components/pages/dashboard/adminUser/AdminUser";
import CreateUser from "@/components/pages/dashboard/adminUser/CreateUser";
import EditUser from "@/components/pages/dashboard/adminUser/EditUser";
import DashboardHome from "@/components/pages/dashboard/dashboardHome/DashboardHome";
import Feedback from "@/components/pages/dashboard/feedback/Feedback";
import GuestUser from "@/components/pages/dashboard/guestUser/GuestUser";
import KidsProfile from "@/components/pages/dashboard/kidsProfile/KidsProfile";
import ParentAccount from "@/components/pages/dashboard/parentAccount/ParentAccount";
import PrintQR from "@/components/pages/dashboard/QRManagement/PrintQR";
import QRActivation from "@/components/pages/dashboard/QRManagement/QRActivation";
import QRGenerate from "@/components/pages/dashboard/QRManagement/QRGenerate";
import KidsVoices from "@/components/pages/dashboard/voice/KidsVoices";
import UploadKidsVoice from "@/components/pages/dashboard/voice/UploadKidsVoice";
import { TUserPath } from "@/type/paths.type";
import {
  LayoutDashboard,
  MessageCircle,
  QrCode,
  User,
  UserCog,
} from "lucide-react";

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
        label: "Create User",
        href: "user-management/edit-user/:id",
        element: <EditUser />,
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
    label: "Voice Upload",
    href: "voice",
    icon: LayoutDashboard,
    element: <KidsVoices />,
  },
  {
    label: "Kids Voice upload",
    href: "voice/upload-kids-voice/:kidsId",
    element: <UploadKidsVoice />,
  },
  {
    label: "Kids Voice edit",
    href: "voice/eidt-kids-voice/:kidsId",
    element: <UploadKidsVoice />,
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
      {
        label: "Print QR",
        href: "qr-management/print-qr",
        icon: QrCode,
        element: <PrintQR />,
      },
    ],
  },
  {
    label: "Feedback",
    href: "feedback",
    icon: MessageCircle,
    element: <Feedback />,
  },
];
