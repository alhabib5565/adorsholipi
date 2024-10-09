import { model, Schema } from 'mongoose';
import { TQrCode } from './qrCode.interface';

const qrCodeSchema = new Schema<TQrCode>(
  {
    uniqueCode: {
      type: String,
      required: true,
      unique: true,
    },
    qrCodeURL: {
      type: String,
      required: true,
    },
    serial: {
      type: Number,
      required: true,
    },
    isPrinted: {
      type: String,
      enum: ['Un Painted', 'Painted'],
      required: true,
      default: 'Un Painted',
    },
  },
  {
    timestamps: true,
  },
);

export const QRCode = model('QRCode', qrCodeSchema);
