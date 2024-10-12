import { TQrCode } from './qrCode.interface';
import { QRCode } from './qrCode.model';
import qrcode from 'qrcode';
import { generateQRCodeSerial } from './qrCode.utils';

const generateQRCode = async (payload: TQrCode) => {
  if (Array.isArray(payload.uniqueCode)) {
    //when multiple
    const results = [];

    for (let i = 0; i < payload.uniqueCode.length; i++) {
      const serial = await generateQRCodeSerial();
      const qrCodeData = await qrcode.toDataURL(payload.uniqueCode[i]);
      const qrCode = await QRCode.create({
        uniqueCode: payload.uniqueCode[i],
        qrCodeURL: qrCodeData,
        serial: serial,
      });
      results.push(qrCode);
    }

    return results;
  } else {
    // When only 1
    const serial = await generateQRCodeSerial();
    const qrCodeData = await qrcode.toDataURL(payload.uniqueCode as string);
    payload.qrCodeURL = qrCodeData;
    payload.serial = serial;
    const result = await QRCode.create(payload);
    return result;
  }
};

const getAllQrCode = async () => {
  const result = await QRCode.find();
  return result;
};

const changePrintStatus = async (payload: string[]) => {
  const result = await QRCode.updateMany(
    { uniqueCode: { $in: payload } },
    { $set: { isPrinted: 'Painted' } },
    { new: true },
  );
  console.log(result);
  return result;
};
export const QRCodeService = {
  generateQRCode,
  getAllQrCode,
  changePrintStatus,
};

/*

const generateQRCode = async (payload: TQrCode) => {
  if (Array.isArray(payload.uniqueCode)) {
    //when multiple
    const qrCodePromises = payload.uniqueCode.map(async (code) => {
      const qrCodeData = await qrcode.toDataURL(code);
      return QRCode.create({
        uniqueCode: code,
        qrCodeURL: qrCodeData,
      });
    });

    const results = await Promise.all(qrCodePromises);
    return results;
  } else {
    // When only 1
    const qrCodeData = await qrcode.toDataURL(payload.uniqueCode as string);
    payload.qrCodeURL = qrCodeData;
    const result = await QRCode.create(payload);
    return result;
  }
};
*/
