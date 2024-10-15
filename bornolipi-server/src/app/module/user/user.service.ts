import httpStatus from 'http-status';
import { QueryBuilder } from '../../builder/QueryBuilder';
import AppError from '../../error/AppError';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generateUserId } from './user.utils';

const createUser = async (payload: TUser) => {
  payload.userId = await generateUserId();
  const result = await User.create(payload);
  return result;
};

const getAlluser = async (query: Record<string, unknown>) => {
  const searchAbleFields = ['name', 'email'];
  const userQuery = new QueryBuilder(query, User.find())
    .search(searchAbleFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await userQuery.countTotal();
  const result = await userQuery.modelQuery;
  return {
    meta,
    result,
  };
};

const getSingleUser = async (_id: string) => {
  const result = await User.findOne({ _id });
  return result;
};

const updateUser = async (_id: string, payload: Partial<TUser>) => {
  const user = await User.findOne({ _id });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found!!');
  }

  const result = await User.findOneAndUpdate({ _id }, payload, {
    new: true,
  });
  return result;
};

export const UserService = {
  createUser,
  getAlluser,
  getSingleUser,
  updateUser,
};
