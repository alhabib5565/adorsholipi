import { QRCode } from './qrCode.model';

export const generateQRCodeSerial = async () => {
  const lastQRCode = await QRCode.findOne({}, { serial: 1 }).sort({
    createdAt: -1,
  });
  return lastQRCode ? lastQRCode.serial + 1 : 1;
};
