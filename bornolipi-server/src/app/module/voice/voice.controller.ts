import { Request, Response } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import { VoiceService } from './voice.service';
import { sendResponse } from '../../utils/sendResponse';
import httpStatus from 'http-status';

const uploadKidsVoice = catchAsync(async (req: Request, res: Response) => {
  const result = await VoiceService.uploadKidsVoice(req?.file, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Voice upload successfully',
    data: result,
  });
});

const editKidsVoice = catchAsync(async (req: Request, res: Response) => {
  const result = await VoiceService.editKidsVoice(req?.file, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Voice edit successfully',
    data: result,
  });
});

export const VoiceController = {
  uploadKidsVoice,
  editKidsVoice,
};
