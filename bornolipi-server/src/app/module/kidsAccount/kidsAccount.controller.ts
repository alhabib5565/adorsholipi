import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { Request, Response } from 'express';
import { KidsAccountService } from './kidsAccount.service';

const createKidsAccount = catchAsync(async (req: Request, res: Response) => {
  const result = await KidsAccountService.createKidsAccount(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Create Kids successfully.',
    data: result,
  });
});

const uploadKidsVoice = catchAsync(async (req: Request, res: Response) => {
  const result = await KidsAccountService.uploadKidsVoice(
    req?.file,
    req.params.id,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Voice upload successfully',
    data: result,
  });
});

const editKidsAccount = catchAsync(async (req: Request, res: Response) => {
  const result = await KidsAccountService.editKidsAccount(
    req.params.id,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Voice edit successfully',
    data: result,
  });
});

const getAllKidsAccount = catchAsync(async (req: Request, res: Response) => {
  const result = await KidsAccountService.getAllKidsAccount();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get all kids account successfully',
    data: result,
  });
});

const getSignleKidsAccount = catchAsync(async (req: Request, res: Response) => {
  const result = await KidsAccountService.getSignleKidsAccount(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get single kids account successfully',
    data: result,
  });
});

export const KidsAccountController = {
  createKidsAccount,
  uploadKidsVoice,
  editKidsAccount,
  getAllKidsAccount,
  getSignleKidsAccount,
};
