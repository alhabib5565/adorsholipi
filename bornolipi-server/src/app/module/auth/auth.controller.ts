import { Request, Response } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import { AuthService } from './auth.service';
import { sendResponse } from '../../utils/sendResponse';
import httpStatus from 'http-status';

const registerUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.registerUser(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Registration successfully done',
    data: result,
  });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { accessToken, refreshToken } = await AuthService.loginUser(req.body);
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: false,
  });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'User Loggin successful',
    data: { accessToken, refreshToken },
  });
});

const refreshToken = catchAsync(async (req, res) => {
  const { refreshToken } = req.cookies;
  const result = await AuthService.refreshToken(refreshToken);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Access token is retrieved successfully!',
    data: result,
  });
});

export const AuthController = {
  registerUser,
  loginUser,
  refreshToken,
};
