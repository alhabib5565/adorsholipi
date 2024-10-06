import httpStatus from 'http-status';
import AppError from '../../error/AppError';
import { TUser } from '../user/user.interface';
import { User } from '../user/user.model';
import { generateUserId } from '../user/user.utils';
import { TLoginUser } from './auth.interface';
import bcrypt from 'bcrypt';
import config from '../../config';
import { createToken, verifyToken } from './auth.utils';

const registerUser = async (payload: TUser) => {
  payload.userId = await generateUserId();
  payload.role = 'User';

  const result = await User.create(payload);

  return result;
};

const loginUser = async (payload: TLoginUser) => {
  const user = await User.findOne({ email: payload.email }).select('+password');
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }

  if (user.isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted !');
  }

  if (user.status === 'Blocked') {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked ! !');
  }

  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    user?.password,
  );
  if (!isPasswordMatched) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'Password does not match!');
  }

  const jwtPayload = {
    email: user.email,
    role: user.role,
    user_id: user._id,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string,
  );

  return {
    accessToken,
    refreshToken,
  };
};

const refreshToken = async (token: string) => {
  if (!token) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
  }

  const decoded = verifyToken(token, config.jwt_refresh_secret as string);

  const user = await User.findOne({ email: decoded.email, role: decoded.role });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }

  if (user.isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted !');
  }

  if (user.status === 'Blocked') {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked ! !');
  }

  const jwtPayload = {
    email: user.email,
    role: user.role,
    user_id: user._id,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  return {
    accessToken,
  };
};

export const AuthService = {
  registerUser,
  loginUser,
  refreshToken,
};
