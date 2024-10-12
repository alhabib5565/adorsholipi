import express from 'express';
import { QRCodeController } from './qrCode.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { QrCodeValidation } from './qrCode.validation';

const router = express.Router();

router.post(
  '/generate-qr-code',
  validateRequest(QrCodeValidation.createQrCodeValidationShema),
  QRCodeController.generateQRCode,
);

router.patch('/change-print-satus', QRCodeController.changePrintStatus);
router.get('/', QRCodeController.getAllQrCode);

export const qrCodeRouter = router;
