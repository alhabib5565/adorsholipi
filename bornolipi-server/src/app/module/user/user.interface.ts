import { USER_ROLE, USER_STATUS } from './user.constant';

export type TUser = {
  userId: string;
  name: string;
  email: string;
  role: TUserRole;
  password: string;
  status: TUserStatus;
  isDeleted: boolean;
  profileImage?: string;
  phone?: number;
};

export type TUserStatus = keyof typeof USER_STATUS;

export type TUserRole = keyof typeof USER_ROLE;
