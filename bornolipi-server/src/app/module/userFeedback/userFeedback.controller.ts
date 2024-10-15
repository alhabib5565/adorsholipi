import { Request, Response } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import { UserFeedbackService } from './userFeedback.service';
import { sendResponse } from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createUserFeedback = catchAsync(async (req: Request, res: Response) => {
  const result = await UserFeedbackService.createUserFeedback(
    req.user.user_id,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Send feedback successfully.',
    data: result,
  });
});

const getAllUserFeedback = catchAsync(async (req: Request, res: Response) => {
  const result = await UserFeedbackService.getAllUserFeedback();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Get All feedback successfully.',
    data: result,
  });
});

const getOneUserFeedback = catchAsync(async (req: Request, res: Response) => {
  const result = await UserFeedbackService.getOneUserFeedback(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Get one feedback successfully.',
    data: result,
  });
});

const editUserFeedback = catchAsync(async (req: Request, res: Response) => {
  const result = await UserFeedbackService.editUserFeedback(
    req.params.id,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Edit feedback successfully.',
    data: result,
  });
});

export const UserFeedbackController = {
  createUserFeedback,
  getAllUserFeedback,
  getOneUserFeedback,
  editUserFeedback,
};
