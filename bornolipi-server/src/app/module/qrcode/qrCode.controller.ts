import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { QRCodeService } from './qrCode.service';
import { Request, Response } from 'express';

const getAllQrCode = catchAsync(async (req: Request, res: Response) => {
  const result = await QRCodeService.getAllQrCode();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Get all QR Codes successfully.',
    data: result,
  });
});

const generateQRCode = catchAsync(async (req: Request, res: Response) => {
  const result = await QRCodeService.generateQRCode(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Generate QR Code successfully.',
    data: result,
  });
});
const changePrintStatus = catchAsync(async (req: Request, res: Response) => {
  const result = await QRCodeService.changePrintStatus(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Change QR Code print satus successfully.',
    data: result,
  });
});

export const QRCodeController = {
  getAllQrCode,
  generateQRCode,
  changePrintStatus,
};
