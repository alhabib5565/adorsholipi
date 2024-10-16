import { USER_FEEDBACK_STATUS } from "@/constant/user-feedback.constant";

export type TUserFeedback = {
  parentId: string;
  parentName: string;
  parentMobileNumber: number;
  email: string;
  feedbackStatus: TFeedbackStatus;
  message: string;
  _id: string;
  updatedAt: string;
  createdAt: string;
};

type TFeedbackStatus = keyof typeof USER_FEEDBACK_STATUS;
