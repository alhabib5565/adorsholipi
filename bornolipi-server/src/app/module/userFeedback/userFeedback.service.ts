import httpStatus from 'http-status';
import AppError from '../../error/AppError';
import { User } from '../user/user.model';
import { TUserFeedback } from './userFeedback.interface';
import { UserFeedback } from './userFeedback.model';

const createUserFeedback = async (user_id: string, payload: TUserFeedback) => {
  const user = await User.findOne({
    _id: user_id,
  });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found!');
  }

  payload.email = user?.email;
  payload.parentId = user._id;
  payload.parentName = user?.name || '';
  payload.parentMobileNumber = user?.phone || 0;

  const result = await UserFeedback.create(payload);
  return result;
};

const getAllUserFeedback = async () => {
  const result = await UserFeedback.find();
  return result;
};

const getOneUserFeedback = async (_id: string) => {
  const result = await UserFeedback.findOne({ _id }).populate('parentId');
  return result;
};

const editUserFeedback = async (
  feedback_id: string,
  paylod: Partial<TUserFeedback>,
) => {
  const result = await UserFeedback.findOneAndUpdate(
    { _id: feedback_id },
    paylod,
    {
      new: true,
      runValidators: true,
    },
  );

  return result;
};

export const UserFeedbackService = {
  createUserFeedback,
  getAllUserFeedback,
  getOneUserFeedback,
  editUserFeedback,
};
