import { model, Schema } from 'mongoose';
import { USER_FEEDBACK_STATUS } from './userFeedback.constant';
import { TUserFeedback } from './userFeedback.interface';

const userFeedbackSchema = new Schema<TUserFeedback>(
  {
    parentId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    parentName: { type: String, required: true },
    parentMobileNumber: { type: Number },
    email: { type: String, required: true },
    feedbackStatus: {
      type: String,
      enum: Object.keys(USER_FEEDBACK_STATUS),
      default: 'UnChecked',
      required: true,
    },
    message: { type: String, required: true },
  },
  { timestamps: true },
);

export const UserFeedback = model('UserFeedback', userFeedbackSchema);
