import { Types } from 'mongoose';
import { USER_FEEDBACK_STATUS } from './userFeedback.constant';

export type TUserFeedback = {
  parentId: Types.ObjectId;
  parentName: string;
  parentMobileNumber: number;
  email: string;
  feedbackStatus: TFeedbackStatus;
  message: string;
};

type TFeedbackStatus = keyof typeof USER_FEEDBACK_STATUS;
