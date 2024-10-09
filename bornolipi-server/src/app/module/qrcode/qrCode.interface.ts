export type TQrCode = {
  uniqueCode: string | string[];
  qrCodeURL: string;
  isPrinted: 'Painted' | 'Un Painted';
  serial: number;
};
